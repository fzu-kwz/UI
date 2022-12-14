<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Popup 弹窗</h3>
    <p class="usage">
      position: 弹窗位置（string，left | right | top |
      bottom，默认top，左右空间不足时显示在相反位置）<br />
      width: 弹窗宽度（string，默认200）<br />
      content: 弹窗内容（string，使用插槽传入内容后无效）<br />
      theme: 弹窗主题（string，dark | light，默认light）<br />
      refer插槽: 触发弹窗显示的元素<br />
      默认插槽: 弹窗内容
    </p>
    <FormItem label-text="基础用法">
      <div
        v-for="item in popups"
        :key="item.position"
        style="display: flex; justify-content: center;"
      >
        <Popup :position="item.position" :content="item.position + ' popup'">
          <template #refer>
            <KButton>{{ item.name }}</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="两种主题">
      <div style="display: flex; justify-content: center;">
        <Popup position="top" content="Popup">
          <template #refer>
            <KButton>light</KButton>
          </template>
        </Popup>
        <Popup position="bottom" content="Popup" theme="dark">
          <template #refer>
            <KButton>dark</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="插槽传入DOM">
      <Popup position="right">
        <template #refer>
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
