import { globalOption } from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  index: true,
  refreshBtn: false,
  columnBtn: false,
  menu: false,
  column: [
    {
      label: t('推广员(会员)'),
      prop: 'loginaccount',
      search: true,
      searchLabel: '',
      placeholder: t('会员账号'),
    },
    {
      label: t('裂变人数'),
      prop: 'playcount',
    },
    {
      label: t('状态'),
      prop: 'employeestatus',
    },
    {
      label: t('加入时间'),
      prop: 'logindate',
    },
  ]
}
