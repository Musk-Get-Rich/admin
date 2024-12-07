<template>
  <el-card>
    <avue-crud 
      :option="option"
      v-model="form"
      :data="data"
      @refresh-change="getTableData"
      @search-change="onSearch"
      @search-reset="onSearchReset"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #search>
        <Title name="每日数据报表" />
        <div class="flex mb-10">
          <Search />
        </div>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {_getAgentDayReport} from "@/service/api/agent.js";
import Search from "./components/Search.vue";
import Title from "@/components/Title/index.vue";

const form = ref({});

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