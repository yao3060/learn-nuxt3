<template>
  <div>
    <TheHeader />
    <main class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>


<script setup lang="ts">
useHead({
  title: `My App`,
})
</script>

<style scoped>
</style>
