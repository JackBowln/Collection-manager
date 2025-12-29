export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)
  const body = await readBody(event)
  const db = hubDatabase()

  // 1. Update profiles table
  await db.prepare('UPDATE profiles SET full_name = ?, avatar_url = ? WHERE id = ?')
    .bind(body.full_name, body.avatar_url, user.id).run()

  // 2. Update session data
  await setUserSession(event, {
    user: {
      ...user,
      name: body.full_name,
      avatar: body.avatar_url
    }
  })

  return { success: true }
})
