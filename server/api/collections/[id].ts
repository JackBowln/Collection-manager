export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const id = getRouterParam(event, 'id')
  const db = hubDatabase()

  // Verify ownership helper
  const verifyOwnership = async () => {
    const col = await db.prepare('SELECT user_id FROM collections WHERE id = ?').bind(id).first()
    if (!col || col.user_id !== user.id) {
      throw createError({ statusCode: 403, message: 'Forbidden' })
    }
  }

  // GET /api/collections/[id]
  if (event.method === 'GET') {
    const collection = await db.prepare('SELECT * FROM collections WHERE id = ?').bind(id).first()
    if (!collection) throw createError({ statusCode: 404, message: 'Not found' })

    // Check visibility/access
    if (collection.user_id !== user.id && collection.visibility === 'private') {
      // Check if shared
      const share = await db.prepare('SELECT id FROM collection_shares WHERE collection_id = ? AND (user_id = ? OR email = ?)')
        .bind(id, user.id, user.email).first()
      if (!share) throw createError({ statusCode: 403, message: 'Forbidden' })
    }

    const fields = await db.prepare('SELECT * FROM fields WHERE collection_id = ? ORDER BY folder_order ASC')
      .bind(id).all()

    return {
      ...collection,
      fields: fields.results
    }
  }

  // PATCH /api/collections/[id] (Update settings & fields)
  if (event.method === 'PATCH') {
    await verifyOwnership()
    const body = await readBody(event)

    // 1. Update collection metadata
    await db.prepare('UPDATE collections SET name = ?, description = ?, visibility = ? WHERE id = ?')
      .bind(body.name, body.description, body.visibility, id).run()

    // 2. Process Fields (if provided)
    if (body.fields && Array.isArray(body.fields)) {
      for (const field of body.fields) {
        const fieldId = field.id || crypto.randomUUID()
        await db.prepare(`
          INSERT INTO fields (id, collection_id, name, type, options, folder_order, visible, required, is_dynamic)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            name = EXCLUDED.name,
            type = EXCLUDED.type,
            options = EXCLUDED.options,
            folder_order = EXCLUDED.folder_order,
            visible = EXCLUDED.visible,
            required = EXCLUDED.required,
            is_dynamic = EXCLUDED.is_dynamic
        `).bind(
          fieldId,
          id,
          field.name,
          field.type,
          JSON.stringify(field.options || []),
          field.folder_order || 0,
          field.visible ? 1 : 0,
          field.required ? 1 : 0,
          field.is_dynamic ? 1 : 0
        ).run()
      }
    }

    return { success: true }
  }

  // DELETE /api/collections/[id]
  if (event.method === 'DELETE') {
    await verifyOwnership()
    await db.prepare('DELETE FROM collections WHERE id = ?').bind(id).run()
    return { success: true }
  }
})
