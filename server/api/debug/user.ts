export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const db = hubDatabase()

  const profile = await db.prepare('SELECT * FROM profiles WHERE id = ?').bind(user.id).first()

  return {
    sessionUser: user,
    dbProfile: profile,
    exists: !!profile
  }
})
