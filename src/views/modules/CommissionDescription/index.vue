<template>
  <div>
    <el-card>
      <Title :name="$t('佣金说明')"/>
      <el-row class="mt-20">
        <el-table border :data="tableData" style="width: 100%" :header-cell-style="{background:'#E7F4EB'}">
          <el-table-column prop="condition" :label="$t('当月有效活跃和有效新增')" align="center"/>
          <el-table-column prop="rate" :label="$t('提出比例')" align="center"/>
          <el-table-column prop="duration" :label="$t('可参与活动时长')" align="center"/>
        </el-table>
      </el-row>
      <el-row class="mt-30 text-#868D88">
        <div class="p-5" v-if="locale === 'zh-CN'">
          <h2 class="text-black text-16 font-bold mb-4">佣金规则：</h2>
          <p class="mb-4">活动时间：2024年12月1日至2025年3月31日</p>
          <ul class="list-none lh-45 p-0 m-0">
            <li>1. 有效新增用户定义：当月累计存款 > 2000</li>
            <li>2. 有效活跃用户定义：当月累计存款 > 2000</li>
            <li>3. 佣金将在活动审核完成后，3个工作日内发放至合营伙伴后台绑定的账户内，无需投注要求可直接提取</li>
            <li>4. 同一手机号、姓名、邮箱地址、银行卡号等游戏账号，仅可参与一次，若有违规将不享受业绩红利</li>
            <li>5. 本活动须在客服报名方可生效，以报名之日起开始登记统计活动数据</li>
            <li>6. GG88保留对本活动进行修改、终止的权利，并享有最终解释权</li>
          </ul>
        </div>
        <div class="p-5" v-else-if="locale === 'zh-TW'">
          <h2 class="text-black text-16 font-bold mb-4">佣金規則：</h2>
          <p class="mb-4">活動時間：2024年12月1日至2025年3月31日</p>
          <ul class="list-none lh-45 p-0 m-0">
            <li>1. 有效新增使用者定義：當月累積存款 > 2000</li>
            <li>2. 有效活躍用戶定義：當月累積存款 > 2000</li>
            <li>3. 佣金將在活動審核完成後，3個工作天內發放至合營夥伴後台綁定的帳戶內，無需投注要求可直接提取</li>
            <li>4. 同一手機號碼、姓名、信箱地址、銀行卡號等遊戲帳號，僅可參與一次，若有違規將不享有業績紅利</li>
            <li>5. 本活動須於客服報名方可生效，以報名日起開始登記統計活動資料</li>
            <li>6. GG88保留對本活動進行修改、終止的權利，並享有最終解釋權</li>
          </ul>
        </div>
        <div class="p-5" v-else>
          <h2 class="text-black text-16 font-bold mb-4">Commission rules:</h2>
          <p class="mb-4">Activity period: December 1, 2024 to March 31, 2025</p>
          <ul class="list-none lh-45 p-0 m-0">
            <li>1. Valid new user definition: cumulative deposits in the month > 2000</li>
            <li>2. Valid active user definition: cumulative deposits in the month > 2000</li>
            <li>3. After the activity review is completed, the commission will be paid to the account bound to the backend of the joint venture partner within 3 working days, and can be directly withdrawn without betting requirements</li>
            <li>4. The same mobile phone number, name, email address, bank card number and other game accounts can only participate once. If there is any violation, performance bonus will not be enjoyed</li>
            <li>5. This activity will only take effect after registration with the customer service, and the activity data will be registered and counted from the date of registration</li>
            <li>6. GG88 reserves the right to modify and terminate this activity and has the final right of interpretation</li>
          </ul>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import {useI18n} from "vue-i18n";

const { locale, t } = useI18n()

const tableData = computed(() => [
  {condition: t('5个有效新增和5个有效活跃'), rate: '55%', duration: t('前2个月')},
  {condition: t('5个有效新增和10个有效活跃'), rate: '55%', duration: t('前3个月')},
  {condition: t('5个有效新增和15个有效活跃'), rate: '55%', duration: t('前4个月')},
  {condition: t('5个有效新增和20个有效活跃'), rate: '55%', duration: t('前5个月')},
  {condition: t('5个有效新增和25个有效活跃'), rate: '55%', duration: t('前6个月')},
]);
</script>

<style lang="scss" scoped>
:deep(.el-table) {
  thead {
    @apply text-black;
  }
}

:deep(.el-table th) {
  height: 80px;
  border-right: 1px solid #dcdfe6;

  &:last-child {
    border-right: 0;
  }
}
</style>
