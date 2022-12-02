<template>
  <KForm>
    <h3 style="margin-top: 0;">Upload 上传</h3>
    <p style="font-size: 14px; margin-top: 0;">
      accept: 文件类型限制 <br />
      showList: 显示上传列表 <br />
      multiple: 多文件上传 <br />
      limit: 文件数量限制 <br />
      maxSize: 文件大小限制 <br />
      tip插槽: 提示文本 <br />
      @upload: 文件上传成功事件，回调参数FormData格式的数据
    </p>
    <FormItem label-text="基础用法" align-top>
      <Upload :multiple="true" :limit="3">
        <KButton type="primary">上传文件</KButton>
      </Upload>
    </FormItem>
    <FormItem label-text="图片上传" align-top>
      <Upload :multiple="true" :limit="3" accept="image/*" @upload="upload">
        <img
          class="add-icon"
          src="../../k-vue3-comp//assets/icon/add.svg"
          alt="add"
          width="30"
          height="30"
        />
        <template #tip>
          <div class="tip">Only upload pictures, and no more than 2MB</div>
        </template>
      </Upload>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Upload, KForm, FormItem, KButton } from "$/index";

const upload = (formData: FormData) => {
  formData.forEach((item) => console.log(item));
};
</script>

<style lang="less" scoped>
.add-icon {
  border: 1px dashed #d9d9d9;
  border-radius: 3px;
  padding: 70px;
  cursor: pointer;

  &:hover {
    border-color: #409eff;
  }
}
.tip {
  color: #606266;
  font-size: 14px;
}
</style>
