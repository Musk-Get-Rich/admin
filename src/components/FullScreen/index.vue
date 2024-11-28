<template>
  <div @click.stop="click" class="flex items-center">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="tips"
      placement="bottom"
    >
      <SvgIcon
        size="26"
        :name="isFullscreen ? 'CancelFullScreen' : 'FullScreen'"
      />
    </el-tooltip>
  </div>
</template>

<script setup>
import {ElMessage} from "element-plus"
import screenfull from "screenfull"

const props = defineProps({
  /** 全屏的元素，默认是 html */
  element: {
    type: String,
    default: "html"
  },
  /** 打开全屏提示语 */
  openTips: {
    type: String,
    default: "全屏"
  },
  /** 关闭全屏提示语 */
  exitTips: {
    type: String,
    default: "退出全屏"
  }
})

const tips = ref(props.openTips)
const isFullscreen = ref(false)

const click = () => {
  const dom = document.querySelector(props.element) || undefined
  if (!screenfull.isEnabled) {
    ElMessage.warning("您的浏览器无法工作")
    return
  }
  screenfull.toggle(dom)
}

const change = () => {
  isFullscreen.value = screenfull.isFullscreen
  tips.value = screenfull.isFullscreen ? props.exitTips : props.openTips
}

screenfull.on("change", change)

onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.off("change", change)
  }
})
</script>
