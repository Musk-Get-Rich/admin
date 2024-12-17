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
      label: t('有效会员'),
      prop: 'validplayNum',
    },
    {
      label: t('新用户'),
      prop: 'registerNum',
    },
    {
      label: t('活跃人数'),
      prop: 'liveNum',
    },
    {
      label: t('首充人数'),
      prop: 'firstDepositCount',
    },
    {
      label: t('存款人数'),
      prop: 'depositNum',
    },
    {
      label: t('投注人数'),
      prop: 'betNum',
    }
  ]
}
