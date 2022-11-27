<template>
  <h3 style="text-align: center;">A Simple Components Library For Vue3</h3>
  <KForm>
    <p class="title">
      按钮（参考ElementUI，type: 类型，size: 大小，round: 圆角，circle:
      圆形，disabled: 禁用）
    </p>
    <FormItem label-text="基础用法" align-top>
      <KButton v-for="item in btnType" :type="item" class="kbtn">
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆角按钮" align-top>
      <KButton v-for="item in btnType" :type="item" round class="kbtn">
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆形按钮" align-top>
      <KButton v-for="item in btnType" :type="item" circle class="kbtn">
        <img src="/favicon.ico" alt="add" width="14" height="14" />
      </KButton>
    </FormItem>
    <FormItem label-text="禁用状态" align-top>
      <KButton v-for="item in btnType" :type="item" disabled class="kbtn">
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <KButton v-for="item in size" :size="item" class="kbtn">
        {{ item }}
      </KButton>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">
      分页（total: 总数，showJump: 显示跳转，@currentChange获取当前页面）
    </p>
    <FormItem label-text="基础用法" align-top>
      <Pagination></Pagination
    ></FormItem>
    <FormItem label-text="显示跳转" align-top>
      <Pagination show-jump></Pagination>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">加载中（width: 宽度，height: 高度）</p>
    <FormItem label-text="基础用法" align-top>
      <Loading></Loading>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">
      输入框（需要绑定v-model，type: 类型，size: 大小，allowClear:
      显示清空，allowView(密码框): 显示密码，placeholder:
      占位文本，autocomplete: 自动补全，autofocus: 自动获取焦点，max:
      最大值，min: 最小值，maxlength: 最大长度，minlength: 最小长度，readonly:
      只读，disabled: 禁用，resize(文本域): 纵向可缩放，rows(文本域):
      行数，cols(文本域): 列数）
    </p>
    <FormItem label-text="基础用法" align-top>
      <KInput placeholder="请输入"></KInput>
    </FormItem>
    <FormItem label-text="禁用状态" align-top>
      <KInput disabled></KInput>
    </FormItem>
    <FormItem label-text="显示清空" align-top>
      <KInput allow-clear></KInput>
    </FormItem>
    <FormItem label-text="显示密码" align-top>
      <KInput type="password" allow-view></KInput>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <KInput v-for="item in size" :size="item" style="margin-bottom: 5px;">
      </KInput>
    </FormItem>
    <FormItem label-text="文本域" align-top>
      <KInput type="textarea" rows="5" resize placeholder="请输入"></KInput>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">
      下拉框（需要绑定v-model，size: 大小，options: 选项，allowClear: 显示清空）
    </p>
    <FormItem label-text="基础用法" align-top>
      <KSelect :options="options"></KSelect>
    </FormItem>
    <FormItem label-text="显示清空" align-top>
      <KSelect v-model="select" :options="options" allow-clear></KSelect>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <KSelect
        v-for="item in size"
        :size="item"
        :options="options"
        style="margin-bottom: 5px;"
      >
      </KSelect>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">
      上传（button: 按钮类型，accept: 文件类型限制，showList:
      显示上传列表，multiple: 多文件上传，limit: 文件数量限制，maxSize:
      文件大小限制，@upload文件上传成功事件）
    </p>
    <FormItem label-text="基础用法" align-top>
      <Upload :multiple="true" :limit="3"></Upload>
    </FormItem>
    <FormItem label-text="按钮类型" align-top>
      <Upload button :multiple="true" :limit="3"></Upload>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">空状态（text: 描述文字）</p>
    <FormItem label-text="基础用法" align-top>
      <Empty></Empty>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">
      懒加载图片（scrollNode: 滚动元素，src: 图片路径，width: 图片宽度，height:
      图片高度）
    </p>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
  </KForm>

  <KForm>
    <p class="title">
      回到顶部（backTopNode: 滚动元素，height:
      滚动高度达到此参数值才出现，right: 距离页面右边距， bottom:
      距离页面底部距离）
    </p>
    <FormItem label-text="基础用法" align-top>
      <BackTop></BackTop>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import {
  KInput,
  KButton,
  KSelect,
  LazyLoadImg,
  BackTop,
  Pagination,
  Upload,
  Empty,
  Loading,
  KForm,
  FormItem,
} from "@/index";
import { ref } from "vue";

const btnType = ["default", "primary", "success", "info", "warning", "danger"];
const size = ["large", "medium", "small"];
const select = ref();
const options = [
  {
    value: "月亮之上",
    name: "月亮之上",
  },
  {
    value: "自由飞翔",
    name: "自由飞翔",
  },
  {
    value: "全是爱",
    name: "全是爱",
  },
];
</script>

<style lang="less" scoped>
.title {
  font-size: 14px;
}

.kbtn {
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
