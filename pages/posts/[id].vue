<template>
  <div>
    <h1 v-html="post.title.rendered"></h1>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script setup lang="ts">
import { PostType } from '~/types/Post'

const route = useRoute()
const config = useRuntimeConfig()
const postId = route.params.id

const { data: post } = await useFetch<PostType>(`${config.public.API_BASE_URL}/wp/v2/posts/${postId}`)

definePageMeta({
  layout: "default",
});

</script>
