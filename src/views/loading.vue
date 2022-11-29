<template>
  <KForm>
    <h3 style="margin-top: 0;">Loading 加载中</h3>
    <p style="font-size: 14px; margin-top: 0;">
      text: 文字说明 <br />
      width: 宽度 <br />
      height: 高度
    </p>
    <FormItem label-text="基础用法" align-top>
      <Loading v-if="loading"></Loading>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Loading, KForm, FormItem } from "$/index";
import { ref } from "vue";

const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1500);
</script>

<style scoped></style>
