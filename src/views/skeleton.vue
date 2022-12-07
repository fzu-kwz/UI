<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Skeleton 骨架屏</h3>
    <p class="usage">
      rows: 行数（number，默认4）<br />
      loading: 显示骨架屏（boolean，默认true）<br />
      delay: 延迟渲染DMO的时间（number，默认500）
    </p>
    <FormItem label-text="基础用法">
      <Skeleton></Skeleton>
    </FormItem>
    <FormItem label-text="防止抖动">
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
