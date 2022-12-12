<template>
  <div class="guide">
    <h2>KUI based on Vue3 and TypeScript</h2>
    <p>Usage: npm i k-vue3-comp</p>
    <p>
      Some components refer to
      <a href="https://element.eleme.cn/#/zh-CN" target="_blank">Element</a>.
      More components continue to be developed.
    </p>
    <p>
      If you have any questions, please go to
      <a href="https://github.com/fzu-kwz/UI/issues" target="_blank">
        issues
      </a>
      or send an email to <b>1358848173@qq.com</b>. Thank you!
    </p>
    <div>
      <Card class="guide-card">
        <a href="https://element.eleme.cn/#/zh-CN" target="_blank">
          <img src="@/assets/icon/ele.svg" alt="ele" />
        </a>
      </Card>
      <Card class="guide-card">
        <a href="https://cn.vuejs.org/" target="_blank">
          <img src="@/assets/icon/vue.svg" alt="vue" />
        </a>
      </Card>
      <Card class="guide-card">
        <a href="https://www.tslang.cn/" target="_blank">
          <img src="@/assets/icon/ts.svg" alt="ts" />
        </a>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from "$/index";
</script>

<style lang="less" scoped>
.guide {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  &-card {
    width: 120px;
    margin: 10px auto;

    a {
      display: block;
    }
  }
}
</style>
