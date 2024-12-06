<template>
  <el-card>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="list"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #search>
        <el-row justify="space-between mb-20">
          <div>游戏记录</div>
        </el-row>
        <div class="flex mb-10">
          <Search />
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
        <el-button v-if="+row.canLink === 1" type="success">是</el-button>
        <el-button v-else type="danger">否</el-button>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {_getMemberReport} from "@/service/api/agent.js";
import {useMaterialType} from "./hook/useMaterialType.js";
import Search from "./components/Search.vue";

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

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getMemberReport, {

})
</script>

<style lang="scss" scoped>

</style>