<template>
  <div>
    <div class="text-#3A3541 text-16px">付款账户</div>
    <div class="w-188px h-126px bg-#25D55B rounded-8px mt-30 text-#FFFFFF flex flex-col justify-center box-border pl-20">
      <span class="text-16px mb-10">付款账户</span>
      <span class="text-28px">HKD:0</span>
    </div>
    <div class="text-#3A3541 text-16px mt-30">会员账号</div>
    <div class="text-#868D88 text-16px mt-30">
      请从 <span class="text-#25D55B">会员管理</span> 输入账号进行处理
    </div>
    <div class="text-#3A3541 text-16px mt-40">存款金额</div>
    <div class="flex items-center mt-20">
      <div class="w-115px h-46px text-16px mr-10 border-solid border-#DBDCDE rounded-8px flex items-center justify-center text-#3A3541" v-for="item in numList" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span>自定义金额</span>
      <div class="flex items-center mt-20">
        <el-input size="large" v-model="input" style="width: 300px;height: 46px;" placeholder="请输入存款金额" />
        <span class="text-#F93131 ml-10">此处金额为会员(所属地区)当地法币</span>
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span>流水限制</span>
      <div class="flex items-center mt-20">
        <el-input size="large" v-model="input" style="width: 300px;height: 46px;" placeholder="" />
        <span class="text-#F93131 ml-10">按倍数算，输入2就是2倍流水</span>
      </div>
    </div>
    <div class="flex flex-col mt-20">
      <span class="mb-20">备注</span>
      <el-input size="large" v-model="input" style="width: 300px;height: 46px;" placeholder="20个字" />
    </div>
    <div class="flex flex-col mt-20 w-300px">
      <span class="mb-20">支付密码</span>
      <el-input size="large" v-model="input" style="width: 300px;height: 46px;" placeholder="请输入密码" />
      <div class="w-100% text-right mt-20 text-#25D55B">忘记密码?</div>
    </div>
    <div class="w-300px h-46px flex items-center justify-center rounded-30px bg-#8D8D8D text-white mt-30 mb-50">确认提款</div>
    <div class="text-#F93131 mt-30 mb-20">代存规则</div>
    <el-row>
      <el-col class="flex items-center mt-5" :span="24" v-for="(item,index) in textList" :key="item">
        <div class="w-20 h-20 bg-#25D55B rounded-full text-white flex items-center justify-center mr-5">{{ index+1 }}</div>
        <div class="text-#868D88">{{ item }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const numList = [18,50,100,200,500]

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