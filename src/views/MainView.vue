<template>
  <h1>Main</h1>
  <div class="count">count: {{ count }}</div>
  <img alt="cat" src="../images/cat.jpg" >
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<style lang="scss" scoped>
$custom-color: #cd5c5cff;

.count {
  color: $custom-color;
  font-size: 20px;
}
</style>
