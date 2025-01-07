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
    gametypename: {
      label: t('游戏商'),
    },
    betCount: {
      label: t('注单笔数'),
    },
    betmoney: {
      label: t('投注金额'),
      sortable: true
    },
    validbet: {
      label: t('有效投注'),
      sortable: true
    },
    netmoney: {
      label: t('总输赢'),
      sortable: true
    },
  }
}
