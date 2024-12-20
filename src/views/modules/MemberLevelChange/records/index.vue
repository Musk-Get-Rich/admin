<template>
  <el-card>
    <div>
      <span class="mr-10 cursor-pointer" @click="goBack">< {{ $t('返回') }}</span>
      <span class="pl-10 border border-l-solid border-grey">{{ $t('调级记录') }}</span>
    </div>
    <div class="flex my-5xl w-[50%]">
      <el-input v-model="formData.account" :placeholder="$t('会员账号')" class="mr-10"></el-input>
      <el-select v-model="formData.status" :placeholder="$t('全部')">
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
import option, {statusOptions} from "./option.js";
import {useTableList} from "@/hook/useTableList.js";
import searchTime from "@/config/time.js"
import { useRouter } from "vue-router";
import {apiAgentLevelLog} from "@/service/api/api.js";

const router = useRouter()
const { startDate, endDate } = searchTime

const formData = reactive({
  account: '',
  status: ''
})

const fetchList = (params) => {
  return apiAgentLevelLog({
    ...params,
    ...formData
  })
}

const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/managementCenter/memberLevelChange')
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
