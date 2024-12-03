<template>
  <div class="common-layout bg-#f4f5f9">
    <div class="container h-full flex">
      <Sidebar/>
      <div class="flex-1 flex flex-col">
        <div class="flex-1 p-30 box-border main-wrapper overflow-auto" ref="mainRef">
          <router-view v-slot="{ Component }">
            <transition name="slide-fade" mode="out-in">
              <component :is="Component"/>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
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
import {useDeviceStore} from "@/store/modules/device.store.js";
import {storeToRefs} from "pinia";


const router = useRouter()
const route = useRoute()

const {isMobile} = storeToRefs(useDeviceStore())

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
.common-layout {
  height: calc(100vh - 70px);
}

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
