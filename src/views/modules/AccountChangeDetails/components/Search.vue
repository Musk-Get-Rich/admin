<template>
  <div class="flex flex-col">
    <div class="mb-30 w-700 pt-5px">
      <el-input class="!w-240 mr-10" v-model="form.username" :placeholder="$t('请输入用户名')" />
      <el-select
        v-model="form.selectVal"
        :placeholder="$t('请选择')"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="$t(item.label)"
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
import TimeSelect from "@/components/TimeSelect";
import { useUserStore } from "@/store/modules/user.store.js";

const emit = defineEmits(['search', 'refresh'])

const userStore = useUserStore()

const form = ref({
  username: '',
  selectVal: 2
})

const options = [
  {
    value: 2,
    label: '代理取款',
  },
  {
    value: 3,
    label: '代理充值',
  },
  {
    value: 4,
    label: '代存',
  },
  {
    value: 5,
    label: '转账',
  },
]

// 搜索
const onSearch = (val) => {
  // getTableData(val)
  emit('search', {
    ...val,
    loginaccount: form.value.username,
    opreatetype: form.value.selectVal,
    parentemployeecode: '',
    employeecode: userStore.userInfo.employeecode
  })
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
