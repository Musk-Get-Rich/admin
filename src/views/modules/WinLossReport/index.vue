<template>
  <el-card>
    <TimeSelect/>
    <avue-crud
      :option="tableOption"
      :data="data"
    />
  </el-card>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect"

const data = ref([{
  depositAmount: 9999,
  withdrawalAmount: 9999,
  winLoss: -999,
  totalBonusAmount: 9999,
  fee: 9999,
  platformFee: 9999,
  memberDeposit: 9999,
  gameInstructions: 9999,
  other: 9999
}])
const tableOption = ref({
  labelWidth: 120,
  addBtn: false,
  menu: false,
  header: false,
  column: {
    depositAmount: {
      label: '存款金额',
    },
    withdrawalAmount: {
      label: '取款金额',
    },
    winLoss: {
      label: '净输赢',
    },
    totalBonusAmount: {
      label: '红利总数',
    },
    fee: {
      label: '红利总数',
    },
    platformFee: {
      label: '平台费',
    },
    memberDeposit: {
      label: '会员代款',
    },
    gameInstructions: {
      label: '游戏说明',
    },
    other: {
      label: '其他',
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
