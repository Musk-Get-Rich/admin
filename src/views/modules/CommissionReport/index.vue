<template>
  <el-card>
    <Title name="佣金报表"/>
    <div class="flex mb-20 pb-20 border-b-1 border-b-solid border-gray-300">
      <el-button type="primary">个人佣金</el-button>
      <el-button>团队业绩查明</el-button>
    </div>
    <avue-form :option="option"></avue-form>
    <div class="mt-20 grid grid-cols-4 gap-15">
      <div
        class="theme-shadow h-127 rounded-8px flex flex-col justify-center items-center bg-white"
        v-for="(item,index) in list"
        :key="index"
      >
        <span class="mb-10 text-28px">{{ item.value }}</span>
        <span class="color-#868D88 text-16px">{{ item.title }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import {_agentCommissionReport} from "@/service/api/agent.js";
import {onMounted, ref} from 'vue';
import Title from "@/components/Title/index.vue";
import formOption from "@/config/formOption.js";

const form = ref({});

const option = ref({
  ...formOption,
  column: [
    {
      label: "",
      prop: "datetime",
      type: "datetime",
      span: 8
    },
  ]
});

const list = ref([
  {"title": "新增有效", "value": 0},
  {"title": "活跃用户", "value": 0},
  {"title": "净输赢", "value": 0},
  {"title": "上月结余", "value": 0},
  {"title": "佣金结算参考", "value": 0},
  {"title": "游戏输赢", "value": 0},
  {"title": "返水", "value": 0},
  {"title": "可结佣金", "value": 0},
  {"title": "红利", "value": 0},
  {"title": "平台费", "value": 0},
  {"title": "存提手续费", "value": 0},
  {"title": "佣金比例", "value": 0},
  {"title": "账户调整", "value": 0},
])

const obj = ref({})

const getAgentCommissionReport = async () => {
  const res = await _agentCommissionReport({
    pageNum: 1,
    pageSize: 10,
  })

  console.log(res);
  obj.value = res.data
}

onMounted(() => {
  getAgentCommissionReport()
})
</script>

<style lang="scss" scoped>

</style>
