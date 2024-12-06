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
        <el-row justify="space-between mb-20">
          <div>每日数据报表</div>
        </el-row>
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

const form = ref({});

const data = ref([{
  date: '1',
  registerNum: '1',
  one: '1',
  tow: '1',
  three: '1',
  four: '1',
  five: '1',
  six: '1',
  seven: '1',
  eight: '1',
  nine: '1',
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