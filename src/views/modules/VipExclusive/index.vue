<template>
  <div>
    <el-card>
      <Title :name="$t('VIP专享')" />
      <el-row v-for="(item,index) in images" :key="index" class="!w-full border-double border-gray-200 border-1 rounded-3xl shadow-gray-500 py-20 px-20 mb-20">
        <el-col :span="17" class="">
          <img class="w-full" :src="item.url" alt="" />
        </el-col>
        <el-col :offset="1" :span="6" class="h-full flex flex-col items-center justify-center">
          <span class="font-size-34 font-500">{{ $t(item.name) }}</span>
          <span class="my-14 text-gray-500">{{ item.endtime }}</span>
          <el-button @click="toPath(item)" type="success" round color="#25D55B" class="w-150px !h-40px mt-5 !text-white">{{ $t('查看详情') }}</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog v-model="overlayVisible" width="600">
      <img class="mt-10 w-full" :src="imageSrc" alt="展示图片" />
    </el-dialog>
  </div>
</template>

<script setup>
import { apiListActivityData } from "@/service/api/api";
import Title from "@/components/Title/index.vue";
import { useRouter } from "vue-router";

const router = useRouter()

const overlayVisible = ref(false)

const imageSrc = ref('')

const toPath = (item) => {
  imageSrc.value = item.url
  overlayVisible.value = true
  // router.push({
  //   path: '/personalCenter/vipExclusive/detail',
  //   query: {
  //     code: item.ecactivitycode,
  //     name: item.name
  //   } 
  // })
}

const images = ref([
  {
    url: new URL(`../../../assets/images/vip/1.png`, import.meta.url),
    name: '代理奖金狂欢高达299,998元',
    endtime: '2025.12.1-2026.3.31',
  },
  {
    url: new URL(`../../../assets/images/vip/2.png`, import.meta.url),
    name: '新人提成直达55%',
    endtime: '2025.12.1-2026.3.31',
  },
  {
    url: new URL(`../../../assets/images/vip/3.png`, import.meta.url),
    name: '专属豪礼·重磅放送',
    endtime: '2025.12.1-2026.3.31',
  },
  {
    url: new URL(`../../../assets/images/vip/4.png`, import.meta.url),
    name: '首存复存·双礼加倍',
    endtime: '2025.12.1-2026.3.31',
  }
])
onMounted(() => {
  // apiListActivityData().then((res) => {
  //   images.value = res.map(r => ({
  //     url: r.activityimagehfive,
  //     endtime: r.endtime,
  //     name: r.activityname,
  //     ecactivitycode: r.ecactivitycode
  //   }))
  // })
})
</script>

<style lang="scss" scoped>

</style>
