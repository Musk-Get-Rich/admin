<template>
  <div class="sidebar-wrapper w-218 bg-white h-full overflow-auto py-30 box-border">
    <div
      v-for="_ in routeList"
    >
      <template v-if="_.type === 'divider' && (_?.auth ? _.auth.includes(userStore.userInfo.agentlevel / 1) : true)">
        <div class="mb-10 h-1 w-185 mx-auto bg-#F4F5F9"></div>
      </template>
      <template v-else>
        <div v-if="_.meta && (_.meta?.auth ? _.meta.auth.includes(userStore.userInfo.agentlevel / 1) : true)" class="pl-21 mb-10 text-#868D88 text-12">{{ _.meta.title }}</div>
        <template v-for="item in _.children">
          <div
            class="relative mb-10 cursor-pointer"
            @click="handleClick(`${_.path}/${item.path}`)"
            v-if="item.meta?.auth ? item.meta.auth.includes(userStore.userInfo.agentlevel / 1) : true"
          >
            <div
              class="transition-400ms w-6 h-full absolute left-0 top-0 bg-green rounded-tr-20 rounded-br-20"
              :class="[
            route.path === `${_.path}/${item.path}` ? 'opacity-100' : 'opacity-0'
          ]"
            />
            <div
              class="transition-400ms flex items-center h-40 w-185 ml-21 rounded-8 px-5 box-border"
              :class="[
              route.path === `${_.path}/${item.path}` ? 'bg-#e9fbef' : ''
            ]"
            >
              <img
                v-show="route.path === `${_.path}/${item.path}`"
                class="w-20"
                :src="imageSrc(item.meta.activeIcon)"
                alt=""
              >
              <img
                v-show="!(route.path === `${_.path}/${item.path}`)"
                class="w-20"
                :src="imageSrc(item.meta.inactiveIcon)"
                alt=""
              >
              <div
                class="transition-400ms text-14 ml-8"
                :class="[
                route.path === `${_.path}/${item.path}` ? 'text-green' : 'text-black'
              ]"
              >{{ item.meta.name }}
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";
import {routes} from "@/router/routes.js";
import {imageSrc} from "@/utils/index.js";
import {apiGetAgentInfo} from "@/service/api/api.js";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/store/modules/user.store.js";

const userStore = useUserStore()

const router = useRouter()
const route = useRoute()
const agentInfo = ref({})

const routeList = computed(() => {
  return [...routes].map(a => {
    const r = {...a}
    if (r.path?.indexOf('managementCenter') > -1) {
      r.children = r.children?.filter(rr => {
        if (rr.name === 'agent') {
          return Number(agentInfo.value.agentlevel) < 3
        }
        if (rr.name === 'invite') {
          return Number(agentInfo.value.agentlevel) >= 3
        }
        return true
      })
    }
    return r
  })
})
const getAgentInfo = async () => {
  agentInfo.value = await apiGetAgentInfo()
}

onMounted(() => {
  getAgentInfo()
})

const handleClick = (path) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
