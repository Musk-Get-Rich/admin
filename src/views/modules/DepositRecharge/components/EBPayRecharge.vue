<template>
  <div>
    <div class="text-#3A3541 text-16px">{{ $t('付款账户') }}</div>
    <div
      class="w-188px h-126px bg-#25D55B rounded-8px mt-30 text-#FFFFFF flex flex-col justify-center box-border pl-20">
      <span class="text-16px mb-10">{{ $t('付款账户') }}</span>
      <span class="text-28px">CNY:{{ userInfo.balance }}</span>
    </div>
    <div class="text-#3A3541 text-16px mt-40">{{ $t('通道选择') }}</div>
    <div class="flex items-center mt-15">
      <div
        class="transition-400ms cursor-pointer px-20 h-46px text-16px mr-10 border-1 border-solid rounded-8px flex items-center justify-center"
        v-for="item in ebPayList"
        :key="item.channelId"
        :class="[
          chain.channelId === item.channelId ? 'border-green text-green' : 'border-#DBDCDE text-#3A3541',
        ]"
        @click="chain = item"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="flex flex-col mt-15">
      <span>{{ $t('存款个数') }}</span>
      <div class="flex items-center mt-15">
        <el-input
          type="number"
          class="!w-280"
          size="large"
          v-model="form.depositNum"
          :placeholder="$t('请输入存入个数')"
          @blur="handleBlur"
        >
          <template #append>CNY</template>
        </el-input>
      </div>
    </div>
    <div class="flex flex-col mt-15">
      <span>{{ $t('需要付款') }}</span>
      <div class="flex items-center mt-15">
        <el-input
          type="number"
          class="!w-280"
          size="large"
          readonly
          v-model="fullAmount"
          :placeholder="$t('请输入存入个数')"
          min="0"
        >
          <template #append>EB</template>
        </el-input>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-#3A3541 mt-15">{{ $t('最低存款') }}{{ min_deposit }}CNY</span>
      <span class="text-#3A3541 my-10">{{ $t('当前参考汇率') }}：1EB = 1CNY</span>
    </div>
    <el-button
      class="w-300px !h-46px mt-30 mb-50"
      round
      color="#25d55b"
      :disabled="disabled"
      @click="onSubmit"
      :loading="loading"
    >
      <span class="text-white">{{ $t('提交申请') }}</span>
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
import {storeToRefs} from "pinia";
import {useUserStore} from "@/store/modules/user.store.js";
import {apiEBPayList, apiEBPaySaving} from "@/service/api/agent.js";
import {ElMessage} from "element-plus";
import {useI18n} from "vue-i18n";

const { t } = useI18n()

// 充值通道
const ebPayList = ref([])
apiEBPayList({agenttype: 1}).then(res => {
  ebPayList.value = res
  chain.value = ebPayList.value[0]
  console.log(res);
})

const min_deposit = 100

const numList = [
  {
    usdtype: 'USDT',
    protocol: 'ERC20',
    opreateChannel: 3
  },
  {
    usdtype: 'USDT',
    protocol: 'TRC20',
    opreateChannel: 3
  },
]

const chain = ref(numList[0])

const {userInfo} = storeToRefs(useUserStore())
const {changeUserInfo} = useUserStore()

const form = ref({
  depositNum: '',
  opreateType: 1,
})

// 预计到账
const fullAmount = computed(() => form.value.depositNum / 1)

const disabled = computed(() => {
  return form.value.depositNum.length === 0 ||
    form.value.depositNum / 1 < 100
})

/**
 * {
    "orderamount": 200,
    "channelId": 10,
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJFMDAwMVRYMiIsImlhdCI6MTczOTg0NTIwOSwic3ViIjoiYWFhYmJiMiIsImV4cCI6MTczOTg4ODQwOX0.YcZD66Nc2ycV7B_hDRPXMrC8QtomveWF790OhQR8lhs",
    "language": "CN",
    "employeecode": "E0001TX2",
    "payChanneltype": "8306",
    "brandcode": "EB00000T",
    "enterprisecode": "EN001N"
}
 */

const loading = ref(false)
const onSubmit = () => {
  loading.value = true

  apiEBPaySaving({
    orderamount: form.value.depositNum,
    channelId: chain.value.channelId,
  }).then(res => {
    loading.value = false
    console.log(res);
    ElMessage.success(t('充值信息已提交'))

    changeUserInfo()

    form.value = {
      depositNum: '',
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

const handleBlur = () => {
  if (form.value.depositNum / 1 < min_deposit) {
    form.value.depositNum = ''
    return ElMessage.error({
      message: t(`最低充值{num}元`, { num: min_deposit }),
      duration: 3000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
