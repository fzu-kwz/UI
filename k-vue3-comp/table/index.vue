<template>
  <div
    class="k-table"
    :class="[
      border ? ' border' : '',
      stripe ? 'stripe' : '',
      fixHeader ? 'fix-header' : '',
    ]"
  >
    <table>
      <thead>
        <tr>
          <th
            v-for="item in columns"
            :key="item.prop"
            :width="item.width"
            :style="[
              {
                textAlign: item.align,
                position: item.fixed ? 'sticky' : 'relative',
                left: item.fixed === 'left' ? 0 : '',
                right: item.fixed === 'right' ? 0 : '',
                boxShadow:
                  item.fixed === 'right'
                    ? '-2px -1px 3px #ccc'
                    : item.fixed === 'left'
                    ? '2px -1px 3px #ccc'
                    : '',
                zIndex: item.fixed ? 1 : '',
              },
              headerCellStyle,
            ]"
          >
            <div class="text">
              {{ item.label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="tableData.length !== 0">
        <tr v-for="(row, index) in tableData" :key="index">
          <td
            v-for="column in columns"
            :style="[
              {
                textAlign: column.align,
                position: column.fixed ? 'sticky' : 'relative',
                left: column.fixed === 'left' ? 0 : '',
                right: column.fixed === 'right' ? 0 : '',
                boxShadow:
                  column.fixed === 'right'
                    ? '-2px 1px 3px #ccc'
                    : column.fixed === 'left'
                    ? '2px 1px 3px #ccc'
                    : '',
                zIndex: column.fixed ? 1 : '',
              },
              cellStyle,
            ]"
          >
            <div class="text">
              <slot :name="column.prop" :row="row" :index="index">
                {{ row[column.prop] }}
              </slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="tableData.length === 0" class="no-data">
      {{ emptyText }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Table",
};
</script>

<script setup lang="ts">
import { PropType } from "vue";
import { Column, Row } from "./types";

const props = defineProps({
  border: {
    type: Boolean,
    default: undefined,
  },
  stripe: {
    type: Boolean,
    default: undefined,
  },
  columns: {
    type: Array as PropType<Array<Column>>,
    default: () => {
      return [];
    },
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
  fixHeader: {
    type: Boolean,
    default: undefined,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
