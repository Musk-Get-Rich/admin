<template>
  <div class="flex flex-col">
    <div class="flex items-center mb-30">
      <el-input class="!w-240" v-model="username" :placeholder="$t('会员账号')" />
      <el-select class="!w-240 ml-12" v-model="selectedOption" :placeholder="$t('注单状态')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="$t(item.label)"
          :value="item.value">
        </el-option>
      </el-select>
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
const selectedOption = ref('')
const options = ref([
  { value: '1', label: '已结算' },
  { value: '2', label: '未结算' },
])

// 搜索
const onSearch = (val) => {
  // getTableData(val)
  emit('search', {
    ...val,
    gamestatus: selectedOption.value,
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
