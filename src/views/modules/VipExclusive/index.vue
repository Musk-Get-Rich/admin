<template>
  <div>
    <el-card>
      <Title :name="$t('VIP专享')" />
      <el-row v-for="i in 3" class="!w-full h-240px border-double border-gray-200 border-1 rounded-3xl shadow-gray-500 py-20 px-20 mb-20">
        <el-col :span="18" class="h-full bg-gray-300"></el-col>
        <el-col :span="6" class="h-full flex flex-col items-center justify-center">
          <span class="font-size-34 font-500">{{ $t('代理彩金') }}</span>
          <span class="my-14 text-gray-500">{{$t('长期活动')}}</span>
          <el-button type="success" round color="#25D55B" class="w-150px !h-40px mt-5 !text-white">{{ $t('查看详情') }}</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";

</script>

<style lang="scss" scoped>

</style>
