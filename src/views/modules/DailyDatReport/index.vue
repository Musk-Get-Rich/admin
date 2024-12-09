<template>
  <el-card>
    <avue-crud
      :option="option"
      v-model="form"
      :data="tableData"
      @refresh-change="getTableData"
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
import Search from "./components/Search.vue";
import Title from "@/components/Title/index.vue";
import {apiAgentDailyReport} from "@/service/api/api.js";

const form = ref({});

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiAgentDailyReport, {})
</script>

<style lang="scss" scoped>

</style>
