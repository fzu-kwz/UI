<template>
  <div class="burger-breadcrumb">
    <span class="burger-breadcrumb-item" v-for="(item, index) in list">
      <span
        class="burger-breadcrumb-name"
        :class="item.route ? 'link' : ''"
        @click="router.push(item.route as string)"
      >
        {{ item.name }}
      </span>
      <span class="burger-breadcrumb-separator" v-if="index !== list.length - 1">
        {{ separator }}
      </span>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Breadcrumb",
};
</script>

<script setup lang="ts">
import { PropType } from "vue";
import { useRouter } from "vue-router";
import { BreadcrumbList } from "./types";

defineProps({
  list: {
    type: Array as PropType<Array<BreadcrumbList>>,
    default: () => {
      return [];
    },
  },
  separator: {
    type: String,
    default: "/",
  },
});

const router = useRouter();
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
