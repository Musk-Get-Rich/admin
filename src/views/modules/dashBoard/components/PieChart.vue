<template>
  <div class="w-full h-325 rounded-8 overflow-hidden">
    <div ref="chart" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

const chart = ref(null);

onMounted(() => {
  const myChart = echarts.init(chart.value);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    grid: {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30,
      containLabel: true,
      borderRadius: 10 // 设置圆角
    },
    legend: {
      orient: 'vertical', // 设置图例垂直排列
      top: 'center',      // 垂直居中
      right: '5%',         // 移动到右侧
      textStyle: {
        fontSize: 16      // 设置图例标题文字大小
      },
      itemGap: 20         // 设置图例项之间的间距
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '80%'], // 增大饼图的内外半径
        center: ['30%', '50%'], // 将饼图向左移动
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,  // 调整悬浮时文字的大小
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '苹果APP', itemStyle: { color: '#95a4fc' } },
          { value: 735, name: '苹果网页版', itemStyle: { color: '#b1e3ff' } },
          { value: 580, name: '安卓APP', itemStyle: { color: '#fc9595' } },
          { value: 484, name: '安卓网页版', itemStyle: { color: '#baedbd' } },
          { value: 300, name: 'PC', itemStyle: { color: '#edd8ba' } }
        ],
      }
    ],
    backgroundColor: '#f7fbf8' // 图表背景颜色
  };

  myChart.setOption(option);
});
</script>
