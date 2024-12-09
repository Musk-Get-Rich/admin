<template>
  <div class="expand">
    <avue-crud
      :data="tableData"
      :option="option"
    />
  </div>
</template>

<script setup>
import option from "./page2.js";

defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
})

const list = [
  {
    validplayNum: 1,
  }
]
</script>

<style lang="scss" scoped>
:deep(.avue-crud__header) {
  display: none;
}
</style>
