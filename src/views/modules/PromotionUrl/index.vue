<template>
  <div>
    <el-card>
      <Title :name="$t('推广网址')" />
<!--      <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>-->
      <el-row>
<!--        <DedicatedDomainMonitoring v-if="currentBtn === '专属域名监控'"></DedicatedDomainMonitoring>-->
<!--        <DedicatedWebsite v-if="currentBtn === '专用网址'"></DedicatedWebsite>-->
        <PromotionAddress
          :list="list"
        />
<!--        <ShortLinkStatistics v-if="currentBtn === '短链接统计'"></ShortLinkStatistics>-->
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import DedicatedDomainMonitoring from './components/DedicatedDomainMonitoring.vue';
import DedicatedWebsite from './components/DedicatedWebsite.vue';
import PromotionAddress from './components/PromotionAddress.vue';
import ShortLinkStatistics from './components/ShortLinkStatistics.vue';
import Tabs from "@/components/Tabs";
import {apiPromotionWebsite} from "@/service/api/api.js";

const currentBtn = ref('推广网址')

const btns = ref(['推广网址','短链接统计','专用网址','专属域名监控'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

const list = ref([])
apiPromotionWebsite({
  parentemployeecode: null
}).then(res => {
  list.value = res
  console.log(res);
})

</script>

<style lang="scss" scoped>

</style>
