<template>
  <el-card>
    <avue-form v-model="form"
             :option="option"></avue-form>
    <avue-crud :option="tableOption"
             v-model="form"
             :data="data"></avue-crud>
  </el-card>
</template>

<script setup>
const form = ref({});

const option = ref({
  menuSpan: 6,
  labelWidth: 110,
  column: [
    {
      label: "时间日期范围",
      type: 'datetimerange',
      prop: 'datetimerange',
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      startPlaceholder: '时间日期开始范围自定义',
      endPlaceholder: '时间日期结束范围自定义',
    }
  ]
});

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
    winLoss:{
      label: '净输赢',
    },
    totalBonusAmount:{
      label: '红利总数',
    },
    fee:{
      label: '红利总数',
    },
    platformFee: {
      label: '平台费',
    },
    memberDeposit: {
      label: '会员代款',
    },
    gameInstructions:{
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