<template>
  <KForm>
    <h3 style="margin-top: 0;">Input 输入框</h3>
    <p style="font-size: 14px; margin-top: 0;">
      需要绑定v-model <br />
      type: 类型 <br />
      size: 大小 <br />
      allowClear: 显示清空 <br />
      allowView(密码框): 显示密码 <br />
      placeholder: 占位文本 <br />
      autocomplete: 自动补全 <br />
      autofocus: 自动获取焦点 <br />
      max: 最大值 <br />
      min: 最小值 <br />
      maxlength: 最大长度 <br />
      minlength: 最小长度 <br />
      readonly: 只读 <br />
      disabled: 禁用 <br />
      resize(文本域): 纵向可缩放 <br />
      rows(文本域): 行数 <br />
      cols(文本域): 列数
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
