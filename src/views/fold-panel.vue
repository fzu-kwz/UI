<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">FoldPanel 折叠面板</h3>
    <p class="usage">
      FoldPanelItem<br />
      title: 标题（string）<br />
      title插槽: 自定义标题内容（增加图标等）
    </p>
    <FormItem label-text="基础用法">
      <FoldPanel>
        <FoldPanelItem title="你瞒我瞒">
          <div>无言的亲亲亲 侵袭我心</div>
          <div>仍宁愿亲口讲你累得很</div>
          <div>如除我以外在你心</div>
          <div>还多出一个人 你瞒住我</div>
          <div>我亦瞒住我太合衬</div>
        </FoldPanelItem>
        <FoldPanelItem>
          <template #title>
            <img src="@/assets/icon/alert.svg" alt="alert" />
            飘向北方 (Live)
          </template>
          <div>梦想的旅途</div>
          <div>我背井离乡</div>
          <div>肩上扛的行囊</div>
          <div>装着对未来的梦想</div>
        </FoldPanelItem>
      </FoldPanel>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { FoldPanel, FoldPanelItem, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
