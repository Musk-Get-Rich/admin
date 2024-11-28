<template>
  <el-card>
    <avue-crud
      ref="tableRef"
      :table-loading="tableLoading"
      :data="tableData"
      :option="option"
      v-model:page="pageObj"
      @refresh-change="getTableData"
      @search-change="onSearch"
      @search-reset="onSearchReset"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
      <template #articleTypeId-search="{ row }">
        <el-select v-model="articleTypeId" clearable placeholder="搜索类型">
          <el-option
            v-for="item in materialTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            {{ item.label }}
          </el-option>
        </el-select>
      </template>
      <template #menu-left>
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="handleAdd"
        >
          新增资料
        </el-button>
      </template>
      <template #title="{ row }">
        <div class="overflow-auto h-150"  v-html="row.title">

        </div>
      </template>
      <template #content="{ row }">
        <div class="overflow-auto h-150"  v-html="row.title">

        </div>
      </template>
      <template #menu="{ row }">
        <el-button
          icon="el-icon-edit"
          @click="handleEdit(row)"
        >
          编辑
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-delete"
          @click="handleDelete(row.id)"
        >
          删除
        </el-button>
      </template>
    </avue-crud>

    <MaterialAddOrEdit
      ref="materialAddOrEditRef"
      :type="type"
      :info="info"
      @refresh="onRefresh"
      @close="handleClose"
    />
  </el-card>
</template>

<script setup>
import option from "./option.js"
import {useTableList} from "@/hook/useTableList.js";
import {useTableSearch} from "@/hook/useTableSearch.js";
import {apiGetMaterialList, apiGetMaterialTypeAll} from "@/service/api/api.js";
import { useMaterial } from "@/views/modules/MaterialManagement/hook/useMaterial.js";
import MaterialAddOrEdit from "@/views/modules/MaterialManagement/components/MaterialAddOrEdit.vue";

const type = ref('')
const materialAddOrEditRef = ref(null)

const articleTypeId = ref('')

const materialTypeList = ref([])
apiGetMaterialTypeAll().then(res => {
  console.log(res.data, 'apiGetMaterialTypeAll');
  materialTypeList.value = res.data.map(item => ({
    label: item.title,
    value: item.id
  }))
})

// 新增
const handleAdd = () => {
  type.value = 'add'

  materialAddOrEditRef.value.show()
  // useMaterial().changeMaterial({
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

  materialAddOrEditRef.value.show()

  // useMaterial().changeMaterial({
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
  useMaterial().deleteMaterial({
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
