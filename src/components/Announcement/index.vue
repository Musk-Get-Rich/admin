<template>
  <div class="theme-shadow rounded-8 px-30 py-16 bg-white mb-20">
    <div class="flex">
      <img class="w-20 shrink-0" src="@/assets/images/volume-high.png" alt="">
      <div class="notice-wrapper flex-1 max-w-1172 flex ml-15 text-grey text-18">
        <div class="scrolling-content max-w-1172 overflow-hidden">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {apiGetTopNotice} from "@/service/api/api.js";

const list = ref([])
apiGetTopNotice({
  notictype: 3
}).then(res => {
  list.value = res.list
  console.log(res.list);
})
</script>

<style lang="scss" scoped>
.notice-wrapper {
  flex: 0 1 auto; /* 不允许拉伸，允许收缩，宽度自动 */
}

.scrolling-content {
  max-width: 100%; /* 最大宽度为父容器的宽度 */
  white-space: nowrap; /* 防止文本换行 */
  //animation: scroll 10s linear infinite;
}

.item {
  display: inline-block;
  padding: 0 20px; /* 根据需要调整间距 */
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
