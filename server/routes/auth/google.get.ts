export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }: any) {
    console.log('Google Auth Success:', user.email)

    // Step 1: Just set session and redirect
    await setUserSession(event, {
      user: {
        id: user.sub,
        email: user.email,
        name: user.name,
        avatar: user.picture
      }
    })

    return sendRedirect(event, '/dashboard')
  }
})
