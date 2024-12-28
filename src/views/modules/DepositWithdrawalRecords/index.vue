<template>
  <el-card>
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
        <Title :name="$t('存提款记录')" />
        <div class="flex mb-10">
          <Search @search="onSearch" @refresh="onRefresh"/>
        </div>
      </template>
      <template #ordertype="{ row }">
        <span>{{ row.ordertype === 1 ? '存款' : '取款' }}</span>
      </template>
      <template #orderamount="{ row }">
        <div :class="row.orderamount > 0 ? 'text-green' : 'text-red'">{{ row.orderamount }}</div>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {_getDepositRecord} from "@/service/api/game.js";
import Search from "./components/Search.vue";
import Title from "@/components/Title/index.vue";
import searchTime from "@/config/time.js";

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getDepositRecord, {
  startDate,
  endDate,
}, 'rows')

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
