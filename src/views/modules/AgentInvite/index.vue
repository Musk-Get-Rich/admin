<template>
  <div>
    <el-card>
      <avue-crud ref="tableRef" :table-loading="tableLoading" :data="tableData" :option="option" v-model:page="pageObj"
        @refresh-change="getTableData" @search-change="onSearch" @search-reset="onSearchReset" @size-change="sizeChange"
        @current-change="currentChange">
        <template #search>
          <el-row justify="space-between">
              <Title :name="$t('下级管理')" />
          </el-row>
          <div class="border border-solid border-gray-300 py-8xl rounded-3xl my-5xl">
            <div class="grid grid-cols-4">
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl color-green">{{ agentInfo.agentlinecode }}</div>
                <div class="text-6xl text-gray-500 mt-5">{{ $t('主线账户') }}</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl">{{ agentInfo.loginaccount }}</div>
                <div class="text-6xl text-gray-500 mt-5">{{ $t('团队名称') }}</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl">{{ agentInfo.countAgent || 0 }}</div>
                <div class="text-6xl text-gray-500 mt-5">{{ $t('推广人数') }}</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl color-green">19/{{ agentInfo.countMember || 0 }}</div>
                <div class="text-6xl text-gray-500 mt-5">{{ $t('裂变人数') }}</div>
              </div>
            </div>
          </div>
        </template>
        <template #menu-left>
          <el-button v-for="t in types" :key="t.value" :type="t.value === type ? 'primary' : ''" @click="clickType(t.value)">
            {{ t.label }}
          </el-button>
        </template>
        <template #menu-right>
          <el-button type="primary" icon="el-icon-plus" @click="handleAdd">
            {{ $t('创建内部推广号') }}
          </el-button>
        </template>
        <template #playcount="{ row }">
          <!-- <div><span class="color-green">0</span> / <span class="color-green">0</span></div> -->
        </template>
        <template #employeestatus="{ row }">
          <!-- <span class="color-green">已开通</span> -->
        </template>
        <!-- <template #menu="{ row }">
          <el-button text type="warning" @click="handleChangePwd(row)">
            {{ $t('修改密码') }}
          </el-button>
          <el-button text type="primary" @click="handleQueryTeamResult(row.id)">
            {{ $t('团队业绩查询') }}
          </el-button>
        </template> -->
      </avue-crud>
    </el-card>
  </div>
</template>

<script setup>
import option from "./option.js"
import { useTableList } from "@/hook/useTableList.js";
import { useTableSearch } from "@/hook/useTableSearch.js";
import { apiGetAgentInfo, apiGetAgentInviteList } from "@/service/api/api.js";
import { useAgent } from "@/views/modules/AgentInvite/hook/useAgent.js";
import { ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import Title from "@/components/Title/index.vue";
import { useUserStore } from "@/store/modules/user.store.js";
import {useRouter} from "vue-router";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

const agentInfo = ref({})
const router = useRouter()

const userStore = useUserStore()

const type = ref('')

const types = [
  {
    value: '1',
    label: t('已开通推广员')
  },
  {
    value: '2',
    label: t('备选推广员')
  },
  {
    value: '',
    label: t('全部')
  }
]

// 修改密码
const handleChangePwd = () => {
  // useAgent().changeDatail({
  //   type: 'edit',
  //   done() {
  //     getTableData()
  //   }
  // })
  ElMessageBox.alert(t('敬请期待'), t('温馨提示'), {
    confirmButtonText: 'OK',
    callback: (action) => {
    },
  })
}

// 新增
const handleAdd = () => {
  ElMessageBox.alert(t('敬请期待'), t('温馨提示'), {
    confirmButtonText: 'OK',
    callback: (action) => {
    },
  })
  // useAgent().changeDatail({
  //   type: 'add',
  //   done() {
  //     getTableData()
  //   }
  // })
}

// 删除
const handleQueryTeamResult = (id) => {
  router.push({
    path: '/report/commissionReport'
  })
}

const tableSearch = useTableSearch()


const getAgentInfo = async () =>{
  agentInfo.value = await apiGetAgentInfo()
}
const fetchList = (params) => {
  getAgentInfo()
  params.type = type.value
  return apiGetAgentInviteList({
    ...params,
    employeecode: undefined,
    parentemployeecode: userStore.userInfo.employeecode
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
} = useTableList(fetchList, {

}, 'record')

const clickType = (value) => {
  type.value = value
  getTableData()
}

// 搜索
const onSearch = (form, done) => {
  if (type.value) form['type'] = type.value
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  type.value = ''
  tableSearch.reset(getTableData)
}
</script>
