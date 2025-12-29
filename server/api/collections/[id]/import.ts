export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const db = hubDatabase()

  // Verify ownership of the collection
  const col = await db.prepare('SELECT user_id FROM collections WHERE id = ?').bind(collectionId).first()
  if (!col || (col as any).user_id !== user.id) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  const body = await readBody(event)
  const items = body.items || []

  if (!Array.isArray(items)) {
    throw createError({ statusCode: 400, message: 'Items must be an array' })
  }

  // Use a transaction if possible, but D1 batch is better
  const statements = []

  for (const itemData of items) {
    const itemId = crypto.randomUUID()

    // Insert item
    statements.push(
      db.prepare('INSERT INTO items (id, collection_id) VALUES (?, ?)').bind(itemId, collectionId)
    )

    // Insert values
    if (itemData.values && typeof itemData.values === 'object') {
      for (const [fieldId, value] of Object.entries(itemData.values)) {
        statements.push(
          db.prepare(`
            INSERT INTO item_values (id, item_id, field_id, value)
            VALUES (?, ?, ?, ?)
          `).bind(crypto.randomUUID(), itemId, fieldId, JSON.stringify(value))
        )
      }
    }
  }

  if (statements.length > 0) {
    // Chunk statements to avoid D1 limits (max statements per batch)
    const CHUNK_SIZE = 10
    for (let i = 0; i < statements.length; i += CHUNK_SIZE) {
      const chunk = statements.slice(i, i + CHUNK_SIZE)
      await db.batch(chunk)
    }
  }

  return { imported: items.length }
})
