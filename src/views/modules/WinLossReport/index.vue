<template>
  <el-card>
    <TimeSelect/>
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

    </avue-crud>
  </el-card>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect"
import option from "./option.js";
import {useTableList} from "@/hook/useTableList.js";
import {_getProfitLossReport} from "@/service/api/agent.js";

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getProfitLossReport, {

})
</script>

<style lang="scss" scoped>

</style>
