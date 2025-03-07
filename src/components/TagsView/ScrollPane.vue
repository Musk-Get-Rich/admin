<template>
  <div class="scroll-container flex items-center">
    <el-icon class="arrow left" @click="scrollTo('left')">
      <ArrowLeft />
    </el-icon>
    <el-scrollbar ref="scrollbarRef" @wheel.prevent="wheelScroll" @scroll="scroll">
      <div ref="scrollbarContentRef" class="flex">
        <slot />
      </div>
    </el-scrollbar>
    <el-icon class="arrow right" @click="scrollTo('right')">
      <ArrowRight />
    </el-icon>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router"
import { ElScrollbar } from "element-plus"
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue"

const props = defineProps({
  tagRefs: {
    type: Object,
    required: true
  }
})

const route = useRoute()

const scrollbarRef = ref()
const scrollbarContentRef = ref()

/** 当前滚动条距离左边的距离 */
let currentScrollLeft = 0
/** 每次滚动距离 */
const translateDistance = 200

/** 滚动时触发 */
const scroll = ({ scrollLeft }) => {
  currentScrollLeft = scrollLeft
}

/** 鼠标滚轮滚动时触发 */
const wheelScroll = ({ deltaY }) => {
  if (/^-/.test(deltaY.toString())) {
    scrollTo("left")
  } else {
    scrollTo("right")
  }
}

/** 获取可能需要的宽度 */
const getWidth = () => {
  /** 可滚动内容的长度 */
  const scrollbarContentRefWidth = scrollbarContentRef.value?.clientWidth
  /** 滚动可视区宽度 */
  const scrollbarRefWidth = scrollbarRef.value?.wrapRef?.clientWidth
  /** 最后剩余可滚动的宽度 */
  const lastDistance = scrollbarContentRefWidth - scrollbarRefWidth - currentScrollLeft

  return { scrollbarContentRefWidth, scrollbarRefWidth, lastDistance }
}

/** 左右滚动 */
const scrollTo = (direction, distance = translateDistance) => {
  let scrollLeft = 0
  const { scrollbarContentRefWidth, scrollbarRefWidth, lastDistance } = getWidth()
  // 没有横向滚动条，直接结束
  if (scrollbarRefWidth > scrollbarContentRefWidth) return
  if (direction === "left") {
    scrollLeft = Math.max(0, currentScrollLeft - distance)
  } else {
    scrollLeft = Math.min(currentScrollLeft + distance, currentScrollLeft + lastDistance)
  }
  scrollbarRef.value?.setScrollLeft(scrollLeft)
}

/** 移动到目标位置 */
const moveTo = () => {
  const tagRefs = props.tagRefs
  for (let i = 0; i < tagRefs.length; i++) {
    // @ts-ignore
    if (route.path === tagRefs[i].$props.to.path) {
      // @ts-ignore
      const el = tagRefs[i].$el
      const offsetWidth = el.offsetWidth
      const offsetLeft = el.offsetLeft
      const { scrollbarRefWidth } = getWidth()
      // 当前 tag 在可视区域左边时
      if (offsetLeft < currentScrollLeft) {
        const distance = currentScrollLeft - offsetLeft
        scrollTo("left", distance)
        return
      }
      // 当前 tag 在可视区域右边时
      const width = scrollbarRefWidth + currentScrollLeft - offsetWidth
      if (offsetLeft > width) {
        const distance = offsetLeft - width
        scrollTo("right", distance)
        return
      }
    }
  }
}

watch(
  route,
  () => {
    nextTick(moveTo)
  },
  {
    deep: true
  }
)
</script>

<style lang="scss" scoped>
.scroll-container {
  height: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;

  .arrow {
    width: 40px;
    height: 100%;
    cursor: pointer;

    &.left {
      box-shadow: 5px 0 5px -6px #ccc;
    }

    &.right {
      box-shadow: -5px 0 5px -6px #ccc;
    }
  }

  .el-scrollbar {
    flex: 1;
    // 横向超出窗口长度时，显示滚动条
    white-space: nowrap;

    .scrollbar-content {
      display: inline-block;
    }
  }

  .screenfull {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
