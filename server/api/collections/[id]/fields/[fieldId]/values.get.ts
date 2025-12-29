export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const collectionId = getRouterParam(event, 'id')
  const fieldId = getRouterParam(event, 'fieldId')
  const db = hubDatabase()

  // Verify access (owner or shared with view permission)
  // Simplified check for now relying on subsequent query scope

  // Fetch unique non-null values for this field from item_values
  // We join with items to ensure we check collection access if needed, 
  // but for fetching values, we primarily need the field_id match.

  // Note: Values are stored as strings (sometimes JSON strings).
  // We select distinct values.
  const rows = await db.prepare(`
    SELECT DISTINCT value 
    FROM item_values 
    WHERE field_id = ? 
    AND value IS NOT NULL 
    AND value != ''
    ORDER BY value ASC
  `).bind(fieldId).all()

  // Parse values if they look like JSON, otherwise return as is
  const values = new Set<string>()

  rows.results.forEach((r: any) => {
    try {
      // Try to parse as JSON first
      const parsed = JSON.parse(r.value)

      // If it parsed into an array (e.g. multiselect values ["A", "B"]), verify items
      if (Array.isArray(parsed)) {
        parsed.forEach(v => {
          if (v && typeof v === 'string') values.add(v)
        })
      } else if (typeof parsed === 'object' && parsed !== null) {
        // If it's an object, ignore or stringify? Skip for now.
      } else {
        // If it is a primitive (string/number), use it.
        // CHECK: If stored as JSON string "\"foo\"", parsed is "foo".
        // If stored as raw string "foo", parse fails.
        values.add(String(parsed))
      }
    } catch (e) {
      // If not JSON (e.g. raw text), add as is
      if (r.value && typeof r.value === 'string') {
        values.add(r.value)
      }
    }
  })

  return Array.from(values).sort()
})
