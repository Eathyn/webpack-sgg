<template>
  <h1>Home</h1>
  <div class="home">
    <div class="count">count: {{ count }}</div>
  </div>
  <img alt="avatar" src="../images/avatar.jpg" />
</template>

<script setup>
import { ref } from "vue";

const count = ref(1);
</script>

<style lang="less" scoped>
.home {
  .count {
    color: dimgray;
    font-size: 20px;
  }
}
</style>
