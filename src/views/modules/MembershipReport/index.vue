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
        <Title :name="$t('会员报表')"/>
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
      <template #computeMoney="{ row }">
        <div :class="[row.computeMoney > 0 ? 'green': 'red']">{{ row.computeMoney}}</div>
      </template>
      <template #expand="{ row }">
        <div class="px-10">
          <Page1 :tableData="otherList"/>
<!--          <div class="mt-12">-->
<!--            <Page2 :tableData="row.otherList"/>-->
<!--          </div>-->
        </div>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import Search from "./components/Search.vue";
import Title from "@/components/Title/index.vue";
import {apiMembershipReport} from "@/service/api/api.js";
import searchTime from "@/config/time.js";
import Page1 from "@/views/modules/MembershipReport/other/page1.vue";
import {deepClone} from "@/utils/index.js";
// import Page2 from "@/views/modules/MembershipReport/other/page2.vue";

const {startDate, endDate} = searchTime

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
  brandcode: undefined
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

const otherList = ref([])
const toggleExpand = (row, type) => {
  otherList.value = [deepClone(row)]

  if (!row.expandStatus) {
    tableRef.value.toggleRowExpansion(row);
  } else if (row.expandStatus && type === row.expandType) {
    tableRef.value.toggleRowExpansion(row);
  }

  row.expandType = type
}
</script>

<style lang="scss" scoped>

</style>
