<template>
  <div>
    <el-card>
      <Title :name="$t('彩金赠送')" />
      <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
      <Bonus v-show="currentBtn === '彩金'"></Bonus>
      <BonusRecords v-if="currentBtn === '彩金记录'"></BonusRecords>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Bonus from './components/Bonus.vue';
import BonusRecords from './components/BonusRecords.vue';
import Tabs from "@/components/Tabs";

const currentBtn = ref('彩金')

const btns = ref(['彩金','彩金记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}


</script>

<style lang="scss" scoped>

</style>
