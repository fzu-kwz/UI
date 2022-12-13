<template>
  <div
    class="k-table"
    :class="[border ? ' border' : '', stripe ? 'stripe' : '']"
    :style="{ width: scroll.width, height: scroll.height }"
  >
    <slot></slot>
    <table :style="{ width: width, height: height }">
      <thead>
        <tr>
          <th
            v-if="sort.show"
            :width="sort.width"
            :style="[{ textAlign: sort.align }, headerCellStyle]"
          >
            <div class="text">
              序号
            </div>
          </th>
          <th
            v-for="item in columns"
            :key="item.prop"
            :width="item.width"
            :style="[{ textAlign: item.align }, headerCellStyle]"
          >
            <div class="text">
              {{ item.label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="tableData.length !== 0">
        <tr v-for="(row, index) in tableData" :key="index">
          <td v-if="sort.show" :style="[{ textAlign: sort.align }, cellStyle]">
            <div class="text">
              {{ index + 1 }}
            </div>
          </td>
          <td
            v-for="column in columns"
            :style="[{ textAlign: column.align }, cellStyle]"
          >
            <div class="text">
              <slot :name="column.prop" :row="row" :index="index">
                {{ row[column.prop] }}
              </slot>
            </div>
          </td>
        </tr>
      </tbody>
      <div v-else class="no-data">{{ emptyText }}</div>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "Table",
};
</script>

<script setup lang="ts">
import { PropType, reactive, useSlots, VNode } from "vue";
import { Column, Row, Scroll, Sort } from "./types";

const props = defineProps({
  scroll: {
    type: Object as PropType<Scroll>,
    default: () => {
      return {};
    },
  },
  border: {
    type: Boolean,
    default: undefined,
  },
  stripe: {
    type: Boolean,
    default: undefined,
  },
  width: {
    type: String,
    default: undefined,
  },
  height: {
    type: String,
    default: undefined,
  },
  tableData: {
    type: Array as PropType<Array<Row>>,
    default: () => {
      return [];
    },
  },
  headerCellStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
  cellStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
  emptyText: {
    type: String,
    default: "No Data",
  },
  sort: {
    type: Object as PropType<Sort>,
    default: () => {
      return {
        show: false,
        width: "50",
      };
    },
  },
});

const columns: Array<Column> = reactive([]);

const slots = useSlots();
if (slots && slots.default) {
  slots.default().forEach((vn: VNode) => {
    //@ts-ignore
    if (vn.type.name === "TableColumn") columns.push(vn.props as Column);
  });
}
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
