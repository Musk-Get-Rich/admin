<template>
  <avue-crud
    :data="tableData"
    :option="option"
  />
</template>

<script setup>
import option from "./option.js";

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
