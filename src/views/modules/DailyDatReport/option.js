import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  menu: false,
  column: {
    reportday: {
      label: '日期',
    },
    newplay: {
      label: '注册人数',
    },
    liveplay:{
      label: '活跃人数',
    },
    betamount:{
      label: '投注金额',
    },
    betnum: {
      label: '投注人数',
    },
    newplayvalid: {
      label: '新增有效',
    },
    firstwithdrawalnum:{
      label: '首提人数',
    },
    firstbetnum: {
      label: '首投人数',
    },
    betnetamount: {
      label: '首投金额',
    }
  }
}
