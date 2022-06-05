<template>
  <div class="page-posts">
    <h1>Posts</h1>
  </div>

</template>

<script setup lang="ts">

const title = ref('Posts Page Title')

definePageMeta({
  layout: "home",
});

useHead({
  title,
  meta: [
    { name: 'description', content: 'My amazing site.' },
    { name: 'keywords', content: 'nuxt, vue' }
  ]
})

</script>

<style scoped>
</style>
