<template>
  <el-card>
    <Title name="佣金报表"/>
    <div class="flex mb-20 pb-20 border-b-1 border-b-solid border-gray-300">
      <el-button type="primary">个人佣金</el-button>
      <el-button>团队业绩查明</el-button>
    </div>
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
import {_agentCommissionReport} from "@/service/api/agent.js";
import Title from "@/components/Title/index.vue";
import option from "@/views/modules/WinLossReport/option.js";
import {useTableList} from "@/hook/useTableList.js";

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_agentCommissionReport, {

})
</script>

<style lang="scss" scoped>

</style>
