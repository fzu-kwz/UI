<template>
  <KForm>
    <h3 style="margin-top: 0;">Loading 加载中</h3>
    <p class="usage">
      text: 文字说明（string）<br />
    </p>
  </KForm>
  <Loading v-if="loading"></Loading>
</template>

<script setup lang="ts">
import { Loading, KForm, FormItem } from "$/index";
import { ref } from "vue";

const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 500);
</script>

<style scoped></style>
