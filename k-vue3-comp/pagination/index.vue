<template>
  <div class="k-pagination" v-if="total !== 0">
    <span
      class="k-pagination-icon"
      @click="goToBefore"
      :disabled="current === 1"
    >
      <img src="../assets/icon/left.svg" alt="left" width="16" />
    </span>

    <span
      class="ellipsis ellipsis-left"
      @click="goToBeforeMore"
      v-show="total > 5 && current > 3"
    ></span>

    <span
      class="k-pagination-num"
      v-for="item in total"
      :key="item"
      :class="current === item ? 'active' : ''"
      @click="goTo(item)"
      v-show="currentEdge.indexOf(item) !== -1"
    >
      {{ item }}
    </span>

    <span
      class="ellipsis ellipsis-right"
      @click="goToNextMore"
      v-show="total > 5 && total - current >= 3"
    ></span>

    <span
      class="k-pagination-icon"
      @click="goToNext"
      :disabled="current === total"
    >
      <img src="../assets/icon/right.svg" alt="right" width="16" />
    </span>

    <div v-show="showJump" class="k-pagination-jump">
      <input
        class="k-pagination-jump-num"
        type="text"
        v-model="jump"
        @keyup.enter="jumpTo(jump)"
      />
      <button
        class="k-pagination-jump-btn"
        @click="jumpTo(jump)"
        :disabled="jump === ''"
      >
        Go
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Pagination",
};
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps({
  showJump: {
    type: Boolean,
    default: undefined,
  },
  total: {
    type: Number,
    default: 20,
  },
  current: {
    type: Number,
    default: 1,
  },
});

const emits = defineEmits(["currentChange", "update:current"]);

// 当前页码
const current = computed({
  get: () => props.current,
  set: (value) => emits("update:current", value),
});

// 跳转页码
const jump = ref("");

const currentEdge = computed(() => {
  const total = props.total;
  if (total <= 5) {
    return [1, 2, 3, 4, 5];
  } else {
    if (current.value < 3) {
      return [1, 2, 3, 4, 5];
    }
    if (total - current.value < 3) {
      return [total - 4, total - 3, total - 2, total - 1, total];
    }
  }
  return [
    current.value - 2,
    current.value - 1,
    current.value,
    current.value + 1,
    current.value + 2,
  ];
});

const goTo = (page: number) => {
  current.value = page;
};

const goToBefore = () => {
  current.value === 1 ? "" : (current.value -= 1);
};

const goToBeforeMore = () => {
  if (current.value <= 5) current.value = 1;
  else current.value = current.value -= 5;
};

const goToNext = () => {
  current.value === props.total ? "" : (current.value += 1);
};

const goToNextMore = () => {
  if (current.value + 5 > props.total) current.value = props.total;
  else current.value = current.value = current.value += 5;
};

const jumpTo = (jump: string) => {
  const page = parseInt(jump);
  page > props.total
    ? alert(`Page cannot be more than ${props.total}！`)
    : page < 1
    ? alert("Page cannot be less than 1")
    : (current.value = page);
};

watch(current, () => {
  emits("currentChange", current.value);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
