<template>
  <div>
    <el-row class="pb-30 border-b-solid border-gray-200 mt-60 mb-20">
      <el-button v-for="(tab,index) in tabs" :key="index" :type="tab === currentBtn ? 'primary' : ''" @click="handleClick(tab)">{{ tab }}</el-button>
    </el-row>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => []
  },
  currentBtn: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = (tab) => {
  emit('tabClick',tab)
}

</script>

<style lang="scss" scoped>

</style>