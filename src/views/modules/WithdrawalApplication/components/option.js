import {globalOption} from "@/config/tabOption.js";

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
      label: '加密货币名称',
      prop: 'openningbank',
    },
    {
      label: '加密货币地址',
      prop: 'paymentaccount',
    },
    {
      label: '协议',
      prop: 'accountname',
    },
  ]
}
