<template>
  <div class="flex flex-col">
    <div class="mb-30">
      <el-input class="mr-20 !w-240px" v-model="input" :placeholder="$t('会员账号')" />
      <el-select
      class="!w-240px"
        v-model="value"
        :placeholder="$t('请选择代理')"
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
