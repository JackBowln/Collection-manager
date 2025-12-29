export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const db = hubDatabase()

  // GET /api/collections
  if (event.method === 'GET') {
    const collections = await db.prepare('SELECT * FROM collections WHERE user_id = ? ORDER BY created_at DESC')
      .bind(user.id)
      .all()

    return collections.results
  }

  // POST /api/collections
  if (event.method === 'POST') {
    const body = await readBody(event)
    const id = crypto.randomUUID()

    // Ensure user exists in profiles (in case DB was reset but session persists)
    const existing = await db.prepare('SELECT id FROM profiles WHERE id = ?').bind(user.id).first()
    if (!existing) {
      console.log('Restoring missing profile for', user.id)
      await db.prepare(`
            INSERT INTO profiles (id, email, full_name, avatar_url)
            VALUES (?, ?, ?, ?)
        `).bind(user.id, user.email, user.name, user.avatar).run()
    }

    await db.prepare(`
      INSERT INTO collections (id, user_id, name, description, visibility)
      VALUES (?, ?, ?, ?, ?)
    `).bind(id, user.id, body.name, body.description, body.visibility || 'private').run()

    // If there are fields, insert them too
    if (body.fields && Array.isArray(body.fields)) {
      for (const field of body.fields) {
        const fieldId = crypto.randomUUID()
        await db.prepare(`
          INSERT INTO fields (id, collection_id, name, type, options, folder_order, visible, required, is_dynamic)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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

    return { id }
  }
})
