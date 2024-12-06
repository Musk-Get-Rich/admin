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
}
