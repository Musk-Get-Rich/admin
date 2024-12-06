import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  column: {
    date: {
      label: '日期',
    },
    registerNum: {
      label: '注册人数',
    },
    activeNum:{
      label: '活跃人数',
    },
    betAmount:{
      label: '投注金额',
    },
    betNum: {
      label: '投注人数',
    },
    addNum: {
      label: '新增有效',
    },
    firstTimeNum:{
      label: '首提人数',
    },
    firstBetNum: {
      label: '首投人数',
    },
    firstAmount: {
      label: '首投金额',
    }
  }
}
