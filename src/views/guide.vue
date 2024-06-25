<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Guide 引导</h3>
    <div class="guide">
      <Card>
        <h3 style="color: red;">
          This site is only for personal study, if there is infringement please
          inform. Thank you!
        </h3>
        <p>
          The theme color refer to
          <a href="https://element.eleme.cn/#/zh-CN" target="_blank">Element</a
          >. If you have any questions, please go to
          <a href="https://github.com/fzu-kwz/UI/issues" target="_blank">
            issues
          </a>
          or send an email to <b>1358848173@qq.com</b>. Thank you!
        </p>
      </Card>
      <div>
        <div class="guide-card">
          <a href="https://element.eleme.cn/#/zh-CN" target="_blank">
            <img src="@/assets/icon/ele.svg" alt="ele" width="80" />
          </a>
        </div>
        <div class="guide-card">
          <a href="https://cn.vuejs.org/" target="_blank">
            <img src="@/assets/icon/vue.svg" alt="vue" height="40" />
          </a>
        </div>
        <div class="guide-card">
          <a href="https://www.tslang.cn/" target="_blank">
            <img src="@/assets/icon/ts.svg" alt="ts" height="40" />
          </a>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Card, Form } from "$/index";
</script>

<style lang="less" scoped>
.guide {
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  &-card {
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(#000, 0.1);
    width: 120px;
    margin: 10px;

    a {
      line-height: 60px;
      display: block;
      img {
        vertical-align: middle;
      }
    }
  }
}
</style>
