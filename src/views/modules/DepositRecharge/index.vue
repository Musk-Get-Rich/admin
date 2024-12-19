<template>
  <div>
    <el-card>
      <Title :name="$t('代存充值')" />
      <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
      <Recharge v-show="currentBtn === '充值'"></Recharge>
      <RechargeRecord v-if="currentBtn === '充值记录'"></RechargeRecord>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Recharge from './components/Recharge.vue';
import RechargeRecord from './components/RechargeRecord.vue';
import Tabs from "@/components/Tabs";

const currentBtn = ref('充值')

const btns = ref(['充值','充值记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

</script>

<style lang="scss" scoped>

</style>
