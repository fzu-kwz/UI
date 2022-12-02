<template>
  <KForm>
    <h3 style="margin-top: 0;">Dialog 对话框</h3>
    <p style="font-size: 14px; margin-top: 0;">
      需要绑定v-model:visible: 是否显示对话框（boolean，默认false）<br />
      title: 标题（string）<br />
      width: 对话框宽度（number，默认500）<br />
      top: 顶部距离（number，默认80）<br />
      showClose: 显示关闭按钮（boolean，默认true）<br />
      modalClose: 点击遮罩层关闭（boolean，默认true）<br />
      @close: 关闭对话框事件 <br />
      #footer: 底部插槽
    </p>
    <FormItem label-text="基础用法" align-top>
      <KButton @click="visible1 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible1">
        <span>基础用法</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible1 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible1 = false">确定</KButton>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label-text="显示标题" align-top>
      <KButton @click="visible2 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible2" title="标题">
        <span>显示标题</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible2 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible2 = false">确定</KButton>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label-text="顶部距离" align-top>
      <KButton @click="visible3 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible3" title="标题" :top="200">
        <span>顶部距离：200px</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible3 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible3 = false">确定</KButton>
        </template>
      </Dialog>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Dialog, KForm, FormItem, KButton } from "$/index";
import { ref } from "vue";

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
</script>

<style scoped></style>
