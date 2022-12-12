<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">LazyLoadImg 懒加载图片</h3>
    <p class="usage">
      ！注意，target需要已经挂载的元素，因为懒加载图片作为子组件会比父组件先挂载，target作为props需要提前有元素传递到懒加载图片组件
      <br /><br />
      target: 滚动元素（HTMLElement | Window，默认window）<br />
      loadingSrc: 加载提示图片路径（string）<br />
      src: 图片路径（string）<br />
      width: 图片宽度（number，默认200）<br />
      height: 图片高度（number，默认200）
    </p>
    <FormItem label-text="基础用法">
      <LazyLoadImg
        :target="target"
        loading-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0dbd39dd274025f21e0a4016cfcb32653b24536a364f-9jIt3B_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673413433&t=fc9e94334a41a49fe3a863139bedfb74"
        src="/favicon.ico"
        v-for="item in 5"
        style="display: block;"
      ></LazyLoadImg>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { LazyLoadImg, KForm, FormItem } from "$/index";

const target = document.getElementsByTagName("main")[0];
</script>

<style scoped></style>
