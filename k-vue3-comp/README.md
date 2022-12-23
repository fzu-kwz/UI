# Description

A Simple Components Library For Vue3

# Install

npm i k-vue3-comp

# Use

- Global import

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import KUI from "k-vue3-comp";

const app = createApp(App);
app.use(KUI);
app.mount(document.getElementById("app") as HTMLElement);
```

```vue
// App.vue
<template>
  <!-- There will be no type prompt -->
  <BackTop :target="backTopNode" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const backTopNode = ref();
onMounted(() => {
  backTopNode.value = document.getElementsByTagName("main")[0];
});
</script>

<style lang="less" scoped></style>
```

- Local import

```vue
// App.vue
<template>
  <BackTop :target="backTopNode" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BackTop } from "k-vue3-comp";

const backTopNode = ref();
onMounted(() => {
  backTopNode.value = document.getElementsByTagName("main")[0];
});
</script>

<style lang="less" scoped></style>
```

# Menu

    ├─aside                侧边栏
    ├─assets               静态文件
    │ ├─icon               svg图标
    │ └─img                图片
    ├─avatar               头像
    ├─back-top             返回顶部
    ├─button               按钮
    ├─card                 卡片
    ├─checkbox             多选框
    ├─color-picker         颜色选择器
    ├─container            布局容器
    ├─counter              计数器
    ├─dialog               对话框
    ├─empty                空状态
    ├─fold-panel           折叠面板
    │ └─fold-panel-item    折叠面板项
    ├─footer               页脚
    ├─form                 表单
    │ └─form-item          表单项
    ├─header               页眉
    ├─input                输入框
    ├─lazy-load-img        懒加载图片
    ├─loading              加载中
    ├─main                 主体
    ├─menu                 菜单栏
    │ ├─menu-item          菜单项
    │ └─sub-menu           二级菜单
    ├─pagination           分页
    ├─popup                弹窗
    ├─progress             进度条
    ├─radio                单选框
    ├─select               下拉框
    ├─skeleton             骨架屏
    ├─slide-show           幻灯片
    ├─slider               滑块
    ├─switch               开关
    ├─table                表格
    ├─tip                  提示
    └─upload               上传
    index.d.ts             声明文件
    index.ts               组件导出入口
    package.json           依赖项及版本
    README.md              说明
