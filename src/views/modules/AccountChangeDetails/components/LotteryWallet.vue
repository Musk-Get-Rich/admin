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
    <template #validbet="{ row }">
      <div :class="row.validbet > 0 ? 'text-green' : 'text-red'">{{ row.validbet }}</div>
    </template>
    <template #search>
      <div class="flex mb-10">
        <Search @search="onSearch" @refresh="onRefresh"/>
      </div>
    </template>
    <!-- <template #loginaccount="{ row }">
      {{ row.loginaccount }}
    </template>
    <template #depositMoney="{ row }">
      {{ row.depositMoney }}
    </template>
    <template #withdrawMoney="{ row }">
      {{ row.withdrawMoney }}
    </template> -->
  </avue-crud>
</template>

<script setup>
import option from "../optionLottery.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {_getMemberReport} from "@/service/api/agent.js";
import {useMaterialType} from "../hook/useMaterialType.js";
import Search from "../components/Search.vue";
import searchTime from "@/config/time.js";
import {_giftRecord} from "@/service/api/finance.js";

const { startDate, endDate } = searchTime

// 编辑
const handleEdit = (data) => {
  useMaterialType().changeMaterialType({
    type: 'edit',
    data,
    done() {
      getTableData()
    }
  })
}

// 删除
const handleDelete = (id) => {
  useMaterialType().deleteMaterialType({
    id,
    done() {
      getTableData()
    }
  })
}

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_giftRecord, {
  startDate,
  endDate,
  opreatetype: 2
})

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
