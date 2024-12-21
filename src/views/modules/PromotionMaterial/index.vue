<template>
  <div>
    <el-card>
      <Title :name="$t('推广素材')" />
      <div class="flex pb-20 mb-20 border-b-1 border-b-solid border-gray-200">
        <Search />
      </div>
      <template v-for="(a, i) in images" :key="i">
        <Item :data="a" :inviteUrl="list[0]" />
      </template>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Search from "./components/Search.vue";
import { apiListActivityData, apiPromotionWebsite } from "@/service/api/api";
import Item from './components/Item.vue'

const images = ref([])
const list = ref([])
onMounted(() => {
  apiListActivityData().then((res) => {
    images.value = res.map(r => ({
      url: r.activityimagehfive,
      time: r.starttime
    }))
  })
  apiPromotionWebsite({
    parentemployeecode: null
  }).then(res => {
    list.value = res?.map(a => a.domainlink).filter(a => !!a)
  })
})
</script>
