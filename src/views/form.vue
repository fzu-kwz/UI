<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Form 表单</h3>
    <p class="usage">
      KForm <br />
      frame: 边框（boolean）<br />
      alignTop: 标签置顶（boolean）<br /><br />
      FormItem <br />
      labelText: 标签文本（string）<br />
      labelWidth: 标签宽度（number，默认60）<br />
    </p>
    <FormItem label-text="基础用法">
      <KForm>
        <FormItem label-text="账号：">
          <KInput></KInput>
        </FormItem>
        <FormItem label-text="密码：">
          <KInput></KInput>
        </FormItem>
        <FormItem>
          <KButton type="primary" style="width: 100%;">确定</KButton>
        </FormItem>
      </KForm>
    </FormItem>
    <FormItem label-text="标签置顶">
      <KForm align-top>
        <FormItem label-text="账号：">
          <KInput></KInput>
        </FormItem>
        <FormItem label-text="密码：">
          <KInput></KInput>
        </FormItem>
        <FormItem>
          <KButton type="primary" style="width: 100%;">确定</KButton>
        </FormItem>
      </KForm>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KForm, FormItem, KInput, KButton } from "$/index";
</script>

<style scoped></style>
