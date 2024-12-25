<template>
  <div>
    <el-card>
      <avue-crud ref="tableRef" :table-loading="tableLoading" :data="tableData" :option="option" v-model:page="pageObj"
        @refresh-change="getTableData" @search-change="onSearch" @search-reset="onSearchReset" @size-change="sizeChange"
        @current-change="currentChange">
        <template #header>
          <el-row justify="space-between">
            <Title :name="$t('下级管理')" />
            <el-button v-if="agentLevel < 3" type="primary" icon="el-icon-plus" @click="handleAdd">
              {{ createAgentBtnText }}
            </el-button>
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
                <div class="text-6xl text-gray-500 mt-5">{{ $t('下线代理') }}</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl">{{ agentInfo.countMember || 0 }}</div>
                <div class="text-6xl text-gray-500 mt-5">{{ $t('下线会员') }}</div>
              </div>
            </div>
          </div>
        </template>
        <template #loginaccount="{ row }">
          <div class="color-green">{{ row.loginaccount }}</div>
        </template>
        <template #menu="{ row }">
          <el-icon class="cursor-pointer" @click="handleEdit(row)"><EditPen /></el-icon>
        </template>
      </avue-crud>
    </el-card>
  </div>
</template>

<script setup>
import option from "./option.js"
import { useTableList } from "@/hook/useTableList.js";
import { useTableSearch } from "@/hook/useTableSearch.js";
import { apiGetAgentInfo, apiGetAgentList } from "@/service/api/api.js";
import { useAgent } from "@/views/modules/AgentManagement/hook/useAgent.js";
import { computed, ref } from "vue";
import Title from "@/components/Title/index.vue";
import { useUserStore } from "@/store/modules/user.store.js";
import i18n from "@/i18n/index.js";
import { EditPen } from "@element-plus/icons-vue";

const agentInfo = ref({})
const t = i18n.global.t
const userStore = useUserStore()

// 当前账号代理级别  
const agentLevel = computed(() => Number(agentInfo.value?.agentlevel || 3))
const createAgentBtnText = computed(() => {
  const map = {
    2: t('创建二级代理'),
    3: t('创建三级代理'),
    4: t('创建四级代理'),
  }
  return map[agentLevel.value + 1] || map[3]
})

// 编辑  
const handleEdit = (data) => {
  useAgent().changeDetail({
    type: 'edit',
    params: {
      agentLevel: agentLevel.value,
      title: createAgentBtnText
    },
    data,
    done() {
      getTableData()
    }
  })
}

// 新增  
const handleAdd = () => {
  useAgent().changeDetail({
    type: 'add',
    params: {
      agentLevel: agentLevel.value,
      title: createAgentBtnText
    },
    done() {
      getTableData()
    }
  })
}

// 删除  
const handleDelete = (id) => {
  useAgent().onDelete({
    id,
    done() {
      getTableData()
    }
  })
}

const tableSearch = useTableSearch()

const getAgentInfo = async () => {
  agentInfo.value = await apiGetAgentInfo()
  console.log('agentInfores', agentInfo.value);
}

const fetchList = (params) => {
  getAgentInfo()
  return apiGetAgentList({
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

})

// 搜索  
const onSearch = (form, done) => {
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  tableSearch.reset(getTableData)
}  
</script>