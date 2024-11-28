<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="{
      width: size + 'px',
      height: size + 'px'
    }"
  >
    <use :href="symbolId"/>
  </svg>
</template>

<script setup>
import {computed} from "vue"

const props = defineProps({
  prefix: {
    type: String,
    default: "icon"
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '16'
  }
})

// id 要对应上 vite 里面的配置
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>


<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
