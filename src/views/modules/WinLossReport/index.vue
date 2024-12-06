<template>
  <el-card>
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
    >
      <template #bonusDetail="{ row }">
        <div class="flex items-center justify-around">
          <div>{{ row.bonusDetail.agentBonus }}</div>
          <img
            @click="toggleExpand(row, 'bonusDetail')"
            class="w-24"
            src="@/assets/images/add-circle.png"
            alt=""
          >
        </div>
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
            v-if="expandType === 'other'"
            :tableData="level2TableList"
          />
          <BonusDetail
            v-if="expandType === 'bonusDetail'"
            :tableData="level2TableList"
          />
        </div>
      </template>
    </avue-crud>
    <div class="mt-15 text-red text-12">
      <span>此表只做日常参考，不做结算依据，结算请在每月的7号查看</span><span @click="$router.push('/report/commissionReport')" class="text-green cursor-pointer">佣金报表</span>
    </div>
  </el-card>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect"
import option from "./option.js";
import {useTableList} from "@/hook/useTableList.js";
import {_getProfitLossReport} from "@/service/api/agent.js";
import Other from "./components/other/index.vue"
import BonusDetail from "./components/bonusDetail/index.vue"

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getProfitLossReport, {})

const expandType = ref('')
const level2TableList = ref([])
const toggleExpand = (row, type) => {
  level2TableList.value = type === 'other' ? [row.profitlossOtherVo] : [row.bonusDetail]

  expandType.value = type
  tableRef.value.toggleRowExpansion(row);
}

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
