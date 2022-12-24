<template>
  <div class="k-alert" :class="[type, closed ? 'close' : '']" v-show="show">
    <p class="k-alert-text" :style="{ textAlign: center ? 'center' : 'left' }">
      <slot>{{ text }}</slot>
    </p>
    <span class="close" @click="close">
      <img
        v-if="showClose && !closeText"
        src="../assets/icon/delete.svg"
        alt="delete"
        width="16"
        height="16"
      />
      <span v-else style="color: #82848a;">{{ closeText }}</span>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Alert",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  closeText: {
    type: String,
    default: undefined,
  },
  center: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["close"]);

const show = ref(true);
const closed = ref(false);

const close = () => {
  closed.value = true;
  setTimeout(() => {
    show.value = false;
  }, 200);
  emits("close");
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
