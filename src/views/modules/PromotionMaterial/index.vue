<template>
  <div>
    <el-card>
      <Title name="推广素材" />
      <div class="flex pb-20 border-b-solid border-gray-200">
        <Search />
      </div>
      <el-row v-for="i in 3" class="!w-full h-344px border-double border-gray-200 rounded-3xl shadow-gray-500 py-20 px-20 mb-20">
        <el-col :span="12" class="w-full h-full flex items-center justify-center p-10">
          <img v-if="i === 1" class="h-100%" src="@/assets/images/promotion/activity1.png" alt="">
          <img v-if="i === 2" class="h-100%" src="@/assets/images/promotion/activity2.png" alt="">
          <img v-if="i === 3" class="h-100%" src="@/assets/images/promotion/activity3.png" alt="">
        </el-col>
        <el-col :span="12" class="h-full flex flex-col items-center justify-center">
          <div class="w-300px text-left">
            <div class="mb-20">
              <span class="text-#868D88">所属平台：</span>
              <span>马来西亚</span>
            </div>
            <div class="mb-20">
              <span class="text-#868D88">更新日期：</span>
              <span>2024-12-31 00:00:00</span>
            </div>
            <div class="flex mb-20">
              <span class="text-#868D88">图片尺寸：</span>
              <span>1080x566</span>
              <div class="flex ml-10">
                <img class="w-20 h-20 mr-5" src="@/assets/images/promotion/import.png" alt="">
                <span class="text-#25D55B">立即下载</span>
              </div>
            </div>
            <div class="w-124px h-46px bg-#25D55B text-white rounded-50px flex items-center justify-center">生成图片</div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Search from "./components/Search.vue";

</script>

<style lang="scss" scoped>

</style>