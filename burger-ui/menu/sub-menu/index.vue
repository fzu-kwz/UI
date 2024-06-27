<template>
  <li class="burger-sub-menu">
    <div class="burger-sub-menu-label" @click.self="handleClick">
      <span>
        <slot name="label">{{ label }}</slot>
      </span>
      <img
        class="down"
        :class="isVisible ? 'up' : ''"
        src="../../assets/icon/arrow-bottom.svg"
        alt="arrow-bottom"
        width="16"
      />
    </div>
    <div ref="list" class="burger-sub-menu-list">
      <ul v-show="isVisible || visible" class="burger-sub-menu-list-ul">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
export default {
  name: 'SubMenu',
};
</script>

<script setup lang="ts">
import { createDebounce } from '$/utils';
import { provide, ref, useSlots } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const visible = ref(false);

const isVisible = ref(false);

const toggleVisible = (value: boolean) => {
  visible.value = value;
};

const slot = useSlots();

const length = slot.default && slot.default().length;

const list = ref();

const setHeight = () => {
  const listNode = list.value as HTMLElement;
  listNode.style.height = isVisible.value ? 40 * length! + 'px' : '0';
};

const handleClick = () => {
  isVisible.value = !isVisible.value;
  setHeight();
  createDebounce(toggleVisible)(isVisible.value);
};

provide('isVisible', isVisible);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
