<template>
  <div>
    <div class="text-#3A3541 text-16px mt-30 mb-30">{{$t('总计') + '：$' + originData?.sumorderamount ?? 0 }}</div>
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
      <template #orderstatus="{ row }">
        <el-button type="success" v-if="row.orderstatus == 2">{{ $t('成功') }}</el-button>
        <el-button v-else color="#32acff">
          <span class="text-white">{{ $t('待审核') }}</span>
        </el-button>
      </template>
      <template #search>
        <div class="flex mb-10">
          <Search @search="onSearch" @refresh="onRefresh"/>
        </div>
      </template>
      <template #orderamount="{ row }">
        <div :class="row.orderamount > 0 ? 'text-green' : 'text-red'">{{ row.orderamount }}</div>
      </template>
    </avue-crud>
  </div>
</template>

<script setup>
import option from "../option.js"
import {useTableList} from "@/hook/useTableList.js";
import Search from "./Search.vue";
import searchTime from "@/config/time.js";
import {apiMoneyLog} from "@/service/api/agent.js";

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
  opreatetype: 4
})

// 搜索
const onSearch = (val) => {
  console.log(val);
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
