<template>
  <div>
    <div class="text-#3A3541 text-16px">{{ $t('付款账户') }}</div>
    <div
      class="w-188px h-126px bg-#25D55B rounded-8px mt-30 text-#FFFFFF flex flex-col justify-center box-border pl-20">
      <span class="text-16px mb-10">{{ $t('付款账户') }}</span>
      <span class="text-28px">HKD:{{ userInfo.balance }}</span>
    </div>
    <div class="text-#3A3541 text-16px mt-30">{{ $t('会员账号') }}</div>
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
    <div class="text-#3A3541 text-16px mt-40">{{ $t('存款金额') }}</div>
    <div class="flex items-center mt-15">
      <div
        class="transition-400ms w-115px h-46px cursor-pointer text-16px mr-10 border-1 border-solid rounded-8px flex items-center justify-center"
        v-for="item in numList"
        :key="item"
        @click="form.depositNum = item"
        :class="[
          form.depositNum === item ? 'border-green text-green' : 'border-#DBDCDE text-#3A3541',
        ]"
      >
        {{ item }}
      </div>
    </div>
    <div class="flex flex-col mt-15">
      <span>{{ $t('自定义金额') }}</span>
      <div class="flex items-center mt-15">
        <el-input class="!w-280" size="large" v-model="form.depositNum" :placeholder="$t('请输入存款金额')"/>
        <span class="text-#F93131 ml-10">{{ $t('此处金额为会员(所属地区)当地法币') }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-15">
      <span>{{ $t('流水限制') }}</span>
      <div class="flex items-center mt-15">
        <el-input type="number" size="large" v-model="form.lsbs" class="!w-280" :placeholder="$t('请输入流水')"/>
        <span class="text-#F93131 ml-10">{{ $t('按倍数算，输入2就是2倍流水') }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-15">
      <span class="mb-20">{{$t('备注')}}</span>
      <el-input size="large" v-model="form.desc" class="!w-280" :placeholder="$t('20个字')"/>
    </div>
    <div class="flex flex-col mt-15 w-300px">
      <span class="mb-20">{{ $t('支付密码') }}</span>
      <el-input type="password" size="large" v-model="form.fundpassword" class="!w-280" :placeholder="$t('请输入密码')"/>
      <div class="w-100% text-right mt-15 text-#25D55B cursor-pointer">{{$t('忘记密码')}}?</div>
    </div>
    <el-button
      class="w-300px !h-46px mt-30 mb-50"
      round
      color="#25d55b"
      :disabled="disabled"
      @click="onSubmit"
      :loading="loading"
    >
      <span class="text-white">{{ $t('确认充值') }}</span>
    </el-button>
    <div class="text-#F93131 mt-30 mb-15">{{ $t('代存规则') }}</div>
    <el-row>
      <el-col class="flex items-center mt-5" :span="24" v-for="(item,index) in textList" :key="item">
        <div class="w-20 h-20 bg-#25D55B rounded-full text-white flex items-center justify-center mr-5">{{
            index + 1
          }}
        </div>
        <div class="text-#868D88">{{ $t(item) }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {useUserStore} from "@/store/modules/user.store.js";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {apiBonus, apiPlayerWalletOperation} from "@/service/api/agent.js";
import {ElMessage} from "element-plus";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

const {userInfo} = storeToRefs(useUserStore())
const {changeUserInfo} = useUserStore()

const route = useRoute()

const numList = [500, 1000, 3000, 5000, 10000]

const form = ref({
  loginaccount: '',
  depositNum: '',
  lsbs: '',
  desc: '',
  fundpassword: '',
  opreateType: 4,
  // usdtype: 'USDT'
})

form.value.loginaccount = route.query.loginaccount || ''

const disabled = computed(() => {
  return form.value.loginaccount.length === 0 ||
    form.value.depositNum.length === 0 ||
    form.value.lsbs.length === 0 ||
    form.value.desc.length === 0 ||
    form.value.fundpassword.length !== 6
})

const loading = ref(false)
const onSubmit = () => {
  loading.value = true
  apiPlayerWalletOperation(form.value).then(res => {
    loading.value = false
    ElMessage.success(res || t('充值成功'))

    changeUserInfo()

    form.value = {
      ...form.value,
      depositNum: '',
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

</style>
