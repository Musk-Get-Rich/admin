<template>
  <div>
    <el-card>
      <avue-crud ref="tableRef" :table-loading="tableLoading" :data="tableData" :option="option" v-model:page="pageObj"
        @refresh-change="getTableData" @search-change="onSearch" @search-reset="onSearchReset" @size-change="sizeChange"
        @current-change="currentChange">
        <template #header>
          <el-row justify="space-between">
            <div>下级管理</div>
            <el-button type="primary" icon="el-icon-plus" @click="handleAdd">
              {{ createAgentBtnText }}
            </el-button>
          </el-row>
          <div class="border border-solid border-gray-300 py-8xl rounded-3xl my-5xl">
            <div class="grid grid-cols-4">
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl color-green">{{ agentInfo.agentlinecode }}</div>
                <div class="text-6xl text-gray-500 mt-5">主线账户</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl">{{ agentInfo.loginaccount }}</div>
                <div class="text-6xl text-gray-500 mt-5">团队名称</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl">{{ agentInfo.countAgent || 0 }}</div>
                <div class="text-6xl text-gray-500 mt-5">下线代理</div>
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="font-bold text-8xl">{{ agentInfo.countMember || 0 }}</div>
                <div class="text-6xl text-gray-500 mt-5">下线会员</div>
              </div>
            </div>
          </div>
        </template>
        <template #title="{ row }">
          <div class="overflow-auto h-150" v-html="row.title">

          </div>
        </template>
        <template #content="{ row }">
          <div class="overflow-auto h-150" v-html="row.title">

          </div>
        </template>
        <template #menu="{ row }">
          <el-button icon="el-icon-edit" @click="handleEdit(row)">
            编辑
          </el-button>
          <el-button type="primary" icon="el-icon-delete" @click="handleDelete(row.id)">
            删除
          </el-button>
        </template>
      </avue-crud>
    </el-card>
  </div>
</template>

<script setup>
import option from "./option.js"
import { useTableList } from "@/hook/useTableList.js";
import { useTableSearch } from "@/hook/useTableSearch.js";
import { apiGetAgentList, apiGetAgentInfo } from "@/service/api/api.js";
import { useAgent } from "@/views/modules/AgentManagement/hook/useAgent.js";
import { computed, ref } from "vue";

const agentInfo = ref({})

// 当前账号代理级别
const agentLevel = computed(() => Number(agentInfo.value?.agentlevel || 3))

const createAgentBtnText = computed(() => {
  const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const text = chars[agentLevel.value + 1]
  return `创建${text}级代理`
})

const info = ref({})

// 编辑
const handleEdit = (data) => {
  useAgent().changeDatail({
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
  useAgent().changeDatail({
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

const getAgentInfo = async () =>{
  const res = await apiGetAgentInfo()
  agentInfo.value = res
}

const fetchList = (...rest) => {
  getAgentInfo()
  return apiGetAgentList(...rest)
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
