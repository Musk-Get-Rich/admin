import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  menu: false,
  columnBtn: false,
  refreshBtn: false,
  column: [
    {
      label: t('游戏输赢'),
      prop: 'validplayNum',
    },
    {
      label: t('备注'),
      prop: 'registerNum',
    },
    {
      label: t('红利总计'),
      prop: 'liveNum',
    },
    {
      label: t('平台费用'),
      prop: 'firstDepositCount',
    },
    {
      label: t('存款手续费'),
      prop: 'depositNum',
    },
    {
      label: t('取款手续费'),
      prop: 'betNum',
    }
  ]
}
