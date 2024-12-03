<template>
  <el-card>
    <avue-form v-model="form"
             :option="option"></avue-form>
    <avue-crud :option="tableOption"
             v-model="form"
             :data="data"></avue-crud>
  </el-card>
</template>

<script setup>
const form = ref({});

const option = ref({
  menuSpan: 6,
  labelWidth: 110,
  column: [
    {
      label: "时间日期范围",
      type: 'datetimerange',
      prop: 'datetimerange',
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      startPlaceholder: '时间日期开始范围自定义',
      endPlaceholder: '时间日期结束范围自定义',
    }
  ]
});

const data = ref([{
  date: '1',
  registerNum: '1',
  one: '1',
  tow: '1',
  three: '1',
  four: '1',
  five: '1',
  six: '1',
  seven: '1',
  eight: '1',
  nine: '1',
}])
const tableOption = ref({
  labelWidth: 120,
  addBtn: false,
  menu: false,
  header: false,
  column: {
    date: {
      label: '日期',
    },
    registerNum: {
      label: '注册',
    },
    one:{
      label: '次留',
    },
    tow:{
      label: '2留',
    },
    three: {
      label: '3留',
    },
    four: {
      label: '4留',
    },
    five:{
      label: '5留',
    },
    six: {
      label: '6留',
    },
    seven: {
      label: '7留',
    },
    eight: {
      label: '8留',
    },
    nine: {
      label: '9留',
    }
  }
})
</script>

<style lang="scss" scoped>

</style>