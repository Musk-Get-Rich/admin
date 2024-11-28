<template>
  <div class="tags-view-container" v-if="tagList.length > 0">
    <ScrollPane class="tags-view-wrapper" :tagRefs="{}">
      <div
        class="item flex items-center py-5 px-10 border-solid border-1 border-#d8dce5 text-12"
        v-for="item in tagList"
        @click="handleClick(item)"
        :class="{'active': item.path === route.path}"
      >
        <div v-if="item.path === route.path" class="w-6 h-6 bg-white rounded-full mr-5"></div>
        <div class="mr-4">{{ item.name }}</div>
        <el-icon
          :color="item.path === route.path ? '#fff' : '#999'"
          v-if="!item.fixed"
          @click.stop="handleDelete(item)"
        >
          <CircleCloseFilled/>
        </el-icon>
      </div>
    </ScrollPane>
  </div>
</template>

<script setup>
import ScrollPane from "./ScrollPane.vue"
import {useTagsStore} from "@/store/modules/tags.store.js";
import {storeToRefs} from "pinia";
import {useRoute, useRouter} from "vue-router";
import {MENU_ACTIVE_INDEX, MENU_TYPE} from "@/config/storageKey.js";
import {useSessionStorage} from "@vueuse/core";

const router = useRouter()
const route = useRoute()

/**
 * slider菜单索引
 */
const defaultActive = useSessionStorage(MENU_ACTIVE_INDEX, '0')

const {tagList} = storeToRefs(useTagsStore())
const {deleteTag} = useTagsStore()

const handleClick = item => {
  defaultActive.value = item.index

  router.push(item.path)
}

const handleDelete = async (item) => {
  const flag = item.path === route.path

  await deleteTag(item)

  console.log(item.index);

  if (flag) {
    const routeItem = tagList.value[tagList.value.length - 1]

    defaultActive.value = routeItem.index

    await router.push({
      path: routeItem.path
    })
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-right: 12px;

  &.active {
    border-color: #fff;
    background: #409eff;
    color: #fff;
  }
}
</style>
