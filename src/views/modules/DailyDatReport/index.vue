<template>
  <el-card>
    <avue-form v-model="form"
             :option="option"></avue-form>
    <avue-crud 
      :option="tableOption"
      v-model="form"
      :data="data"
      @refresh-change="getTableData"
      @search-change="onSearch"
      @search-reset="onSearchReset"
      @size-change="sizeChange"
      @current-change="currentChange"
    ></avue-crud>
  </el-card>
</template>

<script setup>
import {useTableList} from "@/hook/useTableList.js";
import {_getAgentDayReport} from "@/service/api/agent.js";

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
  date: '1',
  registerNum: '1',
  activeNum: '1',
  betAmount: '1',
  betNum: '1',
  addNum: '1',
  firstTimeNum: '1',
  firstBetNum: '1',
  firstAmount: '1',
}])

const tableOption = ref({
  labelWidth: 120,
  addBtn: false,
  menu: false,
  header: false,
  column: {
    date: {
      label: '日期',
    },
    registerNum: {
      label: '注册人数',
    },
    activeNum:{
      label: '活跃人数',
    },
    betAmount:{
      label: '投注金额',
    },
    betNum: {
      label: '投注人数',
    },
    addNum: {
      label: '新增有效',
    },
    firstTimeNum:{
      label: '首提人数',
    },
    firstBetNum: {
      label: '首投人数',
    },
    firstAmount: {
      label: '首投金额',
    }
  }
})

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getAgentDayReport, {

})
</script>

<style lang="scss" scoped>

</style>