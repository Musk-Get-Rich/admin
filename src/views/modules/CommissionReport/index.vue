<template>
  <el-card>
    <div class="flex mb-20 py-20 border-b-solid border-gray-300">
      <el-button type="primary">个人佣金</el-button>
      <el-button type="primary">团队业绩查明</el-button>
    </div>
    <avue-form v-model="form"
             :option="option"></avue-form>
    <div class="mt-20 flex flex-wrap justify-between">
      <div class="border-solid border-gray-200 w-230 h-127 rounded-8px flex flex-col justify-center items-center mb-10"
      v-for="(item,index) in list" :key="index">
          <span class="mb-10 text-28px">{{ item.value }}</span>
          <span class="color-#868D88 text-16px">{{ item.title }}</span>
      </div>
    </div>
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

const list = ref([
  { "title": "新增有效", "value": 0 },
  { "title": "活跃用户", "value": 0 },
  { "title": "净输赢", "value": 0 },
  { "title": "上月结余", "value": 0 },
  { "title": "佣金结算参考", "value": 0 },
  { "title": "游戏输赢", "value": 0 },
  { "title": "返水", "value": 0 },
  { "title": "可结佣金", "value": 0 },
  { "title": "红利", "value": 0 },
  { "title": "平台费", "value": 0 },
  { "title": "存提手续费", "value": 0 },
  { "title": "佣金比例", "value": 0 },
  { "title": "账户调整", "value": 0 },
])

</script>

<style lang="scss" scoped>

</style>