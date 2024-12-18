<template>
  <div>
    <TimeSelect
      @search="onSearch"
      @clear="onRefresh"
    />
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
      <template #employeepaymentname="{ row }">
        <div>{{ row.enterprisepaymentaccount }}-{{ row.employeepaymentname }}</div>
      </template>
      <template #orderstatus="{ row }">
        <el-button type="success" v-if="row.orderstatus == 2">成功</el-button>
        <el-button v-else color="#32acff">
          <span class="text-white">待审核</span>
        </el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script setup>
import {apiMoneyLog} from "@/service/api/agent.js";
import {useTableList} from "@/hook/useTableList.js";
import searchTime from "@/config/time.js";
import option from "@/views/modules/PlayerDeposit/option.js";
import TimeSelect from "@/components/TimeSelect/index.vue";

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
  parentemployeecode: undefined
})

// 搜索
const onSearch = (val) => {
  getTableData(val)
}

const onRefresh = () => {
  getTableData({
    startDate,
    endDate,
  })
}
</script>

<style lang="scss" scoped>

</style>
