<template>
  <div>
    <el-card>
      <Title name="推广网址" />
      <el-row class="pb-30 border-b-solid border-gray-200 mb-20">
        <el-button v-for="(btn,index) in btns" :key="index" :type="btn === currentBtn ? 'primary' : ''" @click="handleClick(btn)">{{ btn }}</el-button>
      </el-row>
      <el-row>
        <DedicatedDomainMonitoring v-if="currentBtn === '专属域名监控'"></DedicatedDomainMonitoring>
        <DedicatedWebsite v-if="currentBtn === '专用网址'"></DedicatedWebsite>
        <PromotionAddress v-if="currentBtn === '推广网址'"></PromotionAddress>
        <ShortLinkStatistics v-if="currentBtn === '短链接统计'"></ShortLinkStatistics>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import DedicatedDomainMonitoring from './components/DedicatedDomainMonitoring.vue'
import DedicatedWebsite from './components/DedicatedWebsite.vue'
import PromotionAddress from './components/PromotionAddress.vue'
import ShortLinkStatistics from './components/ShortLinkStatistics.vue'

const currentBtn = ref('推广网址')

const btns = ref(['推广网址','短链接统计','专用网址','专属域名监控'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

</script>

<style lang="scss" scoped>

</style>