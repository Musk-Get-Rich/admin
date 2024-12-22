<template>
  <div>
    <el-card>
      <Title :name="$t('VIP专享')" />
      <el-row v-for="(item,index) in images" :key="index" class="!w-full h-240px border-double border-gray-200 border-1 rounded-3xl shadow-gray-500 py-20 px-20 mb-20">
        <el-col :span="18" class="h-full">
          <img class="w-full h-full" :src="item.url" alt="" />
        </el-col>
        <el-col :span="6" class="h-full flex flex-col items-center justify-center">
          <span class="font-size-34 font-500">{{ $t(item.name) }}</span>
          <span class="my-14 text-gray-500">{{ item.endtime }}</span>
          <el-button @click="toPath(item)" type="success" round color="#25D55B" class="w-150px !h-40px mt-5 !text-white">{{ $t('查看详情') }}</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { apiListActivityData } from "@/service/api/api";
import Title from "@/components/Title/index.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const toPath = (item) => {
  router.push({
    path: '/personalCenter/vipExclusive/detail',
    query: {
      code: item.ecactivitycode,
      name: item.name
    } 
  })
}

const images = ref([])
onMounted(() => {
  apiListActivityData().then((res) => {
    images.value = res.map(r => ({
      url: r.activityimagehfive,
      endtime: r.endtime,
      name: r.activityname,
      ecactivitycode: r.ecactivitycode
    }))
  })
})
</script>

<style lang="scss" scoped>

</style>
