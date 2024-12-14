<template>
  <div class="flex flex-col">
    <div class="mb-30">
      <el-input
        class="max-w-280"
        v-model="form.employeepaymentaccount"
        placeholder="会员账号"
      />
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
  employeepaymentaccount: ''
})

// 搜索
const onSearch = (val) => {
  // getTableData(val)
  emit('search', {
    ...val,
    ...form.value,
  })
}

const onRefresh = () => {
  emit('refresh')
  form.value.employeepaymentaccount = ''
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
