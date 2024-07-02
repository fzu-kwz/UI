<template>
  <img src="../assets/image/1.jpg" alt="" />
  <div id="canvas-box"></div>
  <Button @click="handleCut">图片裁剪</Button>
</template>

<script setup lang="ts">
import { Button } from '$/index';

let canvas: HTMLCanvasElement | null = null; // 缓存canvas元素
let image: HTMLImageElement | null = null; // 缓存img元素

const handleCut = () => {
  if (!canvas) {
    // 创建一个canvas元素
    canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;

    // 获取canvas-box元素
    const box = document.querySelector('#canvas-box');
    if (box) {
      // 清除之前的canvas（如果有）
      box.innerHTML = '';
      // 将canvas元素添加到canvas-box中
      box.appendChild(canvas);
    }
  }

  if (!image) {
    // 获取页面上的img元素
    image = document.querySelector('img') as HTMLImageElement;
    if (!image) {
      console.error('No image found on the page.');
      return;
    }
  }

  // 获取canvas的2D渲染上下文
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get 2D context from the canvas.');
    return;
  }

  // 定义裁剪参数对象（这里可以根据需要动态设置）
  const cutParams = {
    image: image,
    sx: 0,
    sy: 0,
    sw: 100,
    sh: 100,
    dx: 0,
    dy: 0,
    dw: canvas.width, // 使用canvas的宽度
    dh: canvas.height, // 使用canvas的高度
  };

  // 在canvas上绘制裁剪后的图片
  ctx.drawImage(
    cutParams.image,
    cutParams.sx,
    cutParams.sy,
    cutParams.sw,
    cutParams.sh,
    cutParams.dx,
    cutParams.dy,
    cutParams.dw,
    cutParams.dh
  );
};
</script>
