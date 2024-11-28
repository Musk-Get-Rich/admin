<template>
  <div class="flex justify-between w-full">
    <div class="flex items-center">
      <div class="flex items-center h-full cursor-pointer" @click="handleCollapse">
        <el-icon size="26">
          <Fold v-show="!collapse"/>
          <Expand v-show="collapse"/>
        </el-icon>
      </div>
      <Breadcrumb class="ml-20"/>
    </div>
    <div class="flex items-center cursor-pointer" @click="handleLogout">
      <FullScreen class="mr-14"/>
      <img class="w-30 h-30 object-cover rounded-full" src="@/assets/images/author.png" alt="">
      <div class="ml-11 text-18 text-black font-600">{{ username }}</div>
    </div>
  </div>
</template>

<script setup>
import {useUserStore} from "@/store/modules/user.store.js";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import FullScreen from "@/components/FullScreen"
import {useSessionStorage} from "@vueuse/core";
import {USERNAME} from "@/config/storageKey.js";
import TagsView from "@/components/TagsView/index.vue";
import {useTagsStore} from "@/store/modules/tags.store.js";

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const { clearTagList } = useTagsStore()

const username = useSessionStorage(USERNAME, '')

const emit = defineEmits(['onCollapse'])

const {logout} = useUserStore()

const handleLogout = async () => {
  await logout()

  clearTagList()
}

/**
 * 折叠菜单
 */
const handleCollapse = () => {
  emit('onCollapse', !props.collapse)
}
</script>

<style lang="scss" scoped></style>
