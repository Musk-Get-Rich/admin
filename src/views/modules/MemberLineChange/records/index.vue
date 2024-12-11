<template>
  <el-card>
    <div>
      <span class="mr-10 cursor-pointer" @click="goBack">< 返回</span>
      <span class="pl-10 border border-l-solid border-grey">转线记录</span>
    </div>
    <div class="flex my-5xl w-[50%]">
      <el-input v-model="formData.account" placeholder="会员账号" class="mr-10"></el-input>
      <el-select v-model="formData.status" placeholder="全部">
        <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <TimeSelect
      @search="onSearch"
      @clear="onRefresh"
    />
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="tableData"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
  </el-card>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect"
import option from "./option.js";
import {useTableList} from "@/hook/useTableList.js";
import {_getProfitLossReport} from "@/service/api/agent.js";
import searchTime from "@/config/time.js"
import { useRouter } from "vue-router";

const router = useRouter()
const { startDate, endDate } = searchTime

const formData = reactive({
  account: '',
  status: ''
})

const statusOptions = [
  {
    label: '审核中',
    value: '0'
  },
  {
    label: '已注销',
    value: '1'
  }
]

const fetchList = (params) => {
  return _getProfitLossReport({
    ...params,
    ...formData
  })
}

const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/managementCenter/memberLineChange')
}

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(fetchList, {
  startDate,
  endDate,
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
