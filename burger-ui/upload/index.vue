<template>
  <div class="burger-upload" @click="uploadClick">
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
    <ul class="burger-upload-list">
      <li v-for="item in fileList" :key="item.name">
        <span class="burger-upload-list-filename">{{ item.name }}</span>
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
  </div>
</template>

<script lang="ts">
export default {
  name: "Upload",
};
</script>

<script setup lang="ts">
import { computed, PropType, reactive, ref } from "vue";
import { Tip } from "..";

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
  fileList: {
    type: Array as PropType<Array<File>>,
    default: () => {
      return [];
    },
  },
});

const fileList = computed<Array<File>>({
  get: () => props.fileList,
  set: (value) => emits("update:fileList", value),
});

const emits = defineEmits(["getFiles", "update:fileList"]);

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
  if (fileList.value.length + uploadLength > limit) {
    Tip({ message: `Number of files no more than ${limit}!` });
    return (fileInput.value = "");
  }
  // 文件类型限制
  if (pattern) {
    for (let i = 0; i < uploadLength; i++) {
      const item = files.item(i) as File;
      if (!pattern.test(item.type)) {
        Tip({ message: `Only accept ${props.accept}!` });
        return (fileInput.value = "");
      }
    }
  }
  // 文件大小限制
  if (maxSize) {
    for (let i = 0; i < uploadLength; i++) {
      const item = files.item(i) as File;
      if (item.size > maxSize) {
        Tip({ message: `File size no more than ${formatSize.value}!` });
        return (fileInput.value = "");
      }
    }
  }
  // 条件符合，推入文件列表
  fileList.value.push(...files);
  fileInput.value = "";
};

const removeFile = (name: string) => {
  const list: Array<File> = reactive([]);
  list.push(...fileList.value);
  fileList.value.splice(0);
  fileList.value.push(
    ...list.filter((item) => {
      return item.name !== name;
    })
  );
  emits("getFiles", fileList.value);
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
