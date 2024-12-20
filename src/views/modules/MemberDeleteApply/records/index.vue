<template>
  <el-card>
    <div>
      <span class="mr-10 cursor-pointer" @click="goBack">< {{ $t('返回') }}</span>
      <span class="pl-10 border border-l-solid border-grey">{{ $t('注销记录') }}</span>
    </div>
    <div class="flex my-5xl w-[50%]">
      <el-input v-model="formData.loginaccount" :placeholder="$t('会员账号')" class="mr-10" clearable></el-input>
      <el-select v-model="formData.status" :placeholder="$t('全部')" clearable>
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
import { apiAgentChangeLog } from "@/service/api/api.js";

const router = useRouter()
const { startDate, endDate } = searchTime

const formData = reactive({
  loginaccount: '',
  status: ''
})

const fetchList = (params) => {
  return apiAgentChangeLog({
    ...params,
    ...formData,
    opreatetype: '1'
  })
}

const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/managementCenter/memberDeleteApply')
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
