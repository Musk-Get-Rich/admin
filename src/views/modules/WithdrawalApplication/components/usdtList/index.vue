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
  />
</template>

<script setup>
import option from "./option.js";
import {useTableList} from "@/hook/useTableList.js";
import {apiUserUSDTList} from "@/service/api/api.js";

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiUserUSDTList, {
  parentemployeecode: undefined
}, 'record')
</script>

<style lang="scss" scoped>

</style>
