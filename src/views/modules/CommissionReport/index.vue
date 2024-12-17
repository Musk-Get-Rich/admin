<template>
  <el-card>
    <Title :name="$t('佣金报表')"/>
    <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
    <PersonalCommission v-if="currentBtn === '个人佣金'"></PersonalCommission>
    <TeamCommission v-if="currentBtn === '团队业绩查明'"></TeamCommission>
  </el-card>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Tabs from "@/components/Tabs";
import PersonalCommission from './components/PersonalCommission.vue';
import TeamCommission from './components/TeamCommission.vue';

const currentBtn = ref('个人佣金')

const btns = ref(['个人佣金','团队业绩查明'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

</script>

<style lang="scss" scoped>

</style>
