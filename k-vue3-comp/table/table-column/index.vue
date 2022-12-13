<template></template>

<script lang="ts">
export default {
  name: "TableColumn",
};
</script>

<script setup lang="ts">
defineProps({
  prop: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
  width: {
    type: String,
    default: undefined,
  },
  align: {
    type: String,
    default: undefined,
  },
});
</script>

<style scoped></style>
