<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWidth" class="layout-aside">
        <div class="flex flex-col h-screen overflow-hidden">
          <div
            class="py-20 border-b-solid border-b-1 border-b-#181f23 text-20 font-600 text-white text-center"
            v-if="!collapse"
          >
            Six Admin
          </div>
          <div class="flex items-center px-14 py-24">
            <img class="w-45 rounded-full" src="@/assets/images/author.png" alt="">
            <div class="ml-12 text-14 text-white">
              <div>{{ username }}</div>
              <div class="flex items-center mt-6">
                <div
                  class="w-13 h-13 rounded-full mr-5"
                  :class="[
                    isOnline ? 'bg-[#18bc9c]' : 'bg-red'
                  ]"
                />
                <div>
                  {{ isOnline ? '在线' : '离线' }}
                </div>
              </div>
            </div>
          </div>
          <Sidebar
            ref="SidebarRef"
            :collapse="collapse"
            :active="active"
          />
        </div>
      </el-aside>
      <el-container class="!flex-col">
        <div class="flex-shrink-0 layout-header bg-[#fff]">
          <LayoutHeader
            class="px-16 box-border py-14 border-b-solid border-b-1 border-b-#eee"
            :collapse="collapse"
            @onCollapse="val => collapse = val"
          />
<!--          <TagsView class="py-10 px-4"/>-->
        </div>
        <div class="layout-main flex-1 flex flex-col">
          <div class="w-full flex-1 p-12 bg-[#ecf0f5] box-border main-wrapper overflow-auto" ref="mainRef">
            <router-view v-slot="{ Component }">
              <transition name="slide-fade" mode="out-in">
                <component :is="Component"/>
              </transition>
            </router-view>
          </div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar/index.vue'
import LayoutHeader from './components/header/index.vue'
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
import {ArrowRight} from '@element-plus/icons-vue'
import {useSessionStorage} from "@vueuse/core";
import {MENU_COLLAPSE, MENU_SIDEBAR_INDEX, NAV_TITLE, USERNAME} from "@/config/storageKey.js";
import {dashBoard} from "@/config/routes.js";
import {eventEmitter} from "@/utils/eventEmitter/index.js";
import Breadcrumb from "@/components/Breadcrumb"
import {useOnline} from "@/hook/useOnline.js";
import TagsView from "@/components/TagsView"
import {useDeviceStore} from "@/store/modules/device.store.js";
import { storeToRefs } from "pinia";

const router = useRouter()
const route = useRoute()

const { isMobile } = storeToRefs(useDeviceStore())

const {isOnline} = useOnline()

const username = useSessionStorage(USERNAME, '')

const mainRef = ref(null)

const height = ref(1080 - 60 - 56)

onMounted(() => {
  height.value = mainRef.value.getBoundingClientRect().height
})

const SidebarRef = ref(null)

/**
 * 折叠菜单
 */
const collapse = useSessionStorage(MENU_COLLAPSE, isMobile.value)

const asideWidth = computed(() => {
  return collapse.value ? '63px' : '230px'
})

const active = useSessionStorage(MENU_SIDEBAR_INDEX, 0)
// 菜单切换
watch(() => active.value, () => {
  router.push(dashBoard[active.value].path)
})

const goHome = () => {
  // SidebarRef.value.setMenuActive && SidebarRef.value.setMenuActive('')

  // router.push('/')
}

onMounted(() => {
  eventEmitter.emit('close_loading')
})
</script>

<style lang="scss" scoped>
:deep(.el-card__body) {
  height: 100%;
}

.layout-aside {
  position: relative;
  z-index: 10;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, .12);
  transition: ease .3s;
  transform: translate3d(0, 0, 0);
  background: var(--main-color);
}

.layout-header {
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
}

.layout-main {
  height: calc(100vh - 106px);
  overflow: hidden;
  background: #fff;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transform: translateX(0px) translate3d(0, 0, 0);
  opacity: 1;
  transition: all 0.4s ease;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px) translate3d(0, 0, 0);
  opacity: 0;
}

.main-wrapper::-webkit-scrollbar {
  display: none;
}

.title-item {
  white-space: nowrap;
}
</style>
