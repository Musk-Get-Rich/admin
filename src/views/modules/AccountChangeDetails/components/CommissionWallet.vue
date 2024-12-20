<template>
  <avue-crud
    ref="tableRef"
    :table-loading="tableLoading"
    :data="tableData"
    :option="option"
    v-model:page="pageObj"
    @refresh-change="getTableData"
    @size-change="sizeChange"
    @current-change="currentChange"
  >
    <template #search>
      <div class="flex mb-10">
        <Search @search="onSearch" @refresh="onRefresh"/>
      </div>
    </template>
  </avue-crud>
</template>

<script setup>
import option from "../optionCommission.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {useMaterialType} from "../hook/useMaterialType.js";
import Search from "../components/Search.vue";
import searchTime from "@/config/time.js";
import {_doTransLog} from "@/service/api/finance.js";

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_doTransLog, {
  startDate,
  endDate,
  opreatetype: 2
}, 'rows')

// 搜索
const onSearch = (val) => {
  getTableData(val)
}

const onRefresh = () => {
  getTableData({})
}
</script>

<style lang="scss" scoped>

</style>
