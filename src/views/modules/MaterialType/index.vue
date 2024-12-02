<template>
  <el-card>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="list"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @search-change="onSearch"
      @search-reset="onSearchReset"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #menu-left>
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="handleAdd"
        >
          新增资料类型
        </el-button>
      </template>
      <template #canLink="{ row }">
        <el-button v-if="+row.canLink === 1" type="success">是</el-button>
        <el-button v-else type="danger">否</el-button>
      </template>
      <template #menu="{ row }">
        <el-button
          icon="el-icon-edit"
          @click="handleEdit(row)"
        >
          编辑
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-delete"
          @click="handleDelete(row.id)"
        >
          删除
        </el-button>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {apiGetMaterialTypeList} from "@/service/api/api.js";
import {useMaterialType} from "@/views/modules/MaterialType/hook/useMaterialType.js";

const list = [
  {
    title: 'test',
    sort: '1',
    canLink: '1',
    createTime: '2024-12-02 00:00:00',
  }
]

// 新增
const handleAdd = () => {
  useMaterialType().changeMaterialType({
    type: 'add',
    done() {
      getTableData()
    }
  })
}

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
} = useTableList(apiGetMaterialTypeList, {

})

// 搜索
const onSearch = (form, done) => {
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  tableSearch.reset(getTableData)
}
</script>
