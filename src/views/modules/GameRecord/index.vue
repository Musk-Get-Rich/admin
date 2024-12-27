<template>
  <el-card>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="tableData"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <!-- <template #gamebigtype="{row}">
        {{ $t(title[row.gamebigtype]) }}
      </template> -->
      <template #search>
        <Title :name="$t('游戏记录')" />
        <div class="flex mb-10">
          <Search @search="onSearch" @refresh="onRefresh"/>
        </div>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {_getGameRecord, _getGameReport} from "@/service/api/game.js";
import Search from "./components/Search.vue";
import Title from "@/components/Title/index.vue";
import searchTime from "@/config/time.js";

const { startDate, endDate } = searchTime

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(_getGameRecord, {
  startDate,
  endDate,
  brandcode: undefined,
}, 'results')

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

const title = {
  'SX': '真人',
  'TY': '体育',
  'DJ': '电竞',
  'DZ': '电子',
  'RH': '动物',
  'BY': '捕鱼',
  'CP': '彩票',
  'QP': '棋牌',
}
</script>

<style lang="scss" scoped>

</style>
