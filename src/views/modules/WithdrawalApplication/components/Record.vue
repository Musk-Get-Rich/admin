<template>
  <div>
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
  </div>
</template>

<script setup>
import {apiMoneyLog} from "@/service/api/agent.js";
import {useTableList} from "@/hook/useTableList.js";
import searchTime from "@/config/time.js";
import option from "@/views/modules/PlayerDeposit/option.js";

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  originData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiMoneyLog, {
  startDate,
  endDate,
  opreatetype: 2,
})
</script>

<style lang="scss" scoped>

</style>
