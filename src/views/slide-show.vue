<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">SlideShow 幻灯片（under development）</h3>
    <p class="usage">
      ！建议不少于3张图片时候使用（debug中）<br />
      width: 图片宽度（number，默认400）<br />
      height: 图片高度（number，默认200）<br />
      imgs: 图片访问地址（Array: SlideImg）<br />
      delay: 切换延迟（number，默认3000，单位ms）<br />
      arrow: 切换箭头的显示方式（string， always | hover，默认always）<br />
      SlideImg: 图片数据格式（src: (string，图片访问路径)，alt:
      (string，图片替代文本，可选参数)，link?:
      (string，点击图片跳转地址，可选参数)）
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
    link:
      "https://img2.baidu.com/it/u=4137537498,3737648297&fm=253&fmt=auto?w=300&h=200",
    src:
      "https://img2.baidu.com/it/u=4137537498,3737648297&fm=253&fmt=auto?w=300&h=200",
  },
  {
    link:
      "https://img2.baidu.com/it/u=971342122,1533426919&fm=253&fmt=auto?w=300&h=200",
    src:
      "https://img2.baidu.com/it/u=971342122,1533426919&fm=253&fmt=auto?w=300&h=200",
  },
  {
    link:
      "https://img1.baidu.com/it/u=3039983131,1650897883&fm=253&fmt=auto?w=300&h=200",
    src:
      "https://img1.baidu.com/it/u=3039983131,1650897883&fm=253&fmt=auto?w=300&h=200",
  },
  {
    link:
      "https://img1.baidu.com/it/u=1300668939,1504410366&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=858",
    src:
      "https://img1.baidu.com/it/u=1300668939,1504410366&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=858",
  },
  {
    link:
      "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
    src:
      "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
  },
];
</script>

<style scoped></style>
