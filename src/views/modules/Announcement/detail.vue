<template>
  <el-card>
    <div>
      <span class="mr-10 cursor-pointer" @click="goBack">< {{ $t('返回') }}</span>
      <span class="pl-10 border border-l-solid border-grey">{{ $t('公告') }}</span>
    </div>
    <div class="px-120">
      <div class="mt-56 mb-46 flex justify-center text-20px">{{ route.query.title || '' }}</div>
      <div class="text-#868D88">{{ route.query.time || '' }}</div>
      <div class="mt-40 line-height-30">
        {{ route.query.content || '' }}
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { useRouter,useRoute } from "vue-router";

const router = useRouter()

const route = useRoute()

const goBack = () => {
  if (router.getRoutes().length > 0) {
    router.back()
  }
  router.replace('/top/announcement')
}
</script>

<style lang="scss" scoped>

</style>