<template>
  <div class="mt-8">
    <h3 class="text-xl font-bold mb-4">Comentários</h3>
    
    <!-- Add Comment -->
    <div class="mb-6 flex gap-3" v-if="user">
      <UAvatar :src="(user as any).avatar" :alt="(user as any).name" />
      <div class="flex-1 space-y-2">
        <UTextarea v-model="newComment" placeholder="Escreva um comentário..." :rows="2" autoresize />
        <div class="flex justify-end">
          <UButton size="sm" :loading="posting" :disabled="!newComment.trim()" @click="postComment">Comentar</UButton>
        </div>
      </div>
    </div>

    <!-- List -->
    <div class="space-y-4">
      <div v-if="comments.length === 0" class="text-center text-gray-500 py-4">
        Nenhum comentário ainda. Seja o primeiro!
      </div>
      
      <div v-else v-for="comment in comments" :key="(comment as any).id" class="flex gap-3">
        <UAvatar :src="(comment as any).avatar_url" :alt="(comment as any).full_name" size="sm" />
        <div class="flex-1">
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <div class="flex justify-between items-start mb-1">
              <span class="font-semibold text-sm">{{ (comment as any).full_name || 'Anônimo' }}</span>
              <span class="text-xs text-gray-500">{{ new Date((comment as any).created_at).toLocaleDateString() }}</span>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{{ (comment as any).content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collectionId: string
}>()

const { user } = useUserSession()
const toast = useToast()

const comments = ref<any[]>([])
const newComment = ref('')
const posting = ref(false)

const loadComments = async () => {
  try {
    const data = await $fetch(`/api/collections/${props.collectionId}/comments`)
    comments.value = (data as any)
  } catch (e) {
    console.error('Error loading comments:', e)
  }
}

const postComment = async () => {
  if (!newComment.value.trim() || !user.value) return
  
  posting.value = true
  try {
    await $fetch(`/api/collections/${props.collectionId}/comments`, {
      method: 'POST',
      body: {
        content: newComment.value.trim()
      }
    })
    
    newComment.value = ''
    loadComments()
    
  } catch (error: any) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } finally {
    posting.value = false
  }
}

onMounted(loadComments)
</script>
