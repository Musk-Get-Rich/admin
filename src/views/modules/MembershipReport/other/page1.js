import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  maxHeight: 400,
  stripe: false,
  menu: false,
  columnBtn: false,
  refreshBtn: false,
  column: [
    {
      label: '注单笔数',
      prop: 'betcounts',
    },
    {
      label: '返水',
      prop: 'fs',
    }
    // {
    //   label: '红利总计',
    //   prop: 'reviseMoney',
    // },
    // {
    //   label: '存取手续费',
    //   prop: 'payfeeMoney',
    // },
    // {
    //   label: '平台费',
    //   prop: 'gamefeeMoney',
    // },
  ]
}
