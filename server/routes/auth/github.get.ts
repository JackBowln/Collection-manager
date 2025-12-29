export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }: any) {
    const db = hubDatabase()

    // Sync user with profiles table
    try {
      await db.prepare(`
            INSERT INTO profiles (id, email, full_name, avatar_url)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                email = EXCLUDED.email,
                full_name = EXCLUDED.full_name,
                avatar_url = EXCLUDED.avatar_url
        `).bind(
        String(user.id), // Unique ID from GitHub
        user.email || user.login,
        user.name || (user as any).login,
        user.avatar_url
      ).run()
    } catch (e) {
      console.error('Error syncing profile:', e)
    }

    await setUserSession(event, {
      user: {
        id: String(user.id),
        email: user.email || user.login,
        name: user.name || (user as any).login,
        avatar: user.avatar_url
      }
    })
    return sendRedirect(event, '/dashboard')
  }
})
