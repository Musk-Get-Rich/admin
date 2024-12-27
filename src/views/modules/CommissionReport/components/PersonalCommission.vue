<template>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="list"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #profit="{ row }">
        <div :class="[row.profit > 0 ? 'green': 'red']">{{ row.profit}}</div>
      </template>
      <template #winlose="{ row }">
        <div :class="[row.winlose > 0 ? 'green': 'red']">{{ row.winlose}}</div>
      </template>
    </avue-crud>
</template>

<script setup>
import {_agentCommissionReport} from "@/service/api/agent.js";
import option from "../personalOption.js";
import {useTableList} from "@/hook/useTableList.js";

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_agentCommissionReport, {})

function transformData(data) {
  const transformed = [];
  data.forEach(item => {
    for (const key in item) {
      if (!isNaN(key)) { // 确保键是月份
        const details = item[key];
        details.month = key;
        transformed.push(details);
      }
    }
  });
  return transformed;
}

const list = ref([])

watch(() => tableData.value, (val) => {
  list.value = transformData(val)
})
</script>

<style lang="scss" scoped>

</style>