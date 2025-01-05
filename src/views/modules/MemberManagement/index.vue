<template>
  <el-card>
    <avue-crud ref="tableRef" :key="JSON.stringify(customOptions)" :table-loading="tableLoading" :data="tableData"
      :option="customOptions" v-model:page="pageObj" @refresh-change="getTableData" @search-change="onSearch"
      @search-reset="onSearchReset" @size-change="sizeChange" @current-change="currentChange"
      @expand-change="expandChange" :summary-method="summaryMethod">
      <template #search>
        <el-row justify="space-between">
          <Title :name="$t('会员管理')" />
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
              <div>{{ $t('主账户：代表用户主账户的所剩余额，不包含场馆内的余额') }}</div>
              <div>{{ $t('邀请账户：代表用户的分享钱包余额，不包含已提取的分享佣金') }}</div>
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
              <div>{{ $t('静止户-只是注册，未完善好手机，银行卡和身份证资料。') }}</div>
              <div>{{ $t('正常户-手机，银行卡，身份证资料已完善好。') }}</div>
              <div>{{ $t('注销-该客户达到一定条件，要求注销自己账号。') }}</div>
              <div>{{ $t('停权户-涉及会员风控，对会员进行停权，登陆不上平台。') }}</div>
              <div>{{ $t('密码锁定-连续5次输错密码，系统进行锁定。') }}</div>
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
          <!-- <img class="w-20 h-20 object-cover" :src="getImg(scope.row)" alt=""> -->
        </div>
      </template>
      <template #isnormal="scope">
        <div>
          <div>{{ isnormalOptions.find(a => String(a.value) === String(scope.row.isnormal))?.label }}</div>
          <div class="text-4xl">
            <span>{{ $t('上级：') }}</span>
            <span class="color-green">{{ scope.row.parentemployeeaccount ? scope.row.parentemployeeaccount : '无'
              }}</span>
          </div>
        </div>
      </template>
      <template #accumulateddeposit_accumulatedwithdraw="scope">
        <div>{{ scope.row.accumulateddeposit || 0 }}</div>
        <div>{{ scope.row.accumulatedwithdraw || 0 }}</div>
      </template>
      <template #winlose="scope">
        <div :class="+scope.row.winlose < 0 ? 'color-red' : 'color-green'">{{ scope.row.winlose }}</div>
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
            <template v-if="item.tooltip">
              <el-tooltip class="box-item" effect="dark" :content="item.tooltip" placement="top">
                <div class="p-3 cursor-pointer" @click="menuClick(item, row)">
                  <img class="w-20 h-20 object-cover" :src="item.icon" :alt="item.name">
                </div>
              </el-tooltip>
            </template>
            <div v-else class="p-3 cursor-pointer" @click="menuClick(item, row)">
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
import { useRouter } from "vue-router";
import i18n from "@/i18n/index.js";
import tick from "@/assets/images/login/shield-tick.png";
import blackTick from "@/assets/images/login/shield-tick-black.png";
import yellowTick from "@/assets/images/login/shield-tick-yellow.png";
const t = i18n.global.t

const router = useRouter()

const menuList = [
  { id: 1, icon: dollarCircle, tooltip: t('玩家代存'), path: '/report/playerDeposit' },
  { id: 2, icon: coins, tooltip: t('彩金赠送'), path: '/report/bonus' },
  // { id: 3, icon: shieldTick },
  { id: 4, icon: chart, tooltip: t('存提款记录'), path: '/member/depositWithdrawalRecords' },
  { id: 5, icon: note, tooltip: t('游戏记录'), path: '/member/gameRecords' },
  { id: 6, icon: addCircle, tooltip: t('会员调级申请'), path: '/managementCenter/memberLevelChange' }
]

const types = [
  {
    value: 1,
    label: t('会员管理')
  },
  {
    value: 0,
    label: t('需要维护')
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

const page = reactive({
  orderBy: '',
  order: ''
})

const fetchList = (params) => {
  if (type.value === 1) {
    return apiGetVipList({
      ...params,
      ...page,
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

const summaryMethod = ({ columns, ...rest }) => {
  const sums = [];
  console.log(tableData.value, 'restrestrest')
  if (columns.length > 0) {
    columns.forEach((column, index) => {
      let prop = column.property;
      if (['winlose', 'accumulateddeposit_accumulatedwithdraw'].includes(prop)) {
        if (prop === 'winlose') {
          const num = tableData.value?.reduce((prev, current) => current[prop] + prev, 0);
          sums[index] = h('div', { class: num >= 0 ? 'color-green' : 'color-red' }, num);
        }
        if (prop === 'accumulateddeposit_accumulatedwithdraw') {
          const accumulateddeposit = tableData.value?.reduce((prev, current) => (+current['accumulateddeposit'] || 0) + prev, 0);
          const accumulatedwithdraw = tableData.value?.reduce((prev, current) => (+current['accumulatedwithdraw'] || 0) + prev, 0);
          sums[index] = h('div', [  
            h('div', { class: accumulateddeposit >= 0 ? 'color-green' : 'color-red' }, accumulateddeposit),  
            h('div', { class: accumulatedwithdraw >= 0 ? 'color-green' : 'color-red' }, accumulatedwithdraw)  
          ])  
        }
      } else {
        sums[index] = '';
      }
      if (['employeelevelcode'].includes(prop)) {
        sums[index] = '小计'
      }
    });
  }
  return sums;
};

const toggleExpand = (row) => {
  row.otherList = [{}];

  tableRef.value.toggleRowExpansion(row);
}

const sortChange = ({ prop, order }) => {
  // prop: 排序字段  
  // order: 排序方式 ascending/descending  
  page.orderBy = prop
  page.order = order ? order === 'ascending' ? 'asc' : 'desc' : undefined
  getTableData();
}

const expandChange = (row) => {
  row.expandStatus = !row.expandStatus
  console.log(row.expandStatus);
};

const onTypeChange = (value) => {
  type.value = value;
  getTableData({
    maintainReason: value === 0 ? 'REGISTERNODEPOSIT' : undefined
  });
}

const menuClick = (item, data) => {
  if (item.path) {
    router.push({
      path: item.path,
      query: {
        loginaccount: data.loginaccount
      }
    })
  } else {
    ElMessageBox.alert(t('敬请期待'), t('温馨提示'), {
      confirmButtonText: 'OK',
      callback: (action) => {
      },
    })
  }
}

const getImg = (row) => {
  if (+row.isvalid === 1) {
    return +row.isnormal === 1 ? tick : yellowTick
  }
  return blackTick
}

// 搜索
const onSearch = (form, done) => {
  form.maintainReason = form.reasontype
  delete form.reasontype
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  tableSearch.reset(getTableData)
}
</script>
