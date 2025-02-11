<template>
  <div class="text-black">
    <el-card class="mb-30">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-green rounded-full"></div>
            <div class="flex items-center text-20 ml-10">
              {{ $t('本月会员概况') }}
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="$t('本月会员数量数据统计')"
                placement="top"
              >
                <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
              </el-tooltip>
            </div>
          </div>
          <div class="mt-15 theme-shadow p-25 rounded-8 text-16 text-center">
            <div class="grid grid-cols-3 gap-x-40 gap-y-30">
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886556.png" alt="">
                <div class="mt-15 mb-8">{{ $t('今日新增') }}</div>
                <div class="text-green text-16">{{ info.daynew ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886560.png" alt="">
                <div class="mt-15 mb-8">{{ $t('今日活跃') }}</div>
                <div class="text-green text-16">{{ info.daylive ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886559.png" alt="">
                <div class="mt-15 mb-8">{{ $t('今日投注') }}</div>
                <div class="text-green text-16">{{ info.daybet ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886557.png" alt="">
                <div class="mt-15 mb-8">{{ $t('本月新增') }}</div>
                <div class="text-green text-16">{{ info.newplay ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886558.png" alt="">
                <div class="mt-15 mb-8">{{ $t('本月有效') }}</div>
                <div class="text-green text-16">{{ info.newplayvalid ?? 0 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-29 flex-1">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-#04d5f1 rounded-full"></div>
            <div class="flex items-center text-20 ml-10">
              {{ $t('本月费用概况') }}
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="$t('本月线下所有会员的充提以及投注数据汇总')"
                placement="top"
              >
                <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
              </el-tooltip>
            </div>
          </div>
          <div class="mt-15 theme-shadow p-25 rounded-8 text-16 text-center">
            <div class="grid grid-cols-3 gap-x-40 gap-y-30">
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886561.png" alt="">
                <div class="mt-15 mb-8">{{ $t('总存款') }}</div>
                <div class="text-#04d5f1 text-16">{{ info.depositall ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886562.png" alt="">
                <div class="mt-15 mb-8">{{ $t('总提款') }}</div>
                <div class="text-#04d5f1 text-16">{{ info.withdrawall ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886563.png" alt="">
                <div class="mt-15 mb-8">{{ $t('净输赢') }}</div>
                <div class="text-#04d5f1 text-16">{{ info.profit ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886566.png" alt="">
                <div class="mt-15 mb-8">{{ $t('代充金额') }}</div>
                <div class="text-#04d5f1 text-16">{{ info.refrechare ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886565.png" alt="">
                <div class="mt-15 mb-8">{{ $t('总投注额') }}</div>
                <div class="text-#04d5f1 text-16">{{ info.betamount ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886564.png" alt="">
                <div class="mt-15 mb-8">{{ $t('有效投注') }}</div>
                <div class="text-#04d5f1 text-16">{{ info.betvaildamount ?? 0 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-#f93131 rounded-full"></div>
            <div class="flex-1 flex justify-between items-center">
              <div class="flex items-center text-20 mx-10">
                {{ $t('本月费用概况') }}
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="$t('本月线下所有会员的充提以及投注数据汇总')"
                  placement="top"
                >
                  <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
                </el-tooltip>
              </div>
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="$t('所有成本费用将由公司和代理根据佣金比例共同分摊，而不是仅由代理单方面承担。')"
                placement="top"
              >
                <div class="text-14 cursor-pointer text-grey">{{ $t('重要须知') }}</div>
              </el-tooltip>
            </div>
          </div>
          <div class="mt-15 theme-shadow p-25 rounded-8 text-16 text-center">
            <div class="grid grid-cols-3 gap-x-40 gap-y-30">
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886567.png" alt="">
                <div class="mt-15 mb-8">{{ $t('会员返水') }}</div>
                <div class="text-#f93131 text-16">{{ info.fs ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886568.png" alt="">
                <div class="mt-15 mb-8">{{ $t('优惠/红利') }}</div>
                <div class="text-#f93131 text-16">{{ info.proamount ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886569.png" alt="">
                <div class="mt-15 mb-8">{{ $t('对接费用') }}</div>
                <div class="text-#f93131 text-16">{{ info.otherfee ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886571.png" alt="">
                <div class="mt-15 mb-8">{{ $t('支付金额') }}</div>
                <div class="text-#f93131 text-16">{{ info.payfee ?? 0 }}</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886570.png" alt="">
                <div class="mt-15 mb-8">{{ $t('邀请有奖') }}</div>
                <div class="text-#f93131 text-16">{{ info.invitefee ?? 0 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <div class="mt-30 text-14 text-grey">
      <div class="text-16 text-red">{{ $t('相关说明') }}：</div>
      <br>
      <div class="lh-26">
        {{ $t('会员净输赢：净输赢数接近会员"总存款—总提款"，计算方式为，游戏输赢—各项实际支出费用而得出。') }}
        <br>
        {{ $t('会员返水：根据会员的游戏有效返注而计算的奖励，此项为了会员粘性，一直保持在平台游戏。') }}
        <br>
        {{ $t('优惠／红利：会员参加平台各项优惠活动，红利申请而产生的实际费用，优惠是吸引会员注册与活跃的重要方式。') }}
        <br>
        {{ $t('邀请有奖：为鼓励您的会员道请朋友注册而设计的营销，您下线会员所邀请的会员均自动在您的下线，属盛乐创新业务，为您的输真报表业务开展带来无限可能。') }}
        <br>
        {{ $t('对接费用：平台每个游戏厂商的对接费用，按对接所产生的实际费用计算。') }}
        <br>
        {{ $t('支付费用：每个通道的支付费率不同，按会员充值支付所产生的实际费用计算会员报表。') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import LineChart from "@/views/modules/dashBoard/components/LineChart.vue";
import PieChart from "@/views/modules/dashBoard/components/PieChart.vue";
import {apiGetHomeData} from "@/service/api/api.js";

const {locale} = useI18n()

const info = ref({})
apiGetHomeData().then(res => {
  info.value = res
  console.log(res);
})
</script>

<style lang="scss" scoped>
ul {
  li {
    margin: 20px 0;
  }
}
</style>
