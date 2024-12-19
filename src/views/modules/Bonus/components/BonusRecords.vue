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
      <template #other="{ row }">
        <img
          @click="toggleExpand(row, 'other')"
          class="w-24"
          src="@/assets/images/add-circle.png"
          alt=""
        >
      </template>
      <template #expand="{ row }">
        <div class="px-10">
          <Other
            :tableData="row.otherList"
          />
        </div>
      </template>
    </avue-crud>
  </div>
</template>

<script setup>
import option from "../option.js"
import {useTableList} from "@/hook/useTableList.js";
import Search from "./Search.vue";
import {apiMembershipReport} from "@/service/api/api.js";
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
} = useTableList(apiMembershipReport, {
  startDate,
  endDate,
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
