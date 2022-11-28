<template>
  <section :class="vertical ? 'vertical' : ''">
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: "Container",
};
</script>

<script setup lang="ts">
import { useSlots, VNode, Component, ref } from "vue";

const vertical = ref(false);

const slots = useSlots();
if (slots && slots.default) {
  slots.default().forEach((vn: VNode) => {
    const component = vn.type as Component;
    if (component.name === "Header" || component.name === "Footer") {
      vertical.value = true;
    }
    if (vertical.value) return;
  });
}
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
