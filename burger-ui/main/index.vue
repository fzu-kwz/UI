<template>
  <main class="burger-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
export default {
  name: "Main",
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
