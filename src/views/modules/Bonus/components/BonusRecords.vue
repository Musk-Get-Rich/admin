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
      <template #search>
        <div class="flex mb-10">
          <Search @search="onSearch" @refresh="onRefresh"/>
        </div>
      </template>
      <template #paymoneyreal="{ row }">
        <div :class="row.paymoneyreal > 0 ? 'text-green' : 'text-red'">{{ row.paymoneyreal }}</div>
      </template>
      <template #menu="{ row }">
        <el-tooltip
          effect="dark"
          :content="$t('游戏记录')"
          placement="top"
        >
          <img
            class="w-20"
            src="@/assets/images/login/note.png"
            alt=""
            @click="$router.push({
            path: '/member/gameRecords',
            query: {
              name: row.loginaccount
            }
          })"
          >
        </el-tooltip>
      </template>
    </avue-crud>
  </div>
</template>

<script setup>
import option from "../option.js"
import {useTableList} from "@/hook/useTableList.js";
import Search from "./Search.vue";
import {apiBonusRecord, apiMembershipReport} from "@/service/api/api.js";
import searchTime from "@/config/time.js";
import Other from "@/views/modules/WinLossReport/components/other/index.vue";

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiBonusRecord, {
  startDate,
  endDate,
  loginaccount: '',
  brandcode: undefined,
  parentemployeecode: undefined,
}, 'record')

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
