<template>
  <div>
    <h1>Article Page</h1>
    <div v-for="item in article.data" :key="item.id">
      <h2>{{ item.title }}</h2>
      <pre>{{ item.content }}</pre>
      <img :src="item.url1" width="50%" />
    </div>
  </div>
</template>

<script setup>
const { data: article } = await useFetch("/api/article");
console.log(article.value.data);
</script>

<style scoped></style>
