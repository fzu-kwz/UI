<template>
  <KForm>
    <p style="font-size: 14px; margin-top: 0;">
      需要绑定v-model，size: 大小，options: 选项，allowClear: 显示清空
    </p>
    <FormItem label-text="基础用法" align-top>
      <KSelect v-model="select" :options="options"></KSelect>
    </FormItem>
    <FormItem label-text="显示清空" align-top>
      <KSelect v-model="select" :options="options" allow-clear></KSelect>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <KSelect
        v-model="select"
        v-for="item in size"
        :size="item"
        :options="options"
        style="margin-bottom: 5px;"
      >
      </KSelect>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KSelect, KForm, FormItem } from "$/index";
import { ref } from "vue";

const size = ["large", "medium", "small"];
const select = ref();
const options = [
  {
    value: "月亮之上",
    name: "月亮之上",
  },
  {
    value: "自由飞翔",
    name: "自由飞翔",
  },
  {
    value: "全是爱",
    name: "全是爱",
  },
];
</script>

<style scoped></style>
