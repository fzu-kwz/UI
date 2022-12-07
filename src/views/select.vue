<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Select 下拉框</h3>
    <p class="usage">
      需要绑定v-model <br />
      size: 大小（string）<br />
      options: 选项（Array）<br />
      allowClear: 显示清空（boolean）<br />
      disabled: 禁用（boolean）
    </p>
    <FormItem label-text="基础用法">
      <KSelect v-model="select" :options="options"></KSelect>
    </FormItem>
    <FormItem label-text="禁用状态">
      <KSelect v-model="select" :options="options" disabled></KSelect>
    </FormItem>
    <FormItem label-text="显示清空">
      <KSelect v-model="select" :options="options" allow-clear></KSelect>
    </FormItem>
    <FormItem label-text="不同大小">
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

const size = ["large", "medium", "", "small"];
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
