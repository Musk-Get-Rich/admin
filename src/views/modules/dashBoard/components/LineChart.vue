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
      trigger: 'axis'
    },
    grid: {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30,
      containLabel: true,
      borderRadius: 10 // 设置圆角
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
        smooth: 0.6,
        lineStyle: {
          color: '#25d55b',
          width: 5
        },
        itemStyle: {
          color: '#25d55b' // symbol颜色
        },
        symbolSize: 10 // 增大symbol的大小
      },
    ],
    backgroundColor: '#f7fbf8' // 图表背景颜色
  };

  myChart.setOption(option);
});
</script>
