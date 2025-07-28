<template>
  <div>
    <nav><a href="/article">Article</a></nav>
    <nav><a href="/bank">Bank</a></nav>
    <ul>
      <li v-for="table in ALLOWED_TABLES" :key="table">
        <a :href="`/api/${table}`" target="_blank" rel="noopener noreferrer">{{
          table
        }}</a>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>
<script setup>
const ALLOWED_TABLES = new Set([
  "article",
  "bank",
  "cloud",
  "experience",
  "food",
  "host",
  "inventory",
  "mail",
  "member",
  "routine",
  "subscription",
  "video",
]);
</script>
