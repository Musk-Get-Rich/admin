<template>
    <div>
        <el-card>
            <avue-crud ref="tableRef" :table-loading="tableLoading" :data="tableData" :option="option"
                v-model:page="pageObj" @refresh-change="getTableData" @search-change="onSearch"
                @search-reset="onSearchReset" @size-change="sizeChange" @current-change="currentChange" :menu="false">
                <template #articleTypeId-search="{ row }">
                    <el-select v-model="articleTypeId" clearable placeholder="搜索类型">
                        <el-option v-for="item in materialTypeList" :key="item.value" :label="item.label"
                            :value="item.value">
                            {{ item.label }}
                        </el-option>
                    </el-select>
                </template>
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
                                <div class="font-bold text-8xl color-green-400">AA1234</div>
                                <div class="text-6xl text-gray-500 mt-5">主线账户</div>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="font-bold text-8xl">内部线（丧彪）</div>
                                <div class="text-6xl text-gray-500 mt-5">团队名称</div>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="font-bold text-8xl">66</div>
                                <div class="text-6xl text-gray-500 mt-5">下线代理</div>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="font-bold text-8xl">1999</div>
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

            <AgentAddOrEdit ref="agentAddOrEditRef" :type="type" :info="info" @refresh="onRefresh"
                @close="handleClose" />
        </el-card>
    </div>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {apiGetMaterialList, apiGetMaterialTypeAll} from "@/service/api/api.js";
import { useAgent } from "@/views/modules/AgentManagement/hook/useAgent.js";
import AgentAddOrEdit from "@/views/modules/AgentManagement/components/AgentAddOrEdit.vue";
import CommonFilter from '@/views/modules/AgentManagement/components/CommonFilter.vue';
import { computed } from "vue";

const type = ref('')
const agentAddOrEditRef = ref(null)

const articleTypeId = ref('')

const materialTypeList = ref([])
apiGetMaterialTypeAll().then(res => {
  console.log(res.data, 'apiGetMaterialTypeAll');
  materialTypeList.value = res.data.map(item => ({
    label: item.title,
    value: item.id
  }))
})

// 当前账号代理级别
const agentLevel = computed(() => 2)

const createAgentBtnText = computed(() => {
    const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    const text = chars[agentLevel.value + 1]
    return `创建${text}级代理`
})

// 新增
const handleAdd = () => {
  type.value = 'add'

  agentAddOrEditRef.value.show()
  // useAgent().changeMaterial({
  //   type: 'add',
  //   materialTypeList: materialTypeList.value,
  //   done() {
  //     getTableData()
  //   }
  // })
}

const info = ref({})

// 编辑
const handleEdit = (data) => {
  type.value = 'edit'

  info.value = data

  agentAddOrEditRef.value.show()

  // useAgent().changeMaterial({
  //   type: 'edit',
  //   materialTypeList: materialTypeList.value,
  //   data,
  //   done() {
  //     getTableData()
  //   }
  // })
}

// 删除
const handleDelete = (id) => {
  useAgent().deleteMaterial({
    id,
    done() {
      getTableData()
    }
  })
}

const onRefresh = () => {
  getTableData()
}

const handleClose = () => {
  type.value = ''
  info.value = {}
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
} = useTableList(apiGetMaterialList, {

})

// 搜索
const onSearch = (form, done) => {
  if (articleTypeId.value) form['articleTypeId'] = articleTypeId.value
  tableSearch.search(form, getTableData, done)
}

const onSearchReset = () => {
  articleTypeId.value = ''
  tableSearch.reset(getTableData)
}
</script>
