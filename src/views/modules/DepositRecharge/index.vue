<template>
  <div>
    <el-card>
      <Title :name="$t('代存充值')" />
      <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
      <Recharge v-show="currentBtn === 'USDT充值'"></Recharge>
      <EBPayRecharge v-show="currentBtn === 'EBPay充值'"></EBPayRecharge>
      <RechargeRecord v-if="currentBtn === '充值记录'"></RechargeRecord>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Recharge from './components/Recharge.vue';
import RechargeRecord from './components/RechargeRecord.vue';
import EBPayRecharge from './components/EBPayRecharge.vue';
import Tabs from "@/components/Tabs";
import {apiEBPayList} from "@/service/api/agent.js";

const currentBtn = ref('EBPay充值')

const btns = ref(['USDT充值', 'EBPay充值', '充值记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}
</script>

<style lang="scss" scoped>

</style>
