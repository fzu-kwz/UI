<template>
  <KForm>
    <h3 style="margin-top: 0;">ColorPicker 颜色选择器</h3>
    <p style="font-size: 14px; margin-top: 0;">
      v-model: 选择的颜色（HEX格式，例子：#ffffff） <br />
      disabled: 禁用 <br />
      size: 大小
    </p>
    <FormItem label-text="基础用法" align-top>
      <ColorPicker></ColorPicker>
    </FormItem>
    <FormItem label-text="禁用状态" align-top>
      <ColorPicker disabled></ColorPicker>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <ColorPicker
        v-for="item in size"
        :size="item"
        style="margin-right: 10px;"
      ></ColorPicker>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { ColorPicker, KForm, FormItem } from "$/index";

const size = ["large", "medium", "", "small"];
</script>

<style scoped></style>
