export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const collectionId = getRouterParam(event, 'id')
  const fieldId = getRouterParam(event, 'fieldId')
  const db = hubDatabase()

  const rows = await db.prepare(`
    SELECT value 
    FROM item_values 
    WHERE field_id = ? 
    LIMIT 20
  `).bind(fieldId).all()

  return {
    rawRows: rows.results,
    parsedAttempts: rows.results.map((r: any) => {
      try {
        return { raw: r.value, parsed: JSON.parse(r.value), type: typeof JSON.parse(r.value) }
      } catch (e) {
        return { raw: r.value, error: e.message }
      }
    })
  }
})
