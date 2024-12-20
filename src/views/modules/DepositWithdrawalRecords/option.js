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
    ordernumber: {
      label: t('编号'),
    },
    loginaccount: {
      label: t('会员账号'),
    },
    orderamount:{
      label: t('金额'),
    },
    ordertype:{
      label: t('资金类型'),
    },
    handleovertime:{
      label: t('完成时间'),
    },
  }
}
