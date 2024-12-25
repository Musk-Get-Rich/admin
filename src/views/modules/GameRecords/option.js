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
    gamebigtype: {
      label: t('比赛类型'),
    },
    betCount: {
      label: t('注单笔数'),
    },
    betMoney:{
      label: t('投注金额'),
    },
    loginacount:{
      label: t('会员'),
    },
    validMoney:{
      label: t('有效投注额'),
    },
    test:{
      label: t('总输赢'),
    },
  }
}
