div<template>
  <KForm>
    <h3 style="margin-top: 0;">Popup 弹窗</h3>
    <p style="font-size: 14px; margin-top: 0;">
      position: 位置（string，left | right | bottom，默认right）<br />
      width: 宽度（string，默认200）<br />
      content: 内容（string，使用插槽传入内容后无效）<br />
    </p>
    <FormItem label-text="基础用法" align-top>
      <div style="display: flex; justify-content: center;">
        <Popup position="left" content="This is a Popup">
          <template #trigger>
            <KButton>左边</KButton>
          </template>
        </Popup>
        <Popup
          position="bottom"
          content="This is a Popup"
          style="margin: 0 10px;"
        >
          <template #trigger>
            <KButton>下边</KButton>
          </template>
        </Popup>
        <Popup position="right" content="This is a Popup">
          <template #trigger>
            <KButton>右边</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="空间不足" align-top>
      <div style="display: flex; justify-content: space-between;">
        <Popup position="left" content="左边空间不足时，弹窗显示左下角">
          <template #trigger>
            <KButton>左边</KButton>
          </template>
        </Popup>
        <Popup position="right" content="右边空间不足时，弹窗显示右下角">
          <template #trigger>
            <KButton>右边</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="插槽传入DOM" align-top>
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
