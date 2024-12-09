<template>
   <div class="w-full flex items-center mb-15">
      <div class="flex-1 flex items-center">
        <el-date-picker
          class="!w-100px mr-20"
          v-model="timeVal"
          type="datetimerange"
          range-separator="To"
          :start-placeholder="$t('开始时间')"
          :end-placeholder="$t('结束时间')"
        />
<!--        <el-select-->
<!--          v-model="value"-->
<!--          placeholder="请选择代理"-->
<!--          style="width: 240px"-->
<!--        >-->
<!--          <el-option-->
<!--            v-for="item in options"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value"-->
<!--          />-->
<!--        </el-select>-->
        <div class="flex-1 shrink-0 flex items-center ml-20">
          <el-button type="primary" icon="search">查询</el-button>
          <el-button icon="delete" @click="onClear">重置</el-button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const timeVal = ref([]);

const onClear = () => {
  timeVal.value = []
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
