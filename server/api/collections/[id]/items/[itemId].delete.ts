export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const itemId = getRouterParam(event, 'itemId')
  const db = hubDatabase()

  // Verify ownership of the collection
  const col = await db.prepare('SELECT user_id FROM collections WHERE id = ?').bind(collectionId).first()
  if (!col || (col as any).user_id !== user.id) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  // Delete item (values will be deleted via cascade)
  await db.prepare('DELETE FROM items WHERE id = ? AND collection_id = ?').bind(itemId, collectionId).run()

  return { success: true }
})
