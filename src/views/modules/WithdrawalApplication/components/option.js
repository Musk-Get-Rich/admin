import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  // menu: false,
  columnBtn: false,
  menuWidth: 100,
  // refreshBtn: false,
  column: [
    { label: '', prop: 'radio', width: 60, hide: false },
    {
      label: t('加密货币名称'),
      prop: 'openningbank',
    },
    {
      label: t('加密货币地址'),
      prop: 'paymentaccount',
    },
    {
      label: t('协议'),
      prop: 'accountname',
    },
  ]
}
