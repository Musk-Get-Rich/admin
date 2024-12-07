<template>
  <div>
    <el-row class="flex items-center mb-30 text-20">
      <div class="w-8px h-8px rounded-50% bg-#25D55B mr-10"></div>
      <div class="text-#3A3541 font-600">{{ name }}</div>
    </el-row>
  </div>
</template>

<script setup>
defineProps({
  name: { 
    type: String,
    default:''
  }
})

</script>

<style lang="scss" scoped>

</style>