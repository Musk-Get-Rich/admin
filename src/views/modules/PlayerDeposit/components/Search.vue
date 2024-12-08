<template>
  <div class="flex flex-col">
    <div class="mb-30">
      <el-input v-model="input" style="width: 240px" placeholder="会员账号" />
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
