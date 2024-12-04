<template>
  <div class="common-layout bg-#f4f5f9">
    <div class="main-container h-full flex">
      <Sidebar class="shrink-0"/>
      <div class="flex-1">
        <div class="py-20 pl-20 box-border main-wrapper overflow-auto" ref="mainRef">
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
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
import {useDeviceStore} from "@/store/modules/device.store.js";
import {storeToRefs} from "pinia";


const router = useRouter()

const {isMobile} = storeToRefs(useDeviceStore())

const mainRef = ref(null)

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

@media screen and (max-width: 1410px) {
  .main-wrapper {
    @apply pr-20;
  }
}

.title-item {
  white-space: nowrap;
}
</style>
