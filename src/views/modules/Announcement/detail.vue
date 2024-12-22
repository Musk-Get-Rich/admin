<template>
  <el-card>
    <div>
      <span class="mr-10 cursor-pointer" @click="goBack">< {{ $t('返回') }}</span>
      <span class="pl-10 border border-l-solid border-grey">{{ $t('公告') }}</span>
    </div>
    <div class="px-120">
      <div class="mt-56 mb-46 flex justify-center text-20px">代理彩金说明</div>
      <div class="text-#868D88">2023-10-21 23:05:52</div>
      <div class="mt-40 line-height-30">
        代理彩金领取方式于10.20日已更新完毕，以下为操作流程： 当输入赠送金额点击确认显示「赠送成功」字眼时，就已经是赠送成功了，可以通过「彩金记录」查看赠送明细；  会员领取方式则需要登陆APP点击主页的「红包机」进行领取，未领取则不会计算优惠成本，会员领取后即计算优惠成本。
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/top/announcement')
}
</script>

<style lang="scss" scoped>

</style>