<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Input 输入框</h3>
    <p class="usage">
      需要绑定v-model <br />
      type: 类型（stirng）<br />
      size: 大小（stirng）<br />
      allowClear: 显示清空（boolean）<br />
      allowView(密码框): 显示密码（boolean）<br />
      placeholder: 占位文本（string）<br />
      autocomplete: 自动补全（string）<br />
      autofocus: 自动获取焦点（boolean）<br />
      max: 最大值（number | string）<br />
      min: 最小值（number | string）<br />
      maxlength: 最大长度（number | string）<br />
      minlength: 最小长度（number | string）<br />
      readonly: 只读（boolean）<br />
      disabled: 禁用（boolean）<br />
      resize(文本域): 纵向可缩放（boolean）<br />
      rows(文本域): 行数（number | string）<br />
      cols(文本域): 列数（number | string）<br />
      k-input-suffix插槽: 后置图标按钮
    </p>
    <FormItem label-text="基础用法">
      <KInput v-model="value" placeholder="请输入" />
    </FormItem>
    <FormItem label-text="禁用状态">
      <KInput v-model="value" disabled />
    </FormItem>
    <FormItem label-text="显示清空">
      <KInput v-model="value" allow-clear />
    </FormItem>
    <FormItem label-text="显示密码">
      <KInput v-model="value" type="password" allow-view />
    </FormItem>
    <FormItem label-text="不同大小">
      <KInput
        v-model="value"
        v-for="item in size"
        :size="item"
        style="margin-bottom: 5px;"
      />
    </FormItem>
    <FormItem label-text="文本域">
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

const size = ["large", "medium", "", "small"];
const value = ref();
</script>

<style scoped></style>
