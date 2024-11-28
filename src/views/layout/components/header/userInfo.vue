<template>
  <el-dropdown>
    <div class="flex items-center">
      <el-avatar :size="34" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      <span class="ml-2">{{ userName }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="Remove" @click="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user.store";
import {computed} from "vue";
import { useRouter } from "vue-router";
import { useTagsStore } from "@/store/modules/tags.store"

const router = useRouter()

const userStore = useUserStore()

const userName = computed(() => {
  return userStore.userInfo.name
})

const handleLogout = async () => {
  console.log(123);
  const res = await userStore.logout()
}
</script>

<style scoped lang="scss">

</style>
