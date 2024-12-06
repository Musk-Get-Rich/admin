<template>
  <div class="flex flex-col">
    <div class="mb-30">
      <el-input class="mr-20 !w-240px" v-model="input" placeholder="会员账号" />
      <el-select
      class="!w-240px"
        v-model="value"
        placeholder="请选择代理"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="w-full flex items-center mb-15">
      <div
        class="overflow-hidden shrink-0 flex items-center h-32 text-14 font-500 rounded-4 border-1 border-solid border-#DBDEDC mr-12">
        <div
          class="transition-400ms border-r-last-none border-r-1 border-r-solid border-r-#DBDEDC flex items-center px-30 h-full cursor-pointer"
          v-for="item in time"
          :key="item.value"
          @click="selectTime(item)"
          :class="[timeSelect.value === item.value ? 'bg-green text-white' : '']"
        >
          {{ $t(item.title) }}
        </div>
      </div>
      <div class="flex-1 flex items-center">
        <el-date-picker
          class="!w-full"
          v-model="timeVal"
          type="datetimerange"
          range-separator="To"
          :start-placeholder="$t('开始时间')"
          :end-placeholder="$t('结束时间')"
        />
        <div class="flex-1 shrink-0 flex items-center ml-20">
          <el-button type="primary" icon="search">查询</el-button>
          <el-button icon="delete" @click="onClear">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const form = ref({});

const time = [
  { title: '今日', value: 'today' },
  { title: '昨天', value: 'yesterday' },
  { title: '本月', value: 'this month' },
  { title: '上月', value: 'last month' },
];

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  }
]

const timeSelect = ref(time[0]);
const timeVal = ref([]);

const selectTime = (item) => {
  timeSelect.value = item;
  // 根据选择的时间动态更新 timeVal
  if (item.value === 'today') {
    timeVal.value = [dayjs().startOf('day').format('YYYY-MM-DD HH:mm:ss'), dayjs().endOf('day').format('YYYY-MM-DD HH:mm:ss')];
  } else if (item.value === 'yesterday') {
    timeVal.value = [dayjs().subtract(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'), dayjs().subtract(1, 'day').endOf('day').format('YYYY-MM-DD HH:mm:ss')];
  } else if (item.value === 'this month') {
    timeVal.value = [dayjs().startOf('month').format('YYYY-MM-DD HH:mm:ss'), dayjs().endOf('month').format('YYYY-MM-DD HH:mm:ss')];
  } else if (item.value === 'last month') {
    timeVal.value = [dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD HH:mm:ss'), dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD HH:mm:ss')];
  }
};


const onClear = () => {
  timeVal.value = []
  timeSelect.value = {}
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
