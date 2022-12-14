<template>
  <div
    class="k-pagination"
    :class="background ? 'bg' : ''"
    v-if="total !== 0 && total !== 1"
  >
    <span
      class="k-pagination-icon"
      :class="current === 1 ? 'disabled' : ''"
      @click="goToBefore"
    >
      <img src="../assets/icon/left.svg" alt="left" />
    </span>

    <span
      class="k-pagination-num"
      @click="goTo(1)"
      v-show="currentEdge.indexOf(1) === -1"
    >
      1
    </span>

    <span
      class="ellipsis ellipsis-left"
      @click="goToBeforeMore"
      v-show="total > 7 && current > 4"
    >
      <img
        class="ellipsis-icon"
        src="../assets/icon/ellipsis.svg"
        alt="ellipsis"
      />
      <img
        class="double-left"
        src="../assets/icon/double-left.svg"
        alt="double-left"
      />
    </span>

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
      v-show="total > 7 && total - current >= 4"
    >
      <img
        class="ellipsis-icon"
        src="../assets/icon/ellipsis.svg"
        alt="ellipsis"
      />
      <img
        class="double-right"
        src="../assets/icon/double-right.svg"
        alt="double-right"
      />
    </span>

    <span
      class="k-pagination-num"
      @click="goTo(total)"
      v-show="currentEdge.indexOf(total) === -1"
    >
      {{ total }}
    </span>

    <span
      class="k-pagination-icon"
      :class="current === total ? 'disabled' : ''"
      @click="goToNext"
    >
      <img src="../assets/icon/right.svg" alt="right" width="16" />
    </span>

    <div v-show="jumper" class="k-pagination-jump">
      <input
        class="k-pagination-jump-num"
        type="text"
        v-model="jump"
        :maxlength="total.toString().length"
        @keyup.enter="jumpTo(jump)"
        @keyup="jump = jump.replace(/\D/g, '')"
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
  jumper: {
    type: Boolean,
    default: undefined,
  },
  total: {
    type: Number,
    default: 10,
  },
  current: {
    type: Number,
    default: 1,
  },
  background: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits([
  "currentChange",
  "update:current",
  "prevClick",
  "nextClick",
]);

// 当前页码
const current = computed({
  get: () => props.current,
  set: (value) => emits("update:current", value),
});

// 跳转页码
const jump = ref("");

const currentEdge = computed(() => {
  const total = props.total;
  if (total <= 6) {
    return [1, 2, 3, 4, 5, 6];
  } else {
    if (current.value < 4) {
      return [1, 2, 3, 4, 5, 6];
    }
    if (total - current.value < 3) {
      return [total - 5, total - 4, total - 3, total - 2, total - 1, total];
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
  if (current.value === 1) return;
  current.value === 1 ? "" : (current.value -= 1);
  emits("prevClick", current.value - 1);
};

const goToBeforeMore = () => {
  if (current.value <= 5) current.value = 1;
  else current.value = current.value -= 5;
};

const goToNext = () => {
  if (current.value === props.total) return;
  current.value === props.total ? "" : (current.value += 1);
  emits("nextClick", current.value + 1);
};

const goToNextMore = () => {
  if (current.value + 5 > props.total) current.value = props.total;
  else current.value = current.value = current.value += 5;
};

const jumpTo = (jumpPage: string) => {
  const page = parseInt(jumpPage);
  if (page < 1) {
    jump.value = "1";
    return (current.value = 1);
  }
  if (page > props.total) {
    jump.value = props.total.toString();
    return (current.value = props.total);
  }
  jump.value = page.toString();
  return (current.value = page);
};

watch(current, () => {
  emits("currentChange", current.value);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
