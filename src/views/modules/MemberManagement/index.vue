<template>
  <el-card>
    <avue-crud ref="tableRef" :key="JSON.stringify(customOptions)" :table-loading="tableLoading" :data="tableData" :option="customOptions" v-model:page="pageObj"
               @refresh-change="getTableData" @search-change="onSearch" @search-reset="onSearchReset" @size-change="sizeChange"
               @current-change="currentChange"
    >
      <template #search>
        <el-row justify="space-between">
          <div>会员管理</div>
        </el-row>
        <div class="border border-b-solid border-gray-300 py-6xl my-6xl">
          <el-button v-for="t in types" :key="t.value" :type="t.value === type ? 'primary' : ''" @click="type = t.value">
            {{ t.label }}
          </el-button>
        </div>
      </template>
      <template #name-header="{ column }">
        <div class="flex justify-center items-center">
          <span>{{ (column || {}).label }}</span>
          <el-popover
              placement="top-start"
              :width="200"
              trigger="hover"
          >
            <template #reference>
              <span class="color-coolgray flex justify-center items-center">
                <el-icon color="coolGray"><InfoFilled /></el-icon>
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
          <el-popover
              placement="top-start"
              :width="200"
              trigger="hover"
          >
            <template #reference>
              <span class="color-coolgray flex justify-center items-center">
                <el-icon color="coolGray"><InfoFilled /></el-icon>
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
</template>

<script setup>
import option from "./option.js"
import { useTableList } from "@/hook/useTableList.js";
import { useTableSearch } from "@/hook/useTableSearch.js";
import { apiGetAgentList } from "@/service/api/api.js";
import { useAgent } from "@/views/modules/AgentManagement/hook/useAgent.js";
import { computed } from "vue";
import { InfoFilled } from '@element-plus/icons-vue';

const types = [
  {
    value: '0',
    label: '会员管理'
  },
  {
    value: '1',
    label: '需要维护'
  }
]

const type = ref('0')

const customOptions = computed(() => {
  return {
    ...option,
    column: option.column.filter(c => !['phoneOrEmail', 'reason'].includes(c.prop) || type.value === '1')
  }
})

const articleTypeId = ref('')

// 当前账号代理级别
const agentLevel = computed(() => 2)

const createAgentBtnText = computed(() => {
  const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const text = chars[agentLevel.value + 1]
  return `创建${text}级代理`
})

// 新增
const handleEdit = () => {
  useAgent().changeDatail({
    type: 'edit',
    done() {
      getTableData()
    }
  })
}

// 新增
const handleAdd = () => {
  useAgent().changeDatail({
    type: 'add',
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

const {
  tableRef,
  tableLoading,
  pageObj,
  tableData,
  getTableData,
  sizeChange,
  currentChange
} = useTableList(apiGetAgentList, {

})

// 搜索
const onSearch = (form, done) => {
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  articleTypeId.value = ''
  tableSearch.reset(getTableData)
}
</script>
