<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Upload 上传</h3>
    <p class="usage">
      accept: 文件类型限制（string）<br />
      showList: 显示上传列表（boolean，默认true）<br />
      multiple: 多文件上传（boolean）<br />
      limit: 文件数量限制（number，默认1）<br />
      maxSize: 文件大小限制（number）<br />
      progress: 进度值（number，默认0）<br />
      @upload: 文件上传 / 文件移除事件（回调参数文件列表）<br />
      默认插槽: 触发文件选择框的内容<br />
      tip插槽: 提示文本
    </p>
    <FormItem label-text="基础用法">
      <Upload>
        <KButton type="primary">上传文件</KButton>
      </Upload>
    </FormItem>
    <FormItem label-text="图片上传">
      <Upload
        :multiple="true"
        :max-size="1024 * 1024 * 2"
        :limit="3"
        accept="image/*"
        @upload="upload"
      >
        <img
          class="add-icon"
          src="../../k-vue3-comp//assets/icon/add.svg"
          alt="add"
          width="30"
          height="30"
        />
        <template #tip>
          <div class="tip">
            Only accept pictures, file size no more than 2MB and the number of
            files no more than 3
          </div>
        </template>
      </Upload>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Upload, KForm, FormItem, KButton } from "$/index";

const upload = (fileList: Array<File>) => {};
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
