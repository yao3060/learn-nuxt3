<template>
  <div class="page-index">
    <h1>Index page</h1>
    <div @click="log">{{ msg }}</div>
    <div>Count: {{ counterStore.count }}</div>
    <button @click="counterStore.increment()">INC</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
const counterStore = useCounterStore()
// 变量
const msg = 'Hello!'
const title = 'Home Page Title'

// 函数
function log() {
  console.log(msg)
}

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
