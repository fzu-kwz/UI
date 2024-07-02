<template>
  <li
    class="burger-menu-item"
    tabindex="-1"
    ref="menuItem"
    @click="route ? router.push(route) : ''"
  >
    <span class="burger-menu-item-label">
      <slot name="label">{{ label }}</slot>
    </span>
  </li>
</template>

<script lang="ts">
export default {
  name: 'MenuItem',
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  route: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: undefined,
  },
});

const menuItem = ref<HTMLElement>();

const router = useRouter();

onMounted(() => {
  if (menuItem.value?.parentElement?.className.includes('burger-sub-menu')) {
    menuItem.value.style.padding = '0 40px';
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
