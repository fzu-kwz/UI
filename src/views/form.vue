<template>
  <KForm>
    <h3 style="margin-top: 0">Form 表单</h3>
    <p style="font-size: 14px; margin-top: 0;">
      KForm <br />
      frame: 带边框 FormItem <hr />
      FormItem <br />
      labelText: 标签文本 <br />
      labelWidth: 标签宽度 <br />
      alignTop: 标签置顶
    </p>
    <FormItem label-text="基础用法" align-top>
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
    <FormItem label-text="表单边框" align-top>
      <KForm frame>
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
    <FormItem label-text="标签置顶" align-top>
      <KForm>
        <FormItem label-text="账号：" align-top>
          <KInput></KInput>
        </FormItem>
        <FormItem label-text="密码：" align-top>
          <KInput></KInput>
        </FormItem>
        <FormItem align-top>
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
