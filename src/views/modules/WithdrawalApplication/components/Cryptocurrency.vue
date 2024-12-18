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
          v-model="form.informationcode"
          :value="row.informationcode"
        />
      </template>
      <template #menu="{ row }">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="$t('需要删除请联系客服')"
          placement="top"
        >
          <img class="w-20" src="@/assets/images/delete.png" alt="">
        </el-tooltip>
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
      <el-input type="number" class="!w-280" size="large" v-model="form.depositNum" placeholder="请输入提款金额" />
    </div>
    <div class="flex flex-col w-300px">
      <span class="mb-10">支付密码</span>
      <el-input class="!w-280" size="large" v-model="form.fundpassword" placeholder="请输入支付密码" />
      <div class="w-100% text-right mt-20 text-#25D55B cursor-pointer">忘记密码?</div>
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
import {apiPlayerWalletOperation} from "@/service/api/agent.js";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/store/modules/user.store.js";

const userStore = useUserStore()

const form = ref({
  depositNum: '',
  informationcode: '',
  opreateType: 7,
  fundpassword: '',
  usdtype: 'USDT',
})

const disabled = computed(() => {
  return form.value.depositNum.length === 0 ||
    form.value.informationcode.length === 0 ||
    form.value.fundpassword.length < 6
})

const rowClick = (row) => {
  console.log(row.informationcode);
  form.value.informationcode = row.informationcode;
};

const handleAddUSDTAddress = () => {
  useAddUSDTAddress(getTableData).addAddress()
}

const loading = ref(false)
const onSubmit = () => {
  loading.value = true
  apiPlayerWalletOperation(form.value).then(res => {
    loading.value = false
    console.log(res);
    ElMessage.success('提现信息已提交')

    userStore.changeUserInfo()

    form.value = {
      depositNum: '',
      informationcode: '',
      opreateType: 7,
      fundpassword: '',
      usdtype: 'USDT',
    }

    console.log(form.value);
  }).catch(err => {
    loading.value = false
  })
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
