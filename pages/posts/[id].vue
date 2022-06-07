<template>
  <div>
    <h1 v-html="post.title.rendered"></h1>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { PostType } from '~/types/Post'

const route = useRoute()
const postId = route.params.id

const { data: post }: { data: Ref<PostType> } = await useFetch(`https://www.yaoin.net/wp-json/wp/v2/posts/${postId}`)

definePageMeta({
  layout: "default",
});

</script>
