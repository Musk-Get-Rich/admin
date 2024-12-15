<template>
  <div>
    <el-card>
      <Title name="玩家代存" />
      <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
      <PlayerDeposit v-show="currentBtn === '玩家代存'"></PlayerDeposit>
      <DepositRecords v-if="currentBtn === '代存记录'"></DepositRecords>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import PlayerDeposit from './components/PlayerDeposit.vue';
import DepositRecords from './components/DepositRecords.vue';
import Tabs from "@/components/Tabs";

const currentBtn = ref('玩家代存')

const btns = ref(['玩家代存','代存记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

</script>

<style lang="scss" scoped>

</style>
