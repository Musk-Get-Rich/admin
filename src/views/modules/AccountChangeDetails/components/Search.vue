<template>
  <div class="flex flex-col">
    <div class="mb-30 w-700 pt-5px">
      <el-input class="!w-240 mr-10" v-model="form.username" placeholder="请输入用户名" />
      <el-select
        v-model="form.value"
        placeholder="请选择"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <TimeSelect
      @search="onSearch"
      @clear="onRefresh"
    />
  </div>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect"

const emit = defineEmits(['search', 'refresh'])

const form = ref({
  username: '',
  value: ''
})

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

// 搜索
const onSearch = (val) => {
  // getTableData(val)
  emit('search', val)
}

const onRefresh = () => {
  emit('refresh')
  // getTableData({})
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
