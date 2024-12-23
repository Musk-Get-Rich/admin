<template>
  <div class="item !w-full h-46px bg-white rounded-8px flex items-center justify-between pl-15 pr-100">
    <div class="flex items-center">
      <div class="w-8px h-8px bg-red rounded-50%"></div>
      <span class="ml-10 text-14px">{{ item.title }}</span>
    </div>
    <span class="text-#868D88">{{ item.createtime }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .item{
    box-shadow: 0px 0px 4px 0px #00000026;
  }
</style>