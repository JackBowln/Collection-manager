export default defineEventHandler(async (event) => {
  const db = hubDatabase()

  // Read schema file
  const schema = await useStorage('root').getItem('server/database/schema.sql')

  if (!schema) {
    throw createError({
      statusCode: 404,
      message: 'Schema file not found'
    })
  }

  // Split into statements (basic split by semicolon)
  // This is a simple implementation, might need robustness for complex SQL
  const statements = (schema as string)
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0)

  const results = []

  for (const statement of statements) {
    try {
      await db.prepare(statement).run()
      results.push({ status: 'success', statement: statement.substring(0, 50) + '...' })
    } catch (e: any) {
      results.push({ status: 'error', error: e.message, statement: statement.substring(0, 50) + '...' })
    }
  }

  return {
    success: true,
    results
  }
})
