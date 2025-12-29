export default defineEventHandler((event) => {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
})
