<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Popup 弹窗</h3>
    <p class="usage">
      position: 位置（string，left | right | bottom，默认right）<br />
      width: 宽度（string，默认200）<br />
      content: 内容（string，使用插槽传入内容后无效）<br />
      trigger插槽: 触发Popup显示的内容
    </p>
    <FormItem label-text="基础用法">
      <div style="display: flex; justify-content: center;">
        <Popup position="left" content="Popup" width="90">
          <template #trigger>
            <KButton>左边</KButton>
          </template>
        </Popup>
        <Popup position="bottom" width="90">
          <template #trigger>
            <KButton>下边</KButton>
          </template>
          <span>Popup</span>
        </Popup>
        <Popup position="right" content="Popup" width="90">
          <template #trigger>
            <KButton>右边</KButton>
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
</script>

<style scoped></style>
