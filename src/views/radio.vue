<template>
  <KForm>
    <h3 style="margin-top: 0;">Radio 单选框</h3>
    <p style="font-size: 14px; margin-top: 0;">
      需要绑定v-model <br />
      value: radio绑定的值 <br />
      disabled: 禁用
    </p>
    <FormItem label-text="基础用法" align-top>
      <Radio v-model="radio" value="1" style="margin-right: 5px;">123</Radio>
      <Radio v-model="radio" value="2">456</Radio>
    </FormItem>
    <FormItem label-text="禁用状态" align-top>
      <Radio disabled v-model="radio" value="1" style="margin-right: 5px;">
        123
      </Radio>
      <Radio disabled v-model="radio" value="2">456</Radio>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Radio, KForm, FormItem } from "$/index";
import { ref } from "vue";

const radio = ref("1");
</script>

<style scoped></style>
