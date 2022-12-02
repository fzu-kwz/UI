<template>
  <KForm>
    <h3 style="margin-top: 0;">Menu 菜单栏</h3>
    <p style="font-size: 14px; margin-top: 0;">
      MenuItem <br />
      title插槽: 菜单项名称 <br />
      route: 链接（string）<hr />
      SubMenu <br />
      title插槽: 菜单项名称 <br />
      默认插槽: 子菜单列表
    </p>

    <FormItem label-text="基础用法" align-top>
      <Menu>
        <MenuItem>
          <template #title>自由飞翔</template>
        </MenuItem>
        <MenuItem>
          <template #title>月亮之上</template>
        </MenuItem>
        <SubMenu>
          <template #title>五月天</template>
          <MenuItem>
            <template #title>温柔</template>
          </MenuItem>
          <MenuItem>
            <template #title>倔强</template>
          </MenuItem>
          <MenuItem route="/button">
            <template #title>按钮</template>
          </MenuItem>
        </SubMenu>
        <MenuItem route="/loading">
          <template #title>加载中</template>
        </MenuItem>
      </Menu>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Menu, MenuItem, SubMenu, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
