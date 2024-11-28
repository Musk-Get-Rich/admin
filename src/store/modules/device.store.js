import {defineStore} from 'pinia'
import {ref} from "vue";

export const useDeviceStore = defineStore('deviceStore', () => {
  const isMobile = ref(false)

  const changeDevice = (val) => {
    isMobile.value = val
  }

  return {
    isMobile,
    changeDevice
  }


})
