<template>
  <el-card>
    <Title :name="$t('输赢报表')" />
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
      @expand-change="expandChange"
    >
      <template #profitLoss="{ row }">
        <div :class="[row.profitLoss > 0 ? 'green': 'red']">{{ row.profitLoss}}</div>
      </template>
      <template #netMoney="{ row }">
        <div :class="[row.netMoney > 0 ? 'green': 'red']">{{ row.netMoney}}</div>
      </template>
      <template #activityMoney="{ row }">
        <div class="flex items-center justify-around">
          <div>{{ row.activityMoney }}</div>
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
            v-if="row.expandType === 'other'"
            :tableData="row.otherList"
          />
          <BonusDetail
            v-if="row.expandType === 'bonusDetail'"
            :tableData="row.bonusDetailList"
          />
        </div>
      </template>
    </avue-crud>
    <div class="mt-15 text-red text-12">
      <span>{{ $t('此表只做日常参考，不做结算依据，结算请在每月的7号查看') }}</span> <span @click="$router.push('/report/commissionReport')" class="text-green cursor-pointer">{{ $t('佣金报表') }}</span>
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
import Title from "@/components/Title/index.vue";
import searchTime from "@/config/time.js"

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getProfitLossReport, {
  startDate,
  endDate,
}, 'record')

const toggleExpand = (row, type) => {
  row.otherList = [row.profitlossOtherVo]

  if (!row.expandStatus) {
    tableRef.value.toggleRowExpansion(row);
  } else if (row.expandStatus && type === row.expandType) {
    tableRef.value.toggleRowExpansion(row);
  }

  row.expandType = type
}

const expandChange = (row) => {
  row.expandStatus = !row.expandStatus
  if (!row.expandType) {
    row.expandType = 'bonusDetail'
    row.bonusDetailList = [row.bonusDetail]
  }
};

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
