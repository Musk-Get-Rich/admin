<template>
  <el-card>
    <avue-crud ref="tableRef" :key="JSON.stringify(customOptions)" :table-loading="tableLoading" :data="tableData"
      :option="customOptions" v-model:page="pageObj" @refresh-change="getTableData" @search-change="onSearch"
      @search-reset="onSearchReset" @size-change="sizeChange" @current-change="currentChange"
      @expand-change="expandChange">
      <template #search>
        <el-row justify="space-between">
          <Title name="会员管理" />
        </el-row>
        <div class="border border-b-solid border-gray-300 py-6xl my-6xl">
          <el-button v-for="t in types" :key="t.value" :type="t.value === type ? 'primary' : ''"
            @click="onTypeChange(t.value)">
            {{ t.label }}
          </el-button>
        </div>
      </template>
      <template #name-header="{ column }">
        <div class="flex justify-center items-center">
          <span>{{ (column || {}).label }}</span>
          <el-popover placement="top-start" :width="200" trigger="hover">
            <template #reference>
              <span class="color-coolgray flex justify-center items-center">
                <el-icon color="coolGray">
                  <InfoFilled />
                </el-icon>
              </span>
            </template>
            <div>
              <div>主账户：代表用户主账户的所剩余额，不包含场馆内的余额</div>
              <div>邀请账户：代表用户的分享钱包余额，不包含已提取的分享佣金</div>
            </div>
          </el-popover>
        </div>
      </template>
      <template #status-header="{ column }">
        <div class="flex justify-center items-center">
          <span>{{ (column || {}).label }}</span>
          <el-popover placement="top-start" :width="200" trigger="hover">
            <template #reference>
              <span class="color-coolgray flex justify-center items-center">
                <el-icon color="coolGray">
                  <InfoFilled />
                </el-icon>
              </span>
            </template>
            <div>
              <div>静止户-只是注册，未完善好手机，银行卡和身份证资料。</div>
              <div>正常户-手机，银行卡，身份证资料已完善好。</div>
              <div>注销-该客户达到一定条件，要求注销自己账号。</div>
              <div>停权户-涉及会员风控，对会员进行停权，登陆不上平台。</div>
              <div>密码锁定-连续5次输错密码，系统进行锁定。</div>
            </div>
          </el-popover>
        </div>
      </template>
      <template #employeelevelcode="scope">
        <div>{{ scope.row.employeelevelname }}</div>
        <div class="color-green">cn</div>
      </template>
      <template #loginaccount="scope">
        <div class="flex justify-center items-center">
          <div>{{ scope.row.loginaccount }}</div>
          <img class="w-20 h-20 object-cover" src="@/assets/images/login/shield-tick.png" alt="">
        </div>
      </template>
      <template #isnormal="scope">
        <div>
          <div>{{ isnormalOptions.find(a => String(a.value) === String(scope.row.isnormal))?.label }}</div>
          <div class="text-4xl">
            <span>上级：</span>
            <span class="color-green">无</span>
          </div>
        </div>
      </template>
      <template #hasDeposit="scope">
        <span>{{ scope.row.accumulateddeposit || 0 }} / {{ scope.row.accumulatedwithdraw }}</span>
      </template>
      <template #other="{ row }">
        <img @click="toggleExpand(row, 'other')" class="w-24" src="@/assets/images/add-circle.png" alt="">
      </template>
      <template #expand="{ row }">
        <div class="px-10">
          <Other :tableData="row.otherList" />
        </div>
      </template>
      <template #_actions="{ row }">
        <div class="grid grid-cols-2 gap-4 w-full">
          <div v-for="item in menuList" :key="item.id" class="p-4">
            <div class="p-3 cursor-pointer" @click="menuClick">
              <img class="w-20 h-20 object-cover" :src="item.icon" :alt="item.name">
            </div>
          </div>
        </div>
      </template>
    </avue-crud>
  </el-card>
</template>

<script setup>
import option, { isnormalOptions } from "./option.js"
import { useTableList } from "@/hook/useTableList.js";
import { useTableSearch } from "@/hook/useTableSearch.js";
import { apiGetVipList, apiGetVipMaintainList } from "@/service/api/api.js";
import { computed } from "vue";
import { InfoFilled } from '@element-plus/icons-vue';
import Title from "@/components/Title/index.vue";

import dollarCircle from '@/assets/images/login/dollar-circle.png'
import coins from '@/assets/images/login/Coins.png'
import shieldTick from '@/assets/images/login/shield-tick.png'
import chart from '@/assets/images/login/chart.png'
import note from '@/assets/images/login/note.png'
import addCircle from '@/assets/images/login/add-circle.png'
import { ElMessageBox } from "element-plus";
import { useUserStore } from "@/store/modules/user.store.js";
import Other from "./components/other/index.vue"

const menuList = [
  { id: 1, icon: dollarCircle },
  { id: 2, icon: coins },
  { id: 3, icon: shieldTick },
  { id: 4, icon: chart },
  { id: 5, icon: note },
  { id: 6, icon: addCircle }
]

const types = [
  {
    value: 1,
    label: '会员管理'
  },
  {
    value: 0,
    label: '需要维护'
  }
]

const type = ref(1)


const customOptions = computed(() => {
  return {
    ...option,
    column: option.column.filter(c => !['phoneOrEmail', 'reasontype'].includes(c.prop) || type.value === 0)
  }
})

const tableSearch = useTableSearch()

const userStore = useUserStore()

const fetchList = (params) => {
  if (type.value === 1) {
    return apiGetVipList({
      ...params,
      employeecode: undefined,
      parentemployeecode: userStore.userInfo.employeecode
    })
  } else {
    // return apiGetVipList({
    //   ...params,
    //   isnormal: 0,
    //   employeecode: undefined,
    // })
    return apiGetVipMaintainList({
      ...params,
      employeecode: undefined,
      parentemployeecode: userStore.userInfo.employeecode
    })
  }
}

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(fetchList, {

})

const toggleExpand = (row) => {
  row.otherList = [{}];

  tableRef.value.toggleRowExpansion(row);
}

const expandChange = (row) => {
  row.expandStatus = !row.expandStatus
  console.log(row.expandStatus);
};

const onTypeChange = (value) => {
  type.value = value;
  getTableData();
}

const menuClick = () => {
  ElMessageBox.alert('敬请期待', '温馨提示', {
    confirmButtonText: 'OK',
    callback: (action) => {
    },
  })
}

// 搜索
const onSearch = (form, done) => {
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  tableSearch.reset(getTableData)
}
</script>
