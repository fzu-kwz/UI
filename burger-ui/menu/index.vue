<template>
  <ul class="burger-menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'Menu',
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
