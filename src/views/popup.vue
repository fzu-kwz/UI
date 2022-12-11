<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Popup 弹窗</h3>
    <p class="usage">
      position: 位置（string，left | right | top | bottom，默认right）<br />
      width: 宽度（string，默认200）<br />
      content: 内容（string，使用插槽传入内容后无效）<br />
      theme: 默认提供的主题（string，dark | light，默认light）<br />
      trigger插槽: 触发Popup显示的内容
    </p>
    <FormItem label-text="基础用法">
      <div
        v-for="item in popups"
        :key="item.position"
        style="display: flex; justify-content: center;"
      >
        <Popup :position="item.position" :content="item.position + ' popup'">
          <template #trigger>
            <KButton>{{ item.name }}</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="两种主题">
      <div style="display: flex; justify-content: center;">
        <Popup position="top" content="Popup">
          <template #trigger>
            <KButton>light</KButton>
          </template>
        </Popup>
        <Popup position="bottom" content="Popup" theme="dark">
          <template #trigger>
            <KButton>dark</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="空间不足">
      <div style="display: flex; justify-content: space-between;">
        <Popup position="left" content="左边空间不足时，弹窗显示右边">
          <template #trigger>
            <KButton>左边</KButton>
          </template>
        </Popup>
        <Popup position="right" content="右边空间不足时，弹窗显示左边">
          <template #trigger>
            <KButton>右边</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="插槽传入DOM">
      <Popup>
        <template #trigger>
          <KButton>插槽</KButton>
        </template>
        <KButton></KButton>
      </Popup>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Popup, KForm, FormItem, KButton } from "$/index";

const popups = [
  {
    position: "top",
    name: "上边",
  },
  {
    position: "left",
    name: "左边",
  },
  {
    position: "right",
    name: "右边",
  },
  {
    position: "bottom",
    name: "下边",
  },
];
</script>

<style scoped></style>
