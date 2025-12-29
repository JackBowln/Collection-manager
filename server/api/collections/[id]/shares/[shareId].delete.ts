export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const shareId = getRouterParam(event, 'shareId')
  const db = hubDatabase()

  // Verify ownership of the collection
  const col = await db.prepare('SELECT user_id FROM collections WHERE id = ?').bind(collectionId).first()
  if (!col || (col as any).user_id !== user.id) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  // Delete share
  await db.prepare('DELETE FROM collection_shares WHERE id = ? AND collection_id = ?').bind(shareId, collectionId).run()

  return { success: true }
})
