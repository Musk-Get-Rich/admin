import { defineStore } from 'pinia'
import { ref } from "vue";

export const useCommonStore = defineStore('commonStore', () => {
  const site = ref('')
  const coin = ref('all')

  const changeSite = (val) => {
    site.value = val
  }

  const changeCoin = (val) => {
    coin.value = val
  }

  return {
    site,
    changeSite,
    coin,
    changeCoin
  }


})
