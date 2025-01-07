<template>
  <div class="text-14">
    <div class="text-#3A3541 text-16px">{{ $t('付款账户') }}</div>
    <div
      class="w-188px h-126px bg-#25D55B rounded-8px mt-20 text-#FFFFFF flex flex-col justify-center box-border pl-20">
      <span class="mb-10">{{ $t('付款账户') }}</span>
      <span class="text-28px">HKD: {{ userInfo.giftUsd }}</span>
    </div>
    <div class="text-#3A3541 mt-30">{{ $t('会员账号') }}</div>
    <div class="mt-12">
      <el-input
        class="!w-280"
        v-show="form.loginaccount"
        v-model="form.loginaccount"
        disabled
        placeholder="Please input"
        size="large"
      />
      <div
        v-show="!(form.loginaccount)"
        class="text-#868D88"
      >
        {{ $t('请从') }} <span
        class="text-#25D55B cursor-pointer"
        @click="$router.push('/managementCenter/membershipManagement')"
      >{{ $t('会员管理') }}</span> {{ $t('输入账号进行处理') }}
      </div>
    </div>
    <div class="text-#3A3541 mt-40">{{ $t('存款金额') }}</div>
    <div class="flex items-center mt-12">
      <div
        class="transition-400ms w-110px h-46px text-16px mr-10 border-1 cursor-pointer border-solid rounded-8px flex items-center justify-center"
        v-for="item in numList"
        :key="item"
        @click="form.money = item"
        :class="[
          form.money === item ? 'border-green text-green' : 'border-#DBDCDE text-#3A3541',
        ]"
      >
        {{ item }}
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span>{{ $t('自定义金额') }}</span>
      <div class="flex items-center mt-12">
        <el-input size="large" type="number" class="!w-280" v-model="form.money" :placeholder="$t('请输入存款金额')"/>
        <span class="text-#F93131 ml-10">{{ $t('此处金额为会员(所属地区)当地法币') }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span>{{ $t('流水限制') }}</span>
      <div class="flex items-center mt-12">
        <el-input size="large" type="number" class="!w-280" v-model="form.lsbs" :placeholder="$t('请输入流水限制')"/>
        <span class="text-#F93131 ml-10">{{ $t('按倍数算，输入2就是2倍流水') }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span class="mb-12">{{ $t('备注') }}</span>
      <el-input size="large" maxlength="20" class="!w-280" v-model="form.desc" :placeholder="$t('20个字')"/>
    </div>
    <div class="flex flex-col mt-20 w-300px">
      <span class="mb-12">{{ $t('支付密码') }}</span>
      <el-input size="large" maxlength="6" type="password" class="!w-280" v-model="form.fundpassword"
                :placeholder="$t('请输入支付密码')"/>
      <div @click="$router.push('/personalCenter/personalData')"
           class="w-100% text-right mt-20 text-#25D55B cursor-pointer">{{$t('忘记密码')}}?
      </div>
    </div>
    <el-button
      class="w-300px !h-46px mt-30 mb-50"
      round
      color="#25d55b"
      :disabled="disabled"
      @click="onSubmit"
      :loading="loading"
    >
      <span class="text-white">{{ $t('确认赠送') }}</span>
    </el-button>
    <div class="bonus-rules" v-if="locale === 'zh-CN'">
      <h2 class="text-red text-16">彩金规则</h2>
      <ul class="numbered-list text-14 text-#868D88 lh-22">
        <li>赠送规则
          <ul class="disc-list">
            <li>未绑定提款信息会员不能赠送彩金</li>
            <li>注：设备重叠用户不允许赠送</li>
            <li>绑定提款信息无存款的用户彩金赠送上限：200</li>
            <li>正常活跃会员每次赠送彩金只能赠送该会员最后一笔存款金额的30%</li>
            <li>注：如该会员最后一笔存款为1000，赠送彩金最多能赠送300，更新下一次存款后将重新可以赠送30%</li>
          </ul>
        </li>
        <li>彩金单位为本地货币；</li>
        <li>每月根据上个月有效会员数量发放彩金额度，1有效=300彩金，不叠加当月清零；</li>
        <li>有效会员判定标准：在平台完成充值次数不低于3次，单次充值金额不低于500。累计充值金额不低于2000；</li>
        <li>代理彩金额度使用完无法申请，只能等下月根据活跃会员数量发放，发放时间：每月1号；</li>
        <li>代理彩金赠送时可自由调整打码量倍数，不设置则无需打码量；</li>
        <li>会员每月彩金赠送上限（当地货币）：
          <ul class="disc-list">
            <li>VIP1：1500</li>
            <li>VIP2：2000</li>
            <li>VIP3：3000</li>
            <li>VIP4：5000</li>
            <li>VIP5：10000</li>
            <li>VIP6：以上不限制</li>
          </ul>
        </li>
        <li>注：赠送上限的会员可以通过自然升级提升额度，当月上限无法再次赠送，营销部关闭代赠申请。</li>
      </ul>
    </div>
    <div class="bonus-rules" v-else-if="locale === 'zh-TW'">
      <h2 class="text-red text-16">彩金規則</h2>
      <ul class="numbered-list text-14 text-#868D88 lh-22">
        <li>贈送規則
          <ul class="disc-list">
            <li>未綁定提款信息會員不能贈送彩金</li>
            <li>註：設備重疊用戶不允許贈送</li>
            <li>綁定提款信息無存款的用戶彩金贈送上限：200</li>
            <li>正常活躍會員每次贈送彩金只能贈送該會員最後一筆存款金額的30%</li>
            <li>註：如該會員最後一筆存款為1000，贈送彩金最多能贈送300，更新下一次存款後將重新可以贈送30%</li>
          </ul>
        </li>
        <li>彩金單位為本地貨幣；</li>
        <li>每月根據上個月有效會員數量發放彩金額度，1有效=300彩金，不疊加當月清零；</li>
        <li>有效會員判定標準：在平台完成充值次數不低於3次，單次充值金額不低於500。累計充值金額不低於2000；</li>
        <li>代理彩金額度使用完無法申請，只能等下月根據活躍會員數量發放，發放時間：每月1號；</li>
        <li>代理彩金贈送時可自由調整打碼量倍數，不設置則無需打碼量；</li>
        <li>會員每月彩金贈送上限（當地貨幣）：
          <ul class="disc-list">
            <li>VIP1：1500</li>
            <li>VIP2：2000</li>
            <li>VIP3：3000</li>
            <li>VIP4：5000</li>
            <li>VIP5：10000</li>
            <li>VIP6：以上不限制</li>
          </ul>
        </li>
        <li>註：贈送上限的會員可以通過自然升級提升額度，當月上限無法再次贈送，營銷部關閉代贈申請。</li>
      </ul>
    </div>
    <div class="bonus-rules" v-else>
      <h2 class="text-red text-16">Bonus Rules</h2>
      <ul class="numbered-list text-14 text-#868D88 lh-22">
        <li>Bonus Rules
          <ul class="disc-list">
            <li>Members without withdrawal information cannot receive bonus gifts</li>
            <li>Note: Overlapping device users are not allowed to receive gifts</li>
            <li>The bonus gift limit for users without deposits after binding withdrawal information is 200</li>
            <li>For normal active members, each bonus gift can only be 30% of the member's last deposit amount</li>
            <li>Note: If the member's last deposit is 1000, the maximum bonus gift is 300. After updating the next deposit, 30% can be gifted again</li>
          </ul>
        </li>
        <li>The bonus is in local currency;</li>
        <li>The bonus amount is issued monthly based on the number of active members from the previous month, 1 active = 300 bonus, not cumulative, cleared monthly;</li>
        <li>Active member criteria: Complete at least 3 recharges on the platform, with a single recharge amount not less than 500. The cumulative recharge amount should not be less than 2000;</li>
        <li>Once the agent's bonus quota is used up, it cannot be reapplied. It can only be issued next month based on the number of active members, issued on the 1st of each month;</li>
        <li>When giving agent bonuses, the multiplier of the turnover can be freely adjusted. If not set, no turnover is required;</li>
        <li>Monthly bonus gift limit for members (local currency):
          <ul class="disc-list">
            <li>VIP1: 1500</li>
            <li>VIP2: 2000</li>
            <li>VIP3: 3000</li>
            <li>VIP4: 5000</li>
            <li>VIP5: 10000</li>
            <li>VIP6: No limit above</li>
          </ul>
        </li>
        <li>Note: Members with a gift limit can increase their quota through natural upgrades. The monthly limit cannot be gifted again, and the marketing department closes the proxy gift application.</li>
      </ul>
    </div>
    
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/store/modules/user.store.js";
import {apiBonus} from "@/service/api/agent.js";
import {ElMessage} from "element-plus";
import {useI18n} from "vue-i18n";

const {userInfo} = storeToRefs(useUserStore())
const {changeUserInfo} = useUserStore()

const {locale} = useI18n()

const numList = [500, 1000, 3000, 5000, 10000]

const route = useRoute()

const form = ref({
  loginaccount: '',
  money: '',
  lsbs: '',
  desc: '',
  fundpassword: ''
})

form.value.loginaccount = route.query.loginaccount || ''

const disabled = computed(() => {
  return form.value.loginaccount.length === 0 ||
    form.value.money.length === 0 ||
    form.value.lsbs.length === 0 ||
    form.value.desc.length === 0 ||
    form.value.fundpassword.length !== 6
})

const loading = ref(false)
const onSubmit = () => {
  loading.value = true
  apiBonus(form.value).then(res => {
    loading.value = false
    ElMessage.success(res || t('赠送成功'))

    changeUserInfo()

    form.value = {
      ...form.value,
      money: '',
      lsbs: '',
      desc: '',
      fundpassword: ''
    }
  }).catch(err => {
    loading.value = false
  })
}

const textList = [
  '代存余额需提前充值，只接收ERC20/TRC20充值，1USDT=1USD',
  '最低充值10U，低于10U将无法到账，如遇区块链网络拥堵，可能会掉单，联系客服处理即',
  '钱包金额为USD，代存金额则按国际汇率兑换会员所属地区的货币',
  '代存需1倍流水才能提款',
  '请注意代存金额以及会员账号，代存错误无法追回',
  '代存余额可向同属上级的其他代理转账，转账成功后无法追回'
]
</script>

<style lang="scss" scoped>
.numbered-list {
  list-style-type: decimal;
  margin-left: 0;
  padding-left: 18px;
}

.disc-list {
  list-style-type: disc; 
  padding-left: 10px; 
}
</style>
