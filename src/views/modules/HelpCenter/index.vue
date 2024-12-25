<template>
  <div className="common-layout bg-#f4f5f9">
    <div className="max-w-1430 mx-auto h-full main-wrapper overflow-auto flex">
      <div class="sidebar-wrapper w-218 bg-white h-full overflow-auto py-30 box-border">
        <div v-for="h in helpers" :key="h.code" class="relative pl-12 mb-20 text-#3A3541 text-6xl"
          @click="activeCode = h.code">
          <div
            class="transition-400ms w-6 h-full absolute left-0 top-0 bg-green rounded-tr-20 rounded-br-20 opacity-0"
            :class="{ 'opacity-100': activeCode === h.code }">
          </div>
          <div class="transition-400ms flex items-center h-40 w-195 rounded-8 px-5 box-border cursor-pointer"
            :class="{ 'bg-#e9fbef': activeCode === h.code }">
            {{ h.title }}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="p-20 box-border h-full" ref="mainRef">
          <Announcement />
          <div class="w-full h-max bg-white rounded-8 pb-4">
            <div class="flex pl-15 pt-18 text-7xl">
              <div @click="goBack" class="flex items-center mr-10 cursor-pointer">
                <el-icon>
                  <ArrowLeft />
                </el-icon>
                <div>返回</div>
              </div>
              <span class="pl-10 border border-l-solid border-gray-300">帮助中心</span>
            </div>
            <CurrentComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Announcement from "@/components/Announcement"
import Helper1 from "@/views/modules/HelpCenter/components/helper1.vue";
import Helper2 from "@/views/modules/HelpCenter/components/helper2.vue";
import Helper3 from "@/views/modules/HelpCenter/components/helper3.vue";
import Helper4 from "@/views/modules/HelpCenter/components/helper4.vue";
import Helper5 from "@/views/modules/HelpCenter/components/helper5.vue";
import Helper6 from "@/views/modules/HelpCenter/components/helper6.vue";
import Helper7 from "@/views/modules/HelpCenter/components/helper7.vue";
import Helper8 from "@/views/modules/HelpCenter/components/helper8.vue";
import { useRouter } from "vue-router";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

const router = useRouter()
const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/managementCenter/memberLevelChange')
}

const activeCode = ref(1)

const helpers = [
  {
    "code": 1,
    "titleKey": "helper1Title",
    "component": Helper1
  },
  {
    "code": 2,
    "titleKey": "helper2Title",
    "component": Helper2
  },
  {
    "code": 3,
    "titleKey": "helper3Title",
    "component": Helper3
  },
  {
    "code": 4,
    "titleKey": "helper4Title",
    "component": Helper4
  },
  {
    "code": 5,
    "titleKey": "helper5Title",
    "component": Helper5
  },
  {
    "code": 6,
    "titleKey": "helper6Title",
    "component": Helper6
  },
  {
    "code": 7,
    "titleKey": "helper7Title",
    "component": Helper7
  },
  {
    "code": 8,
    "titleKey": "helper8Title",
    "component": Helper8
  }
].map(a => ({
  ...a,
  title: t(a.titleKey)
}))

const CurrentComponent = computed(() => {
  return helpers.find(h => h.code === activeCode.value)?.component
})

</script>

<style lang="scss" scoped>
.common-layout {
  height: calc(100vh - 70px);
}

.main-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
