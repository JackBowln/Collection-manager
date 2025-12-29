export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const db = hubDatabase()

  // Verify ownership of the collection
  const col = await db.prepare('SELECT user_id FROM collections WHERE id = ?').bind(collectionId).first()
  if (!col || (col as any).user_id !== user.id) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  // GET /api/collections/[id]/shares
  if (event.method === 'GET') {
    const shares = await db.prepare(`
      SELECT cs.id, cs.user_id, p.email, p.full_name, p.avatar_url
      FROM collection_shares cs
      JOIN profiles p ON p.id = cs.user_id
      WHERE cs.collection_id = ?
    `).bind(collectionId).all()

    // Convert back to nested profile object for frontend compatibility if needed
    return shares.results.map((s: any) => ({
      id: s.id,
      user_id: s.user_id,
      profiles: {
        id: s.user_id,
        email: s.email,
        full_name: s.full_name,
        avatar_url: s.avatar_url
      }
    }))
  }

  // POST /api/collections/[id]/shares
  if (event.method === 'POST') {
    const body = await readBody(event)
    const shareEmail = body.email

    // 1. Find user by email
    const targetUser = await db.prepare('SELECT id FROM profiles WHERE email = ?').bind(shareEmail).first()
    if (!targetUser) {
      throw createError({ statusCode: 404, message: 'User not found' })
    }

    // 2. Insert share
    const id = crypto.randomUUID()
    try {
      await db.prepare('INSERT INTO collection_shares (id, collection_id, user_id) VALUES (?, ?, ?)')
        .bind(id, collectionId, (targetUser as any).id).run()
    } catch (e: any) {
      if (e.message.includes('UNIQUE')) {
        throw createError({ statusCode: 409, message: 'Already shared' })
      }
      throw e
    }

    return { success: true }
  }

  // DELETE /api/collections/[id]/shares (or reuse DELETE [id]/shares/[shareId])
  // We'll use a dynamic param for shareId if needed or body
})
