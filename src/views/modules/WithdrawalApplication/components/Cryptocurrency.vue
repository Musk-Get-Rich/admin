<template>
  <div>
    <el-row>
      <el-table :data="tableData" :header-cell-style="{background:'#E7F4EB',height: '60px'}">
        <el-table-column prop="date" label="请选择" />
        <el-table-column prop="name" label="加密货币名称" />
        <el-table-column prop="state" label="加密货币地址" />
        <el-table-column prop="city" label="协议" />
        <el-table-column prop="address" label="操作" />
      </el-table>
    </el-row>
    <div class="w-150px h-36px flex items-center justify-center rounded-30px border-solid border-#25D55B mt-30 mb-40 text-#25D55B">
      <img class="w-20 h-20" src="@/assets/images/finance/add.png" alt="">
      <span>添加加密钱包</span>
    </div>
    <div class="flex flex-col mb-20">
      <span class="mb-10">提款金额</span>
      <el-input size="large" v-model="input" style="width: 300px" placeholder="" />
    </div>
    <div class="flex flex-col w-300px">
      <span class="mb-10">支付密码</span>
      <el-input size="large" v-model="input" style="width: 300px" placeholder="" />
      <div class="w-100% text-right mt-20 text-#25D55B">忘记密码?</div>
    </div>
    <div class="w-300px h-46px flex items-center justify-center rounded-30px bg-#8D8D8D text-white mt-30 mb-50">确认提款</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>