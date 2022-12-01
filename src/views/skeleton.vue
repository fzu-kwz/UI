<template>
  <KForm>
    <h3 style="margin-top: 0;">Skeleton 骨架屏</h3>
    <p style="font-size: 14px; margin-top: 0;">
      rows: 行数 <br />
      loading: 显示骨架屏 <br />
      delay: 延迟渲染的时间（避免请求响应过快，出现屏闪）
    </p>
    <FormItem label-text="基础用法" align-top>
      <Skeleton></Skeleton>
    </FormItem>
    <FormItem label-text="防止抖动" align-top>
      <KButton
        type="primary"
        size="small"
        @click="loading = !loading"
        style="margin-bottom: 10px;"
      >
        切换 Loading
      </KButton>
      <Skeleton :loading="loading" :delay="500">
        <img src="../../k-vue3-comp/assets/img/error.png" />
      </Skeleton>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Skeleton, KForm, FormItem, KButton } from "$/index";
import { ref } from "vue";

const loading = ref(true);
</script>

<style scoped></style>
