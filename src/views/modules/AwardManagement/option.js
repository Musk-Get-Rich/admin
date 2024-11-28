import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  column: [
    {
      label: '期数',
      prop: 'periodStr',
    },
    {
      label: '1号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList[0].number
      }
    },
    {
      label: '2号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList[1].number
      }
    },
    {
      label: '3号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList[2].number
      }
    },
    {
      label: '4号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList[3].number
      }
    },
    {
      label: '5号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList[4].number
      }
    },
    {
      label: '6号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList?.[5]?.number
      }
    },
    {
      label: '7号球',
      prop: 'numberList',
      formatter(row) {
        return row.numberList?.[6]?.number
      }
    },
    {
      label: '年份',
      prop: 'year',
    },
    {
      label: '开奖时间',
      width: 200,
      prop: 'nextLotteryTimeStr',
    },
  ]
}
