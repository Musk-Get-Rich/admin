<template>
  <div class="text-black">
    <el-card class="mb-30">
      <div class="flex items-center">
        <div class="w-8 h-8 bg-green rounded-full"></div>
        <div class="text-20 ml-10">本月数据概览</div>
      </div>
      <div class="flex items-center mt-40 justify-between">
        <div class="flex items-center">
          <div class="text-18">佣金：<span class="text-green">0.00</span></div>
          <div class="text-12 text-grey ml-30">每天凌晨3:00更新数据</div>
        </div>
        <el-progress class="w-300" color="#25d55b" :stroke-width="10" :percentage="70"/>
        <div class="py-8 px-21 text-12 bg-#e9fbef rounded-4">
          佣金结算说明
        </div>
      </div>
    </el-card>
    <el-card class="mb-30">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-green rounded-full"></div>
            <div class="flex items-center text-20 ml-10">
              本月数据概览
              <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
            </div>
          </div>
          <div class="mt-15 theme-shadow p-25 rounded-8">
            <div class="grid grid-cols-3 gap-x-40 gap-y-30">
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886556.png" alt="">
                <div class="mt-15 mb-8">今日新增</div>
                <div class="text-green text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886557.png" alt="">
                <div class="mt-15 mb-8">本月新增</div>
                <div class="text-green text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886558.png" alt="">
                <div class="mt-15 mb-8">本月有效</div>
                <div class="text-green text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886560.png" alt="">
                <div class="mt-15 mb-8">活跃会员</div>
                <div class="text-green text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886559.png" alt="">
                <div class="mt-15 mb-8">本月新增</div>
                <div class="text-green text-18">0</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-29 flex-1">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-#04d5f1 rounded-full"></div>
            <div class="flex items-center text-20 ml-10">
              本月资金概况
              <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
            </div>
          </div>
          <div class="mt-15 theme-shadow p-25 rounded-8">
            <div class="grid grid-cols-3 gap-x-40 gap-y-30">
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886561.png" alt="">
                <div class="mt-15 mb-8">总存款</div>
                <div class="text-#04d5f1 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886562.png" alt="">
                <div class="mt-15 mb-8">总提款</div>
                <div class="text-#04d5f1 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886563.png" alt="">
                <div class="mt-15 mb-8">净输赢</div>
                <div class="text-#04d5f1 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886566.png" alt="">
                <div class="mt-15 mb-8">代充金额</div>
                <div class="text-#04d5f1 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886565.png" alt="">
                <div class="mt-15 mb-8">总投注额</div>
                <div class="text-#04d5f1 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886564.png" alt="">
                <div class="mt-15 mb-8">有效投注</div>
                <div class="text-#04d5f1 text-18">0</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-#f93131 rounded-full"></div>
            <div class="flex-1 flex justify-between items-center">
              <div class="flex items-center text-20 ml-10">
                本月数据概览
                <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
              </div>
              <div class="text-12 text-grey">重要须知</div>
            </div>
          </div>
          <div class="mt-15 theme-shadow p-30 rounded-8">
            <div class="grid grid-cols-3 gap-x-40 gap-y-30">
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886567.png" alt="">
                <div class="mt-15 mb-8">会员返水</div>
                <div class="text-#f93131 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886568.png" alt="">
                <div class="mt-15 mb-8">优惠/红利</div>
                <div class="text-#f93131 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886569.png" alt="">
                <div class="mt-15 mb-8">对接费用</div>
                <div class="text-#f93131 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886571.png" alt="">
                <div class="mt-15 mb-8">支付金额</div>
                <div class="text-#f93131 text-18">0</div>
              </div>
              <div class="flex items-center justify-center flex-col">
                <img class="w-48" src="@/assets/images/home/Group1597886570.png" alt="">
                <div class="mt-15 mb-8">邀请有奖</div>
                <div class="text-#f93131 text-18">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card>
      <div class="flex items-center mb-30">
        <div class="w-8 h-8 bg-green rounded-full"></div>
        <div class="text-20 ml-10">渠道质量转化漏斗</div>
      </div>
      <div class="flex">
        <div class="flex-1">
          <LineChart/>
        </div>
        <div class="flex-1 ml-30">
          <PieChart/>
        </div>
      </div>
    </el-card>
    <div class="mt-30 text-14 text-grey">
      <div class="text-16 text-red">相关说明：</div>
      <br>
      <div class="lh-26">
        ❶ 会员净输赢：净输赢数接近会员“总存款—总提款”，计算方式为，游戏输赢—各项实际支出费用而得出。
        <br>
        ❷ 会员返水：根据会员的游戏有效返注而计算的奖励，此项为了会员粘性，一直保持在平台游戏。
        <br>
        ❸ 优惠／红利：会员参加平台各项优惠活动，红利申请而产生的实际费用，优惠是吸引会员注册与活跃的重要方式。
        <br>
        ❹ 邀请有奖：为鼓励您的会员道请朋友注册而设计的营销，您下线会员所邀请的会员均自动在您的下线，属PP88创新业务，为您的输真报表业务开展带来无限可能。
        <br>
        ❺ 对接费用：平台每个游戏厂商的对接费用，按对接所产生的实际费用计算。
        <br>
        ❻ 支付费用：每个通道的支付费率不同，按会员充值支付所产生的实际费用计算会员报表。
      </div>
    </div>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import LineChart from "@/views/modules/dashBoard/components/LineChart.vue";
import PieChart from "@/views/modules/dashBoard/components/PieChart.vue";

const {locale} = useI18n()
</script>

<style lang="scss" scoped>
ul {
  li {
    margin: 20px 0;
  }
}
</style>
<script setup lang="ts">
</script>
