<template>
  <div
    class="burger-table"
    :class="[
      border ? 'border' : '',
      stripe ? 'stripe' : '',
      fixHeader ? 'fix-header' : '',
    ]"
  >
    <table>
      <thead>
        <tr>
          <th
            v-for="{ prop, label, width, align, fixed } in columns"
            :key="prop"
            :width="width"
            :class="[fixed, fixed ? 'fixed' : '']"
            :style="[
              {
                textAlign: align,
              },
              headerCellStyle,
            ]"
          >
            <div class="text">
              <Chechbox
                v-if="prop === 'select'"
                :disabled="tableData.length === 0"
                v-model="allChecked"
              ></Chechbox>
              {{ label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="tableData.length !== 0">
        <tr
          v-for="(row, rowIndex) in tableData"
          :key="row[props.rowKey] || rowIndex"
          @click="emits('rowClick', row, rowIndex)"
        >
          <td
            v-for="{ prop, width, align, fixed, ellipsis } in columns"
            :width="width"
            :class="[fixed, fixed ? 'fixed' : '']"
            :style="[
              {
                textAlign: align,
              },
              cellStyle,
            ]"
          >
            <div
              class="text"
              :style="{ whiteSpace: ellipsis ? 'nowrap' : 'normal' }"
              :title="row[prop]"
            >
              <Chechbox
                v-if="prop === 'select'"
                v-model="checkboxs[rowIndex].checked"
              ></Chechbox>
              <slot v-else :name="prop" :row="row" :rowIndex="rowIndex">
                {{ row[prop] }}
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
  name: 'Table',
};
</script>

<script setup lang="ts">
import { PropType, StyleValue, computed, reactive, ref, watch } from 'vue';
import { Column, Row } from './types';
import { Chechbox } from '$/index';

const props = defineProps({
  border: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: false,
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
    type: Object as PropType<StyleValue>,
    default: () => {
      return {};
    },
  },
  cellStyle: {
    type: Object as PropType<StyleValue>,
    default: () => {
      return {};
    },
  },
  emptyText: {
    type: String,
    default: 'No Data',
  },
  fixHeader: {
    type: Boolean,
    default: false,
  },
  defaultSelectedRowKeys: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  rowKey: {
    type: String,
    default: 'id',
  },
});

const emits = defineEmits(['selectChange', 'rowClick']);

const selectedKeys: Array<string | number> = [];
const selectedRows: Array<Row> = [];

const allChecked = ref(false);
const checkboxs: Array<{ checked: boolean }> = reactive([]);

watch(
  () => props.tableData,
  (value) => {
    checkboxs.splice(0);
    value.forEach((item, index) => {
      checkboxs.push({
        checked: props.defaultSelectedRowKeys.includes(
          item[props.rowKey] || index
        )
          ? true
          : false,
      });
    });
  },
  {
    immediate: true,
    deep: true,
  }
);

watch(allChecked, () => {
  if (allChecked.value) {
    checkboxs.forEach((item) => {
      item.checked = true;
    });
  }
  if (!allChecked.value) {
    let checkedNum = 0;
    checkboxs.forEach((item) => {
      if (item.checked) checkedNum++;
    });
    if (checkedNum === checkboxs.length) {
      checkboxs.forEach((item) => {
        item.checked = false;
      });
    }
  }
});

watch(checkboxs, () => {
  if (checkboxs.length === 0) return (allChecked.value = false);
  for (let i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked === false) {
      allChecked.value = false;
      break;
    } else {
      allChecked.value = true;
    }
  }
  selectedKeys.splice(0);
  selectedRows.splice(0);
  checkboxs.forEach((item, index) => {
    if (item.checked) {
      const row = props.tableData.find((_item, _index) => index === _index);
      if (row) {
        selectedKeys.push(row[props.rowKey] || index);
        selectedRows.push(row);
      }
    }
  });
  emits('selectChange', selectedKeys, selectedRows);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
