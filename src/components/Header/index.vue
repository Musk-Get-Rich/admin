<template>
  <div class="relative z-10 h-70 bg-white header-wrapper">
    <div class="h-full flex items-center justify-between main-container px-20">
      <div>
        <img class="w-127" src="@/assets/images/logo.png" alt="">
      </div>
      <div class="flex items-center h-full text-14 text-black">
        <div class="flex items-center cursor-pointer mr-20">
          <img class="w-24 mr-8" src="@/assets/images/header/2User.png" alt="">
          <div>安全退出</div>
        </div>
        <div
          class="flex items-center cursor-pointer"
          @click="logout"
        >
          <img class="w-24 mr-8" src="@/assets/images/header/logout.png" alt="">
          <div>安全退出</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useUserStore} from "@/store/modules/user.store.js";
import { storeToRefs } from "pinia";

const { userInfo } = storeToRefs(useUserStore())

const { logout } = useUserStore()
</script>

<style lang="scss" scoped>
.header-wrapper {
  box-shadow: 0 1px 14px 4px rgba(0, 0, 0, .05);
}
</style>
