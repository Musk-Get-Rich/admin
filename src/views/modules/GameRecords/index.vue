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
        <Title :name="$t('游戏记录')" />
        <div class="flex mb-10">
          <Search @search="onSearch" @refresh="onRefresh"/>
        </div>
      </template>
      <template #title-header="{column}">
        <div class="flex items-center justify-center">
          {{ column.label }}
          <img class="w-20" src="@/assets/images/Sidebar/2User-1.png" alt="">
        </div>
      </template>
      <template #title="{ row }">
        <div>
          {{ row.title }}
          <img class="w-20" src="@/assets/images/Sidebar/2User-1.png" alt="">
        </div>
      </template>
      <template #canLink="{ row }">
        <el-button v-if="+row.canLink === 1" type="success">{{ $t('是') }}</el-button>
        <el-button v-else type="danger">{{ $t('否') }}</el-button>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {_getGameReport} from "@/service/api/game.js";
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
} = useTableList(_getGameReport, {
  startDate,
  endDate,
}, 'results')

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