<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Menu 菜单栏</h3>
    <p class="usage">
      MenuItem <br />
      title插槽: 菜单项名称 <br />
      route: 链接（string）<br /><br />
      SubMenu <br />
      title插槽: 菜单项名称 <br />
      默认插槽: 子菜单列表
    </p>
    <FormItem label-text="基础用法">
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
          <MenuItem route="/pagination">
            <template #title>分页</template>
          </MenuItem>
        </SubMenu>
      </Menu>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Menu, MenuItem, SubMenu, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
