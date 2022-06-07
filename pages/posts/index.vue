<template>
  <div class="page-posts">
    <h1>Posts</h1>
    <div class="posts">
      <div v-for="post in posts" :key="post.id">
        <h2>
          <NuxtLink :to="`/posts/${post.id}`" class="nav-link" activeClass="active">
            <span v-html="post.title.rendered"></span>
          </NuxtLink>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PostType } from '~/types/Post'

const config = useRuntimeConfig()

const title = ref('Posts Page Title')
const { data: posts } = await useFetch<PostType[]>(`${config.public.API_BASE_URL}/wp/v2/posts`)

definePageMeta({
  layout: "default",
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
