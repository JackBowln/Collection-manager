export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const db = hubDatabase()

  // Verify access (can view/edit if public or shared or owner)
  const col = await db.prepare('SELECT user_id, visibility FROM collections WHERE id = ?').bind(collectionId).first()
  if (!col) throw createError({ statusCode: 404, message: 'Not found' })

  if ((col as any).user_id !== user.id && (col as any).visibility === 'private') {
    const share = await db.prepare('SELECT id FROM collection_shares WHERE collection_id = ? AND user_id = ?')
      .bind(collectionId, user.id).first()
    if (!share) throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  // GET /api/collections/[id]/comments
  if (event.method === 'GET') {
    const comments = await db.prepare(`
      SELECT c.*, p.full_name, p.avatar_url
      FROM comments c
      JOIN profiles p ON p.id = c.user_id
      WHERE c.collection_id = ?
      ORDER BY c.created_at DESC
    `).bind(collectionId).all()

    return comments.results
  }

  // POST /api/collections/[id]/comments
  if (event.method === 'POST') {
    const body = await readBody(event)
    const id = crypto.randomUUID()

    await db.prepare('INSERT INTO comments (id, collection_id, user_id, content) VALUES (?, ?, ?, ?)')
      .bind(id, collectionId, user.id, body.content).run()

    return { id }
  }
})
