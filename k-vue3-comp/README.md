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
  <BackTop :back-top-node="backTopNode" />
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
  <BackTop :back-top-node="backTopNode" />
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
