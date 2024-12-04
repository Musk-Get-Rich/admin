<template>
  <box-layout :title="title" class="!flex-1">
    <div class="pt-20">
      <div ref="chart" class="w-full h-400"></div>
    </div>
    <template #right>
      <div
        class="absolute right-20 top-20"
      >
        <el-select
          class="!w-94"
          @change="updateChart"
          v-model="timeUnit"
        >
          <el-option
            v-for="item in timeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </template>
  </box-layout>
</template>

<script setup>
import boxLayout from '@/components/boxLayout/index.vue';
import {ref, onMounted, watch} from 'vue';
import * as echarts from 'echarts';
import {useEchartsResize} from "@/hook/useEchartsResize.js";
import {useStorage} from "@vueuse/core";
import {MENU_COLLAPSE} from "@/config/storageKey.js";
import {debounce} from "@/utils/index.js";

// Props
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  labels: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['changeTime'])

// Chart reference
const chart = ref(null);
const chartInstance = ref(null)

const initChart = () => {
  // Initialize chart
  const option = {
    grid: {
      left: '10', // 调整左边距
      right: '10', // 调整右边距
      top: '80',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.labels,
      axisLabel: {
        fontWeight: 'bold'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontWeight: 'bold'
      }
    },
    series: [
      {
        data: props.data,
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: 'red'
        },
        markPoint: {
          data: [
            {
              coord: [props.labels[props.labels.length - 1], props.data[props.data.length - 1]], // 最后一个数据点
              name: '',
              value: props.data[props.data.length - 1],
              symbolSize: [80, 80], // 设置矩形大小，宽度为20，高度为10
              label: {
                show: true,
                position: 'inside', // 将文字放到标记点内部
                formatter: '{@[1]}', // 显示数据值
                color: 'white', // 标签文字颜色，与标记点颜色形成对比
                fontSize: 14, // 标签文字大小
                // fontWeight: 'bold', // 标签文字粗细
                backgroundColor: 'transparent', // 标签背景颜色
                borderRadius: 5, // 标签背景圆角
                padding: [4, 6] // 标签背景内边距
              },
              itemStyle: {
                color: 'rgba(0, 0, 0, 0.7)', // 标记点颜色
                // borderColor: 'black', // 标记点边框颜色
                // borderWidth: 1, // 标记点边框宽度
                // borderType: 'solid', // 标记点边框类型 (solid, dashed, or dotted)
                // shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
                // shadowBlur: 10, // 阴影模糊大小
                // shadowOffsetX: 3, // 阴影水平偏移
                // shadowOffsetY: 3 // 阴影垂直偏移
              },
              emphasis: {
                scale: false // 禁用放大效果
              }
            }
          ]
        }
      }
    ]
  };

  chartInstance.value.setOption(option);
};

const timeOption = [
  {
    label: 'Day',
    value: 1,
  },
  {
    label: 'Month',
    value: 2,
  },
  {
    label: 'Year',
    value: 3,
  },
]

const timeUnit = ref(1);
// Update chart
const updateChart = () => {
  console.log(timeUnit.value);
  emit('changeTime', timeUnit.value)
};

// Watch for data changes
watch(() => props.data, initChart);
watch(() => props.labels, initChart);

// Initialize chart on mount
onMounted(() => {
  chartInstance.value = echarts.init(chart.value);
  initChart()
});

/**
 * 折叠菜单
 */
const collapse = useStorage(MENU_COLLAPSE, false)

// 重新设置宽度
watch(() => collapse.value, (val) => {
  console.log(123);
  setTimeout(() => {
    chartInstance.value.resize();
  }, 500)
}, {
  deep: true
})


window.addEventListener('resize', debounce(function () {
  chartInstance.value.resize();
}, 100));
</script>

<style scoped lang="scss">
.select {
  width: 98px;
  height: 30px;
  text-align: center;
}
</style>
