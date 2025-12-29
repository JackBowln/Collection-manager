export default defineEventHandler(async (event) => {
  const db = hubDatabase()

  try {
    await db.prepare('ALTER TABLE fields ADD COLUMN is_dynamic INTEGER DEFAULT 0').run()
    return { success: true, message: 'Column is_dynamic added' }
  } catch (e: any) {
    if (e.message.includes('duplicate column')) {
      return { success: true, message: 'Column already exists' }
    }
    throw createError({ statusCode: 500, message: e.message })
  }
})
