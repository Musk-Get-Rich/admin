import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export default {
  ...globalOption,
  maxHeight: 400,
  stripe: false,
  menu: false,
  columnBtn: false,
  refreshBtn: false,
  column: [
    {
      label: t('注单笔数'),
      prop: 'betcounts',
    },
    {
      label: t('返水'),
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
