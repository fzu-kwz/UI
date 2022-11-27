<template>
  <div class="upload">
    <KButton v-if="button" type="primary" class="upload-btn">
      <label for="upload-file" title="upload">Click Upload</label>
    </KButton>
    <label v-else for="upload-file" class="upload-label" title="upload">
      <img src="../assets/icon/add.svg" alt="add" width="30" height="30" />
    </label>
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
      <div class="progress" v-show="fileList.length !== 0">
        <progress :value="percentage" max="100"></progress>
        <span>{{ percentage }}%</span>
      </div>
    </div>
    <input
      id="upload-file"
      v-show="false"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="fileChange($event, limit, accept, maxSize)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Upload",
};
</script>

<script setup lang="ts">
import { KButton } from "..";
import { reactive } from "vue";

const props = defineProps({
  button: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: String,
    default: "image/*",
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

/**
 * @description 文件上传方法
 * @param event 文件上传事件
 * @param limit 文件数量限制
 * @param reg 匹配文件类型
 * @param maxSize 文件大小限制
 */
const fileChange = (
  event: Event,
  limit: number,
  reg: string,
  maxSize: number
) => {
  // 文件上传控件
  const fileInput = event.target as HTMLInputElement;
  // 文件列表
  const files = fileInput.files as FileList & Array<File>;
  // 文件个数
  const filesLength = files.length;

  if (filesLength > limit) {
    alert(`The number of single upload no more than ${limit}!`);
    return (fileInput.value = "");
  }
  for (let i = 0; i < filesLength; i++) {
    const pattern = new RegExp(reg);
    const item = files.item(i) as File;
    if (!pattern.test(item.type)) {
      alert(`Only accept ${props.accept}!`);
      return (fileInput.value = "");
    }
  }
  for (let i = 0; i < filesLength; i++) {
    const item = files.item(i) as File;
    if (item.size > maxSize) {
      alert(`File size no more than ${maxSize / 1024 / 1024}M!`);
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
