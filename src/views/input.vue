<template>
  <KForm>
    <p style="font-size: 14px; margin-top: 0;">
      需要绑定v-model，type: 类型，size: 大小，allowClear:
      显示清空，allowView(密码框): 显示密码，placeholder:
      占位文本，autocomplete: 自动补全，autofocus: 自动获取焦点，max:
      最大值，min: 最小值，maxlength: 最大长度，minlength: 最小长度，readonly:
      只读，disabled: 禁用，resize(文本域): 纵向可缩放，rows(文本域):
      行数，cols(文本域): 列数
    </p>
    <FormItem label-text="基础用法" align-top>
      <KInput v-model="value" placeholder="请输入" />
    </FormItem>
    <FormItem label-text="禁用状态" align-top>
      <KInput v-model="value" disabled />
    </FormItem>
    <FormItem label-text="显示清空" align-top>
      <KInput v-model="value" allow-clear />
    </FormItem>
    <FormItem label-text="显示密码" align-top>
      <KInput v-model="value" type="password" allow-view />
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <KInput
        v-model="value"
        v-for="item in size"
        :size="item"
        style="margin-bottom: 5px;"
      />
    </FormItem>
    <FormItem label-text="文本域" align-top>
      <KInput
        v-model="value"
        type="textarea"
        rows="5"
        resize
        placeholder="请输入"
      />
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KInput, KForm, FormItem } from "$/index";
import { ref } from "vue";

const size = ["large", "medium", "small"];
const value = ref();
</script>

<style scoped></style>
