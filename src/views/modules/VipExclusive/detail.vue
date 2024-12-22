<template>
  <el-card>
    <div>
      <span class="mr-10 cursor-pointer" @click="goBack">< {{ $t('返回') }}</span>
      <span class="pl-10 border border-l-solid border-grey">{{ route.query.name }}</span>
    </div>
  </el-card>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { apiListActivityInfo } from "@/service/api/api";
import { useRouter,useRoute} from "vue-router";

const router = useRouter()

const route = useRoute()

const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/top/announcement')
}

onMounted(() => {
  apiListActivityInfo({
    ecactivitycode: route.query.code
  }).then((res) => {
    console.log(res);
  })
})
</script>

<style lang="scss" scoped>

</style>