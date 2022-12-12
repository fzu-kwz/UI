<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">SlideShow 幻灯片（under development）</h3>
    <p class="usage">
      width: 图片宽度（number，默认400）<br />
      height: 图片高度（number，默认200）<br />
      imgs: 图片访问地址（Array: string）<br />
      delay: 切换延迟（number，默认3000，单位ms，！小于2000的默认为2000）<br />
      arrow: 切换箭头的显示方式（string， always | hover，默认always）
    </p>
    <FormItem label-text="基础用法">
      <SlideShow :imgs="imgs" width="300"></SlideShow>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KForm, FormItem, SlideShow } from "$/index";
import { SlideImg } from "$/slide-show/types";

const imgs: Array<SlideImg> = [
  {
    src:
      "https://img2.baidu.com/it/u=4137537498,3737648297&fm=253&fmt=auto?w=300&h=200",
  },
  {
    src:
      "https://img2.baidu.com/it/u=971342122,1533426919&fm=253&fmt=auto?w=300&h=200",
  },
  {
    src:
      "https://img1.baidu.com/it/u=3039983131,1650897883&fm=253&fmt=auto?w=300&h=200",
  },
];
</script>

<style scoped></style>
