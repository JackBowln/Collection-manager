export default defineEventHandler(async (event: any) => {
  const db = hubDatabase()

  const collections = await db.prepare(`
    SELECT c.id, c.name, c.description, c.created_at, c.visibility,
           p.full_name, p.avatar_url
    FROM collections c
    JOIN profiles p ON p.id = c.user_id
    WHERE c.visibility = 'public'
    ORDER BY c.created_at DESC
  `).all()

  return collections.results.map((c: any) => ({
    id: c.id,
    name: c.name,
    description: c.description,
    created_at: c.created_at,
    visibility: c.visibility,
    owner: {
      full_name: c.full_name,
      avatar_url: c.avatar_url
    }
  }))
})
