<template>
  <div>Redirecting...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

if (user.value) {
  await navigateTo('/dashboard')
} else {
  await navigateTo('/login')
}
</script>
