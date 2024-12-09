<template>
  <div>
    <el-card>
      <Title name="代存充值" />
      <el-row class="pb-30 border-b-solid border-gray-200 mt-20 mb-20">
        <el-button v-for="(btn,index) in btns" :key="index" :type="btn === currentBtn ? 'primary' : ''" @click="handleClick(btn)">{{ btn }}</el-button>
      </el-row>
      <Recharge v-if="currentBtn === '充值'"></Recharge>
      <RechargeRecord v-if="currentBtn === '充值记录'"></RechargeRecord>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Recharge from './components/Recharge.vue';
import RechargeRecord from './components/RechargeRecord.vue';

const currentBtn = ref('充值')

const btns = ref(['充值','充值记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

</script>

<style lang="scss" scoped>

</style>