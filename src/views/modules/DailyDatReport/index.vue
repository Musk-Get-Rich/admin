<template>
  <el-card>
    <avue-crud
      :table-loading="tableLoading"
      :option="option"
      v-model="form"
      :data="tableData"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #search>
        <Title :name="$t('每日数据报表')" />
        <div class="flex mb-10">
          <TimeSelect
            @search="onSearch"
            @clear="onRefresh"
          />
        </div>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import Title from "@/components/Title/index.vue";
import {apiAgentDailyReport} from "@/service/api/api.js";
import searchTime from "@/config/time.js";
import TimeSelect from "@/components/TimeSelect/index.vue";

const { startDate, endDate } = searchTime

const form = ref({});

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiAgentDailyReport, {
  startDate,
  endDate,
}, 'results')

// 搜索
const onSearch = (val) => {
  console.log(val);
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
