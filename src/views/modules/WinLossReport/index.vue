<template>
  <el-card>
<<<<<<< HEAD
    <div class="mb-30 text-black text-20">会员管理</div>
=======
    <Title name="输赢报表" />
>>>>>>> 781f28af67fcf9b2f16de02974063ede59226f76
    <TimeSelect
      @search="onSearch"
      @clear="onRefresh"
    />
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="list"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
      @expand-change="expandChange"
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
import Title from "@/components/Title/index.vue";

const list = [
  {
    "activityMoney": 0,
    "betMoney": 27601.4,
    "bonusDetail": {
      "agentBonus": 0,
      "bonus": 0,
      "bonusSystem": 0,
      "depositBonus": 0,
      "fs": 0,
      "inviteMoney": 0,
      "platFee": 0,
      "redPacket": 0,
      "vipBonus": 0
    },
    "depositFee": 1334.61,
    "depositMoney": 133460.96,
    "employeecode": "E0001R27",
    "escrow": 0,
    "loginaccount": "agent0031",
    "netMoney": -13816.94,
    "platFee": 1381.69,
    "profitLoss": 11100.64,
    "profitlossOtherVo": {
      "betNum": 0,
      "depositNum": 0,
      "firstDepositCount": 0,
      "liveNum": 0,
      "registerNum": 0,
      "validplayNum": 0
    },
    "validbetMoney": 27665.59,
    "withdrawMoney": 0
  },
  {
    "activityMoney": 0,
    "betMoney": 27601.4,
    "bonusDetail": {
      "agentBonus": 0,
      "bonus": 0,
      "bonusSystem": 0,
      "depositBonus": 0,
      "fs": 0,
      "inviteMoney": 0,
      "platFee": 0,
      "redPacket": 0,
      "vipBonus": 0
    },
    "depositFee": 1334.61,
    "depositMoney": 133460.96,
    "employeecode": "E0001R27",
    "escrow": 0,
    "loginaccount": "agent003",
    "netMoney": -13816.94,
    "platFee": 1381.69,
    "profitLoss": 11100.64,
    "profitlossOtherVo": {
      "betNum": 0,
      "depositNum": 0,
      "firstDepositCount": 0,
      "liveNum": 0,
      "registerNum": 0,
      "validplayNum": 0
    },
    "validbetMoney": 27665.59,
    "withdrawMoney": 0
  }
]

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getProfitLossReport, {})

const toggleExpand = (row, type) => {
  row.otherList = [row.profitlossOtherVo]
  row.bonusDetailList = [row.bonusDetail]

  if (!row.expandStatus) {
    tableRef.value.toggleRowExpansion(row);
  } else if (row.expandStatus && type === row.expandType) {
    tableRef.value.toggleRowExpansion(row);
  }

  row.expandType = type
}

const expandChange = (row) => {
  row.expandStatus = !row.expandStatus
  console.log(row.expandStatus);
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
  getTableData({})
}
</script>

<style lang="scss" scoped>

</style>
