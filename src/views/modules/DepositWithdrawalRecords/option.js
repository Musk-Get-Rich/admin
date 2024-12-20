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
    depositAmount: {
      label: t('编号'),
    },
    withdrawalAmount: {
      label: t('会员账号'),
    },
    winLoss:{
      label: t('金额'),
    },
    totalBonusAmount:{
      label: t('资金类型'),
    },
    fee:{
      label: t('完成时间'),
    },
  }
}
