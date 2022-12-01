<template>
  <div class="upload" @click="uploadClick">
    <slot> </slot>
    <input
      v-show="false"
      ref="upload-input"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="fileChange($event, limit, accept, maxSize)"
    />
  </div>
  <slot name="tip"></slot>
  <div class="file-list" v-if="showList">
    <ul class="file-list-ul">
      <li v-for="item in fileList" :key="item.name">
        <span class="file-name">{{ item.name }}</span>
        <img
          class="delete"
          src="../assets/icon/delete.svg"
          alt="delete"
          width="16"
          height="16"
          @click="removeFile(item.name)"
        />
      </li>
    </ul>
    <Progress v-show="fileList.length !== 0" :value="percentage"></Progress>
  </div>
</template>

<script lang="ts">
export default {
  name: "Upload",
};
</script>

<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, reactive } from "vue";
import { Progress } from "..";

const props = defineProps({
  accept: {
    type: String,
    default: undefined,
  },
  showList: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: undefined,
  },
  limit: {
    type: Number,
    default: 1,
  },
  maxSize: {
    type: Number,
    default: 1024 * 1024 * 2,
  },
  percentage: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["upload"]);

const fileList: Array<File> = reactive([]);

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const uploadClick = () => {
  (proxy?.$refs["upload-input"] as HTMLElement).click();
};

/**
 * @description 文件上传方法
 * @param event 文件上传事件
 * @param limit 文件数量限制
 * @param accept 匹配文件类型
 * @param maxSize 文件大小限制
 */
const fileChange = (
  event: Event,
  limit: number,
  accept: string | undefined,
  maxSize: number
) => {
  // 文件类型正则表达式
  const pattern = accept ? new RegExp(accept) : "";
  // 文件上传控件
  const fileInput = event.target as HTMLInputElement;
  // 文件列表
  const files = fileInput.files as FileList & Array<File>;
  // 文件个数
  const filesLength = files.length;

  // 文件数量限制
  if (filesLength > limit) {
    alert(`Number of files no more than ${limit}!`);
    return (fileInput.value = "");
  }
  // 文件类型限制
  if (pattern) {
    for (let i = 0; i < filesLength; i++) {
      const item = files.item(i) as File;
      if (!pattern.test(item.type)) {
        alert(`Only accept ${props.accept}!`);
        return (fileInput.value = "");
      }
    }
  }
  // 文件大小限制
  for (let i = 0; i < filesLength; i++) {
    const item = files.item(i) as File;
    if (item.size > maxSize) {
      alert(`File size no more than ${maxSize / 1024 / 1024}MB!`);
      return (fileInput.value = "");
    }
  }

  fileList.splice(0);
  fileList.push(...files);

  const formData = new FormData();
  for (let i = 0; i < filesLength; i++) {
    formData.append("file" + i, files.item(i) as File);
  }
  emits("upload", formData);
  fileInput.value = "";
};

const removeFile = (name: string) => {
  const list: Array<File> = reactive([]);
  list.push(...fileList);
  fileList.splice(0);
  fileList.push(
    ...list.filter((item) => {
      return item.name !== name;
    })
  );
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
