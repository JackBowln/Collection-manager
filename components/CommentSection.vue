<template>
  <div class="mt-8">
    <h3 class="text-xl font-bold mb-4">Comments</h3>
    
    <!-- Add Comment -->
    <div class="mb-6 flex gap-3" v-if="user">
      <UAvatar :src="user.user_metadata.avatar_url" :alt="user.user_metadata.full_name" />
      <div class="flex-1 space-y-2">
        <UTextarea v-model="newComment" placeholder="Write a comment..." :rows="2" autoresize />
        <div class="flex justify-end">
          <UButton size="sm" :loading="posting" :disabled="!newComment.trim()" @click="postComment">Post</UButton>
        </div>
      </div>
    </div>

    <!-- List -->
    <div class="space-y-4">
      <div v-if="comments.length === 0" class="text-center text-gray-500 py-4">
        No comments yet. Be the first!
      </div>
      
      <div v-else v-for="comment in comments" :key="comment.id" class="flex gap-3">
        <UAvatar :src="comment.profiles?.avatar_url" :alt="comment.profiles?.full_name" size="sm" />
        <div class="flex-1">
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <div class="flex justify-between items-start mb-1">
              <span class="font-semibold text-sm">{{ comment.profiles?.full_name || 'Anonymous' }}</span>
              <span class="text-xs text-gray-500">{{ new Date(comment.created_at).toLocaleDateString() }}</span>
            </div>
            <p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{{ comment.content }}</p>
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

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()

const comments = ref<any[]>([])
const newComment = ref('')
const posting = ref(false)

const loadComments = async () => {
  const { data, error } = await supabase
    .from('comments')
    .select(`
      id, 
      content, 
      created_at, 
      profiles ( full_name, avatar_url )
    `)
    .eq('collection_id', props.collectionId)
    .order('created_at', { ascending: false })
  
  if (!error && data) {
    comments.value = data
  }
}

const postComment = async () => {
  if (!newComment.value.trim() || !user.value) return
  
  posting.value = true
  try {
    const { error } = await supabase
      .from('comments')
      .insert({
        collection_id: props.collectionId,
        user_id: user.value.id,
        content: newComment.value.trim()
      })
    
    if (error) throw error
    
    newComment.value = ''
    loadComments()
    
  } catch (error: any) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  } finally {
    posting.value = false
  }
}

onMounted(loadComments)
</script>
