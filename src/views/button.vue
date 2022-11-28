<template>
  <KForm>
    <p style="font-size: 14px; margin-top: 0;">
      参考ElementUI，type: 类型，size: 大小，round: 圆角，circle:
      圆形，disabled: 禁用
    </p>
    <FormItem label-text="基础用法" align-top>
      <KButton v-for="item in type" :type="item">
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆角按钮" align-top>
      <KButton v-for="item in type" :type="item" round>
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆形按钮" align-top>
      <KButton v-for="item in type" :type="item" circle>
        <img src="/favicon.ico" alt="add" width="14" height="14" />
      </KButton>
    </FormItem>
    <FormItem label-text="禁用状态" align-top>
      <KButton v-for="item in type" :type="item" disabled>
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <KButton v-for="item in size" :size="item">
        {{ item }}
      </KButton>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KButton, KForm, FormItem } from "$/index";

const type = ["default", "primary", "success", "info", "warning", "danger"];
const size = ["large", "medium", "small"];
</script>

<style scoped>
.k-button {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
