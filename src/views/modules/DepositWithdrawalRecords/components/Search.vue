<template>
  <div class="flex flex-col">
    <div class="mb-30">
      <el-input class="mr-20 !w-240px" v-model="username" :placeholder="$t('会员账号')" />
    </div>
    <TimeSelect
      @search="onSearch"
      @clear="onRefresh"
    />
  </div>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect";
import { useUserStore } from "@/store/modules/user.store.js";
import {useRoute} from "vue-router";

const emit = defineEmits(['search', 'refresh'])

const userStore = useUserStore()
const route = useRoute()

const username = ref(route.query.loginaccount || '')

// 搜索
const onSearch = (val) => {
  // getTableData(val)
  emit('search', {
    ...val,
    loginaccount: username.value,
    parentemployeecode: userStore.userInfo.employeecode,
    employeecode: ''
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
