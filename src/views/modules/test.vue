<template>
  <div>
    <input type="text" :value="modelValue" @input="onChange">
  </div>
</template>

<script setup>
defineProps({
  test: {},
  prop: {},
  modelValue: {

  }
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
  emit('update:modelValue', e.target.value)
}

const value = ref('')


</script>
