<template>
  <div class="k-upload" @click="uploadClick">
    <slot></slot>
    <input
      v-show="false"
      ref="uploadInput"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="fileChange($event, limit, accept, maxSize)"
    />
  </div>
  <slot name="tip"></slot>
  <div v-if="showList">
    <ul class="k-upload-list">
      <li v-for="item in fileList" :key="item.name">
        <span class="k-upload-list-filename">{{ item.name }}</span>
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
    <Progress v-show="fileList.length !== 0" :value="progress"></Progress>
  </div>
</template>

<script lang="ts">
export default {
  name: "Upload",
};
</script>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
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
    default: undefined,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["upload"]);
// 文件列表
const fileList: Array<File> = reactive([]);

const uploadInput = ref<HTMLElement>();

const uploadClick = () => {
  uploadInput.value?.click();
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
  maxSize: number | undefined
) => {
  // 文件类型正则表达式
  const pattern = accept ? new RegExp(accept) : "";
  // 文件上传控件
  const fileInput = event.target as HTMLInputElement;
  // 单次上传文件列表
  const files = fileInput.files as FileList & Array<File>;
  // 单次上传数量
  const uploadLength = files.length;
  // 文件数量限制
  if (fileList.length + uploadLength > limit) {
    alert(`Number of files no more than ${limit}!`);
    return (fileInput.value = "");
  }
  // 文件类型限制
  if (pattern) {
    for (let i = 0; i < uploadLength; i++) {
      const item = files.item(i) as File;
      if (!pattern.test(item.type)) {
        alert(`Only accept ${props.accept}!`);
        return (fileInput.value = "");
      }
    }
  }
  // 文件大小限制
  if (maxSize) {
    for (let i = 0; i < uploadLength; i++) {
      const item = files.item(i) as File;
      if (item.size > maxSize) {
        alert(`File size no more than ${formatSize.value}!`);
        return (fileInput.value = "");
      }
    }
  }
  // 条件符合，推入文件列表
  fileList.push(...files);
  // 生成FormData格式的文件列表
  /* const formData = new FormData();
  for (let i = 0; i < fileList.length; i++) {
    formData.append("file" + i, fileList[i]);
  } */
  // 上传成功事件
  emits("upload", fileList);
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
  /* const formData = new FormData();
  for (let i = 0; i < fileList.length; i++) {
    formData.append("file" + i, fileList[i]);
  } */
  emits("upload", fileList);
};

const formatSize = computed(() => {
  if (!props.maxSize) return undefined;
  if (props.maxSize / 1024 >= 1 && props.maxSize / 1024 < 1024) {
    return props.maxSize / 1024 + "KB";
  }
  if (props.maxSize / 1024 / 1024 >= 1 && props.maxSize / 1024 / 1024 < 1024) {
    return props.maxSize / 1024 / 1024 + "MB";
  }
  if (
    props.maxSize / 1024 / 1024 / 1024 >= 1 &&
    props.maxSize / 1024 / 1024 / 1024 < 1024
  ) {
    return props.maxSize / 1024 / 1024 / 1024 + "GB";
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
