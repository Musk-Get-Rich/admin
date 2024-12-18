import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  menuWidth: 80,
  menu: false,
  column: [
    {
      label: '类型',
      prop: 'employeepaymentname',
    },
    {
      label: '时间',
      prop: 'orderdate',
    },
    {
      label: '单号',
      prop: 'ordernumber',
    },
    {
      label: '提款金额',
      prop: 'orderamount',
    },
    {
      label: '状态',
      prop: 'orderstatus',
    },
  ]
}
