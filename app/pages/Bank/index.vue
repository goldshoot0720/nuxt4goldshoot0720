<template>
  <div>
    <h1>Article Page</h1>
    <div v-if="bank?.data" v-for="item in bank.data" :key="item.id">
      <h2>{{ item.name }}</h2>
      <h3>{{ item.deposit }}</h3>
      <pre>{{ item.address }}</pre>
      <h5>{{ item.withdrawals }}</h5>
      <h5>{{ item.transfer }}</h5>
      <img :src="item.cardimg" width="25%" />
    </div>
    <div v-else>資料載入中或發生錯誤...</div>
  </div>
</template>

<script setup>
const { data: bank, pending, error } = await useFetch("/api/bank");

if (error.value) {
  console.error("API 錯誤：", error.value);
} else {
  console.log("銀行資料：", bank.value);
}
</script>

<style scoped></style>
