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

const title = ref('Posts Page Title')
const posts = ref<PostType[]>([])
const { data } = await useFetch('https://www.yaoin.net/wp-json/wp/v2/posts')
posts.value = data.value as PostType[]
// for (const i in data.value) {
//   posts.value.push(Post.parse(data.value[i]))
// }

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
