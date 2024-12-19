<template>
  <div class="flex flex-col">
    <div class="flex-1 shrink-0 flex items-center">
      <el-select
        class="!w-240px mr-10"
        v-model="value"
        placeholder="全部"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" icon="search" @click="onSearch">{{ $t('查询') }}</el-button>
      <el-button icon="delete" @click="onRefresh">{{ $t('重置') }}</el-button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['search', 'refresh'])

const form = ref({
  username: ''
})

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  }
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
