<template>
  <div class="flex flex-col">
    <div class="mb-30 w-300">
      <el-input v-model="username" :placeholder="$t('会员账号')" />
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

const username = ref('')

// 搜索
const onSearch = (val) => {
  // getTableData(val)
  emit('search', {
    ...val,
    loginaccount: username.value
  })
}

const onRefresh = () => {
  username.value = ''
  emit('refresh')
  // getTableData({})
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
