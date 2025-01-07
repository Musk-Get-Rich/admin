import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";

const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  menu: false,
  index: true,
  column: [
    {
      label: t('名字'),
      prop: 'newplayvalid',
    },
    {
      label: t('下级人数'),
      prop: 'withdrawall',
    },
    {
      label: t('活跃人数'),
      prop: 'profit',
    },
    {
      label: t('新注册'),
      prop: 'bonusDetail',
    },
    {
      label: t('新增首存'),
      prop: 'depositFee',
    },
    {
      label: t('新增有效'),
      prop: 'winlose',
    },
    {
      label: t('净输赢'),
      prop: 'fs',
      sortable: true,
    },
    {
      label: t('上月结余'),
      prop: 'commissionday',
      sortable: true,
    },
    {
      label: t('结算参考'),
      prop: 'proamount',
      sortable: true,
    },
  ]
}
