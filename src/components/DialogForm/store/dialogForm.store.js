import {defineStore} from 'pinia'

export const useDialogFormStore = defineStore('dialogFormStore', () => {
  const isShow = ref(false)

  const showDialog = (params) => {
    isShow.value = true

    dialogFormParams.value = params
  }

  const closeDialog = () => {
    isShow.value = false
  }

  // 表单数据
  const dialogFormParams = ref({})

  // 弹窗消失清空数据
  watch(() => isShow.value, (val) => {
    if (!val) {
      dialogFormParams.value = {}
    }
  })

  return {
    showDialog,
    closeDialog,
    isShow,
    dialogFormParams,
  }
}, {
  // persist: true
})
