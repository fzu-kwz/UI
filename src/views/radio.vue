<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Radio 单选框</h3>
    <p class="usage">
      需要绑定v-model <br />
      value: 绑定的值（string | number | boolean）<br />
      disabled: 禁用（boolean）
    </p>
    <FormItem label-text="基础用法">
      <Radio
        v-for="item in radios"
        :key="item"
        v-model="radio"
        :value="item"
        style="margin-right: 10px;"
      >
        {{ item }}
      </Radio>
    </FormItem>
    <FormItem label-text="禁用状态">
      <Radio
        v-for="item in radios"
        :key="item"
        v-model="radio"
        :value="item"
        disabled
        style="margin-right: 10px;"
      >
        {{ item }}
      </Radio>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Radio, KForm, FormItem } from "$/index";
import { ref } from "vue";

const radio = ref("单选框A");
const radios = ["单选框A", "单选框B"];
</script>

<style scoped></style>
