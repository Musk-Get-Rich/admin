<template>
  <div>
    <div v-if="loading" class="pt-36vh">
      <div class="flex flex-col justify-center items-center text-[--main-sub-color]">
        <el-icon class="is-loading" color="#b2150d" size="36">
          <Loading/>
        </el-icon>
        <div class="mt-6 translate-x-5">loading...</div>
      </div>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>
