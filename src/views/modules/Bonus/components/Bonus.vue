<template>
  <div class="text-14">
    <div class="text-#3A3541 text-16px">付款账户</div>
    <div
      class="w-188px h-126px bg-#25D55B rounded-8px mt-20 text-#FFFFFF flex flex-col justify-center box-border pl-20">
      <span class="mb-10">付款账户</span>
      <span class="text-28px">HKD: {{ userInfo.giftUsd }}</span>
    </div>
    <div class="text-#3A3541 mt-30">会员账号</div>
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
        请从 <span
        class="text-#25D55B cursor-pointer"
        @click="$router.push('/managementCenter/membershipManagement')"
      >会员管理</span> 输入账号进行处理
      </div>
    </div>
    <div class="text-#3A3541 mt-40">存款金额</div>
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
      <span>自定义金额</span>
      <div class="flex items-center mt-12">
        <el-input size="large" type="number" class="!w-280" v-model="form.money" placeholder="请输入存款金额"/>
        <span class="text-#F93131 ml-10">此处金额为会员(所属地区)当地法币</span>
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span>流水限制</span>
      <div class="flex items-center mt-12">
        <el-input size="large" type="number" class="!w-280" v-model="form.lsbs" placeholder="请输入流水限制"/>
        <span class="text-#F93131 ml-10">按倍数算，输入2就是2倍流水</span>
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span class="mb-12">备注</span>
      <el-input size="large" maxlength="20" class="!w-280" v-model="form.desc" placeholder="20个字"/>
    </div>
    <div class="flex flex-col mt-20 w-300px">
      <span class="mb-12">支付密码</span>
      <el-input size="large" maxlength="6" type="password" class="!w-280" v-model="form.fundpassword"
                placeholder="请输入支付密码"/>
      <div @click="$router.push('/personalCenter/personalData')"
           class="w-100% text-right mt-20 text-#25D55B cursor-pointer">忘记密码?
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
      <span class="text-white">确认赠送</span>
    </el-button>
    <div class="text-#F93131 mt-30 mb-20">代存规则</div>
    <el-row>
      <el-col class="flex items-center mt-5" :span="24" v-for="(item,index) in textList" :key="item">
        <div class="w-20 h-20 bg-#25D55B rounded-full text-white flex items-center justify-center mr-5">{{
            index + 1
          }}
        </div>
        <div class="text-#868D88">{{ item }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/store/modules/user.store.js";
import {apiBonus} from "@/service/api/agent.js";
import {ElMessage} from "element-plus";

const {userInfo} = storeToRefs(useUserStore())
const {changeUserInfo} = useUserStore()

const numList = [18, 50, 100, 200, 500]

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
    ElMessage.success(res || '赠送成功')

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

</style>
