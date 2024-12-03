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
  fee: 9999
}])
const tableOption = ref({
  labelWidth: 120,
  addBtn: false,
  menu: false,
  header: false,
  column: {
    depositAmount: {
      label: '比赛类型',
    },
    withdrawalAmount: {
      label: '注单笔数',
    },
    winLoss:{
      label: '投注金额',
    },
    totalBonusAmount:{
      label: '会员',
    },
    fee:{
      label: '有效投注额',
    },
  }
})
</script>

<style lang="scss" scoped>

</style>