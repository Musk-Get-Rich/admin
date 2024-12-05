<template>
  <div class="w-full flex items-center mb-15">
    <div class="shrink-0 flex items-center h-32 text-14 font-500 rounded-4 border-1 border-solid border-#DBDEDC mr-12">
      <div class="border-r-1 border-r-solid border-r-#DBDEDC flex items-center px-30 h-full">今日</div>
      <div class="border-r-1 border-r-solid border-r-#DBDEDC flex items-center px-30 h-full">本日</div>
      <div class="border-r-1 border-r-solid border-r-#DBDEDC flex items-center px-30 h-full">本月</div>
      <div class="flex items-center px-30 h-full">上月</div>
    </div>
  </div>
</template>

<script setup>
const form = ref({});

const time = [
  {
    title: '今日',

  }
]

const option = ref({
  menuSpan: 12,
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
</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
