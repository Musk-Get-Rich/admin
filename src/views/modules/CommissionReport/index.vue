<template>
  <el-card>
    <Title name="佣金报表" />
    <div class="flex mb-20 py-20 border-b-solid border-gray-300">
      <el-button type="primary">个人佣金</el-button>
      <el-button>团队业绩查明</el-button>
    </div>
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
import {_agentCommissionReport} from "@/service/api/agent.js";
import { onMounted, ref } from 'vue';
import Title from "@/components/Title/index.vue";

const form = ref({});

const option = ref({
  menuSpan: 6,
  labelWidth: 60,
  column: [
    {
      label: "日期",
      prop: "datetime",
      type: "datetime",
      span: 6
    },
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

const obj = ref({

})

const getAgentCommissionReport = async () => {
  const res = await _agentCommissionReport({
    pageNum: 1,
    pageSize: 10,
    startDate: '2024-12-03+00:00:00',
    endDate: '2024-12-09+23:59:59'
  })
  obj.value = res.data
}

onMounted(() => {
  getAgentCommissionReport()
})
</script>

<style lang="scss" scoped>

</style>
