<template>
  <div>
    <el-card>
      <Title name="玩家代存" />
      <el-row class="pb-30 border-b-solid border-gray-200 mt-60 mb-20">
        <el-button v-for="(btn,index) in btns" :key="index" :type="btn === currentBtn ? 'primary' : ''" @click="handleClick(btn)">{{ btn }}</el-button>
      </el-row>
      <PlayerDeposit v-if="currentBtn === '玩家代存'"></PlayerDeposit>
      <DepositRecords v-if="currentBtn === '代存记录'"></DepositRecords>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import PlayerDeposit from './components/PlayerDeposit.vue';
import DepositRecords from './components/DepositRecords.vue';

const currentBtn = ref('玩家代存')

const btns = ref(['玩家代存','代存记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

</script>

<style lang="scss" scoped>

</style>