<template>
  <div class="relative z-10 h-70 bg-white header-wrapper">
    <div class="h-full flex items-center justify-between main-container px-20">
      <div>
        <img class="w-127" src="@/assets/images/logo.png" alt="">
      </div>
      <div class="flex items-center h-full text-14 text-black">
        <div class="flex" v-show="token">
          <div class="flex items-center cursor-pointer mr-20">
            <img class="w-24 mr-8" src="@/assets/images/header/2User.png" alt="">
            <div>123123</div>
          </div>
          <div class="flex items-center cursor-pointer mr-20">
            <img class="w-24 mr-8" src="@/assets/images/header/moneys.png" alt="">
            <div class="flex items-center">
              代理余额
              <div class="ml-16 mr-8 text-16 text-green">$0</div>
              <img class="w-16" src="@/assets/images/header/Swap3.png" alt="">
            </div>
          </div>
          <div class="flex items-center cursor-pointer mr-20">
            <img class="w-24 mr-8" src="@/assets/images/header/dollar-circle.png" alt="">
            <div class="flex items-center">
              彩金余额
              <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
              <div class="ml-16 mr-8 text-16 text-#E1B743">$0</div>
              <img class="w-16" src="@/assets/images/header/Swap3.png" alt="">
            </div>
          </div>
          <div class="flex items-center cursor-pointer mr-20">
            <img class="w-24 mr-8" src="@/assets/images/header/monitor-mobbile.png" alt="">
            <div class="flex items-center">
              会员登录
              <img class="w-16 ml-8" src="@/assets/images/header/Infocircle.png" alt="">
              <div class="ml-16 mr-8 text-16 text-#43ACE1">0</div>
            </div>
          </div>
          <div
            class="flex items-center cursor-pointer"
            @click="logout"
          >
            <img class="w-24 mr-8" src="@/assets/images/header/logout.png" alt="">
            <div>安全退出</div>
          </div>
        </div>
        <div class="flex items-center ml-24">
          <img class="w-24 mr-20" :src="language[locale].icon" alt="">
          <el-dropdown>
            <div class="flex cursor-pointer items-center">
              {{ language[locale].title }}
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in language"
                  :key="item.value"
                  @click="changeLanguage(item)"
                >
                  <div class="text-12 flex-1 text-center">
                    {{ item.title }}
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useUserStore} from "@/store/modules/user.store.js";
import {storeToRefs} from "pinia";
import {useI18n} from "vue-i18n";
import {LANGUAGE} from "@/config/storageKey.js";
import {imageSrc} from "@/utils/index.js";

const {locale} = useI18n()

const {token} = storeToRefs(useUserStore())

const {logout} = useUserStore()

const language = {
  'zh-CN': {
    title: '简体中文',
    value: 'zh-CN',
    icon: imageSrc('nation/zh_CN.png')
  },
  'zh-TW': {
    title: '繁体中文',
    value: 'zh-TW',
    icon: imageSrc('nation/zh_TW.png')
  },
  'en': {
    title: '英语',
    value: 'en',
    icon: imageSrc('nation/en.png')
  },
}

const changeLanguage = (val) => {
  locale.value = val.value

  localStorage.setItem(LANGUAGE, locale.value)
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  box-shadow: 0 1px 14px 4px rgba(0, 0, 0, .05);
}
</style>
