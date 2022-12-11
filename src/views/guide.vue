<template>
  <div class="guide">
    <h2>KUI for Vue3 + Ts</h2>
    <p>
      Some components refer to
      <a href="https://element.eleme.cn/#/zh-CN" target="_blank">Element</a>
      , more components continue to be developed.
    </p>
    <p>
      If you have any questions, please go to
      <a href="https://github.com/fzu-kwz/UI/issues" target="_blank">
        issues
      </a>
      or send an email to 1358848173@qq.com. Thank you!
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
    font-weight: 600;

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
