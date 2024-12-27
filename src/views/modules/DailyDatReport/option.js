import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  menu: false,
  column: {
    reportdaystr: {
      label: t('日期'),
    },
    newplay: {
      label: t('注册人数'),
    },
    liveplay:{
      label: t('活跃人数'),
    },
    betamount:{
      label: t('投注金额'),
    },
    betnum: {
      label: t('投注人数'),
    },
    newplayvalid: {
      label: t('新增有效'),
    },
    firstwithdrawalnum:{
      label: t('首提人数'),
    },
    firstbetnum: {
      label: t('首投人数'),
    },
    betnetamount: {
      label: t('首投金额'),
    }
  }
}
