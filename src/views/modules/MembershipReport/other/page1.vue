<template>
  <div class="expand">
    <avue-crud
      :data="tableData"
      :option="option"
    />
  </div>
</template>

<script setup>
import option from "./page1.js";

defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
:deep(.avue-crud__header) {
  display: none;
}
</style>
