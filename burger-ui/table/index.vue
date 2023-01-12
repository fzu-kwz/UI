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
                    ? '-1px -1px 3px #ddd'
                    : item.fixed === 'left'
                    ? '1px -1px 3px #ddd'
                    : '',
                zIndex: item.fixed ? 1 : '',
              },
              headerCellStyle,
            ]"
          >
            <div class="text">
              <Chechbox
                v-if="item.prop === 'select'"
                v-model="allChecked"
              ></Chechbox>
              {{ item.label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="tableData.length !== 0">
        <tr v-for="(row, index) in tableData" :key="index">
          <td
            v-for="column in columns"
            :width="column.width"
            :style="[
              {
                textAlign: column.align,
                position: column.fixed ? 'sticky' : 'relative',
                left: column.fixed === 'left' ? 0 : '',
                right: column.fixed === 'right' ? 0 : '',
                boxShadow:
                  column.fixed === 'right'
                    ? '-1px 1px 3px #ddd'
                    : column.fixed === 'left'
                    ? '1px 1px 3px #ddd'
                    : '',
                zIndex: column.fixed ? 1 : '',
              },
              cellStyle,
            ]"
          >
            <div class="text">
              <Chechbox
                v-if="column.prop === 'select'"
                v-model="checkboxs[index].checked"
              ></Chechbox>
              <slot v-else :name="column.prop" :row="row" :index="index">
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
import { computed, PropType, reactive, ref, watch } from "vue";
import { Column, Row } from "./types";
import { Chechbox } from "../index";

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

const emits = defineEmits(["selectChange"]);

const selectIndex: Array<number> = [];
const allChecked = ref(false);
const checkboxs: Array<{ checked: boolean }> = reactive([]);
watch(props.tableData, (value) => {
  value.forEach(() => {
    checkboxs.push({ checked: false });
  });
});

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
  for (let i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked === false) {
      allChecked.value = false;
      break;
    } else {
      allChecked.value = true;
    }
  }
  selectIndex.splice(0);
  checkboxs.forEach((item, index) => {
    if (item.checked) selectIndex.push(index);
  });
  emits("selectChange", selectIndex);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
