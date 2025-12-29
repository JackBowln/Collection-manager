export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const db = hubDatabase()

  // GET /api/collections/[id]/items - List all items in pivot format
  if (event.method === 'GET') {
    // 1. Get all items
    const items = await db.prepare('SELECT id, created_at FROM items WHERE collection_id = ? ORDER BY created_at DESC')
      .bind(collectionId).all()

    // 2. Get all values for these items
    const values = await db.prepare(`
      SELECT iv.item_id, iv.field_id, iv.value 
      FROM item_values iv
      JOIN items i ON i.id = iv.item_id
      WHERE i.collection_id = ?
    `).bind(collectionId).all()

    // 3. Pivot the data
    const itemMap = new Map()
    items.results.forEach(item => {
      itemMap.set(item.id, { id: item.id, created_at: item.created_at })
    })

    values.results.forEach((iv: any) => {
      const item = itemMap.get(iv.item_id)
      if (item) {
        item[iv.field_id] = JSON.parse(iv.value)
      }
    })

    return Array.from(itemMap.values())
  }

  // POST /api/collections/[id]/items - Create or Update Item
  if (event.method === 'POST') {
    const body = await readBody(event)
    const itemId = body.id || crypto.randomUUID()

    // Upsert Item
    await db.prepare(`
      INSERT INTO items (id, collection_id)
      VALUES (?, ?)
      ON CONFLICT(id) DO UPDATE SET id = id -- Just to trigger upsert logic if needed
    `).bind(itemId, collectionId).run()

    // Save Values
    if (body.values && typeof body.values === 'object') {
      for (const [fieldId, value] of Object.entries(body.values)) {
        await db.prepare(`
          INSERT INTO item_values (id, item_id, field_id, value)
          VALUES (?, ?, ?, ?)
          ON CONFLICT(item_id, field_id) DO UPDATE SET value = EXCLUDED.value
        `).bind(crypto.randomUUID(), itemId, fieldId, JSON.stringify(value)).run()
      }
    }

    return { id: itemId }
  }
})
