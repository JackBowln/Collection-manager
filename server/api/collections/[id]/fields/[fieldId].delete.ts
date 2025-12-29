export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const collectionId = getRouterParam(event, 'id')
  const fieldId = getRouterParam(event, 'fieldId')
  const db = hubDatabase()

  // Verify ownership of the collection
  const col = await db.prepare('SELECT user_id FROM collections WHERE id = ?').bind(collectionId).first()
  if (!col || (col as any).user_id !== user.id) {
    throw createError({ statusCode: 403, message: 'Forbidden' })
  }

  // Delete field (item values will be deleted via cascade)
  await db.prepare('DELETE FROM fields WHERE id = ? AND collection_id = ?').bind(fieldId, collectionId).run()

  return { success: true }
})
