<template>
  <el-card>
    <Title name="账变明细"/>
    <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
    <CommissionWallet v-if="currentBtn === '佣金钱包'"></CommissionWallet>
    <LotteryWallet v-if="currentBtn === '彩金钱包'"></LotteryWallet>
  </el-card>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import CommissionWallet from './components/CommissionWallet.vue';
import LotteryWallet from './components/LotteryWallet.vue';
import Tabs from "@/components/Tabs";

const currentBtn = ref('佣金钱包')

const btns = ref(['佣金钱包', '彩金钱包'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}
</script>

<style lang="scss" scoped>

</style>
