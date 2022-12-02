<template>
  <KForm>
    <h3 style="margin-top: 0;">Dialog 对话框</h3>
    <p style="font-size: 14px; margin-top: 0;">
      v-model:visible: 是否显示对话框 <br />
      width: 对话框宽度（Number类型） <br />
      top: 顶部距离（Number类型） <br />
      @close: 关闭对话框事件 <br />
      #footer: 底部插槽
    </p>
    <FormItem label-text="基础用法" align-top>
      <KButton @click="visible1 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible1">
        <span>基础用法</span>
      </Dialog>
    </FormItem>
    <FormItem label-text="底部插槽" align-top>
      <KButton @click="visible2 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible2">
        <span>底部插槽</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible2 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible2 = false">确定</KButton>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label-text="显示标题" align-top>
      <KButton @click="visible3 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible3" title="标题">
        <span>显示标题</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible3 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible3 = false">确定</KButton>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label-text="显示关闭" align-top>
      <KButton @click="visible4 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible4" title="标题" show-close>
        <span>显示关闭</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible4 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible4 = false">确定</KButton>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label-text="顶部距离" align-top>
      <KButton @click="visible5 = true">打开Dialog</KButton>
      <Dialog v-model:visible="visible5" title="标题" show-close :top="200">
        <span>顶部距离：200px</span>
        <template #footer>
          <KButton style="margin-right: 10px;" @click="visible5 = false">
            取消
          </KButton>
          <KButton type="primary" @click="visible5 = false">确定</KButton>
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
const visible4 = ref(false);
const visible5 = ref(false);
</script>

<style scoped></style>
