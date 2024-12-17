<template>
  <div>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="tableData"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @size-change="sizeChange"
      @current-change="currentChange"
      @row-click="rowClick"
    >
      <template #empty>
        <div>暂无数据</div>
      </template>
      <template #radio="{ row }">
        <el-radio
          v-model="form.usdtAccount"
          :value="row.paymentaccount"
        />
      </template>
      <template #menu="{ row }">
        <img class="w-20" src="@/assets/images/delete.png" alt="">
      </template>
    </avue-crud>
    <div
      @click="handleAddUSDTAddress"
      class="w-150px h-36px flex items-center justify-center rounded-30px text-14 cursor-pointer border-1 border-solid border-#25D55B mt-30 mb-40 text-#25D55B">
      <img class="w-20" src="@/assets/images/finance/add.png" alt="">
      <span>添加加密钱包</span>
    </div>
    <div class="flex flex-col mb-20">
      <span class="mb-10">提款金额</span>
      <el-input class="!w-280" size="large" v-model="input" placeholder="请输入提款金额" />
    </div>
    <div class="flex flex-col w-300px">
      <span class="mb-10">支付密码</span>
      <el-input class="!w-280" size="large" v-model="input" placeholder="请输入支付密码" />
      <div class="w-100% text-right mt-20 text-#25D55B">忘记密码?</div>
    </div>
    <el-button
      class="w-300px !h-46px mt-30 mb-50"
      round
      color="#25d55b"
      :disabled="disabled"
      @click="onSubmit"
      :loading="loading"
    >
      <span class="text-white">确认提款</span>
    </el-button>
  </div>
</template>

<script setup>
import { useAddUSDTAddress } from "@/views/modules/WithdrawalApplication/hook/useAddUSDTAddress.js";
import option from "./option.js";
import {useTableList} from "@/hook/useTableList.js";
import {apiUserUSDTList} from "@/service/api/api.js";

const form = ref({
  depositNum: '',
  usdtAccount: ''
})

const rowClick = (row) => {
  console.log(row);
  form.value.usdtAccount = row.paymentaccount;
  console.log(form.value);
};

const handleAddUSDTAddress = () => {
  useAddUSDTAddress(getTableData).addAddress()
}

const disabled = computed(() => {
  return form.value.depositNum.length === 0 ||
    form.value.depositNum / 1 < 10
})

const loading = ref(false)
const onSubmit = () => {
  loading.value = true
}

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiUserUSDTList, {
  parentemployeecode: undefined
}, 'record')
</script>

<style lang="scss" scoped>
:deep(.el-radio__label) {
  display: none;
}

:deep(.avue-crud__empty) {
  padding: 20px 0;
}
</style>
