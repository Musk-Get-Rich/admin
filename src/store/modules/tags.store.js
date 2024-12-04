import {defineStore} from 'pinia'
import {ref} from "vue";
import {useStorage} from "@vueuse/core";
import {ROUTER_TAGS_LIST} from "@/config/storageKey.js";

export const useTagsStore = defineStore('tagsStore', () => {
  const tagList = useStorage(ROUTER_TAGS_LIST, [])

  const init = () => {
    const index = tagList.value.findIndex(val => val.path === '/dashboard')

    if (index !== -1) return

    tagList.value.unshift({
      path: '/dashboard',
      name: '控制台',
      fixed: true
    })

  }

  init()

  // 添加标签
  const addTag = (item) => {
    const index = tagList.value.findIndex(val => val.path === item.path)

    if (index !== -1) return

    tagList.value.push(item)
  }

  // 删除标签
  const deleteTag = (item) => {
    return new Promise((resolve) => {
      const index = tagList.value.findIndex(val => val.path === item.path)

      tagList.value.splice(index, 1)

      resolve()
    })
  }

  // 清空
  const clearTagList = () => {
    tagList.value = []

    init()
  }

  return {
    tagList,
    addTag,
    deleteTag,
    clearTagList,
    init
  }


})
