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
    <template #search>
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
    <template #menu="{ row }">
      <el-button
        icon="el-icon-edit"
        @click="handleEdit(row)"
      >
        {{ $t('编辑') }}
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-delete"
        @click="handleDelete(row.id)"
      >
        {{ $t('删除') }}
      </el-button>
    </template>
  </avue-crud>
</template>

<script setup>
import option from "../optionCommission.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {useMaterialType} from "../hook/useMaterialType.js";
import Search from "../components/Search.vue";
import searchTime from "@/config/time.js";
import {apiAccountChangeRecords} from "@/service/api/user.js";

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiAccountChangeRecords, {
  startDate,
  endDate,
}, 'rows')

const list = [
  {
    title: 'test',
    sort: '1',
    canLink: '1',
    createTime: '2024-12-02 00:00:00',
  }
]

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

const tableSearch = useTableSearch()

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
