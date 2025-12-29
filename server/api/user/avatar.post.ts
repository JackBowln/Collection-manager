export default defineEventHandler(async (event: any) => {
  const { user } = await (requireUserSession(event) as any)

  // Read multipart form data
  const formData = await readMultipartFormData(event)
  if (!formData) throw createError({ statusCode: 400, message: 'No data' })

  const file = formData.find(f => f.name === 'file')
  if (!file) throw createError({ statusCode: 400, message: 'No file' })

  const fileExt = file.filename?.split('.').pop() || 'png'
  const fileName = `avatars/${user.id}-${Date.now()}.${fileExt}`

  // Upload to Blob
  const blob = await hubBlob().put(fileName, file.data, {
    contentType: file.type,
    addRandomSuffix: false
  })

  return { url: blob.pathname } // Adjust based on how hubBlob returns URL
})
