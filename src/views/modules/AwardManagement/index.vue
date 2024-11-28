<template>
  <el-card>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="tableData"
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
          新增开奖
        </el-button>
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
import {apiGetLotteryList} from "@/service/api/api.js";
import {useAward} from "@/views/modules/AwardManagement/hook/useAward.js";
import dayjs from "dayjs";

// 新增
const handleAdd = () => {
  useAward().changeAward({
    type: 'add',
    done() {
      getTableData()
    }
  })
}

// 编辑
const handleEdit = ({id, period, year, numberList, nextLotteryTime}) => {
  console.log(numberList);

  const data = {
    id,
    period,
    year,
    nextLotteryTime,
    one: numberList[0].number,
    two: numberList[1].number,
    three: numberList[2].number,
    four: numberList[3].number,
    five: numberList[4].number,
    six: numberList?.[5]?.number,
    seven: numberList?.[6]?.number,
  }

  useAward().changeAward({
    type: 'edit',
    data,
    done() {
      getTableData()
    }
  })
}

// 删除
const handleDelete = (id) => {
  useAward().deleteAward({
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
} = useTableList(apiGetLotteryList, {})

// 搜索
const onSearch = (form, done) => {
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  tableSearch.reset(getTableData)
}
</script>
