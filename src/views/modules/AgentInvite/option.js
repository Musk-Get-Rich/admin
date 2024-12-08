import { globalOption } from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  index: true,
  refreshBtn: false,
  columnBtn: false,
  column: [
    {
      label: '推广员(会员)',
      prop: 'loginaccount',
      search: true,
      searchLabel: '',
      placeholder: '会员账号',
    },
    {
      label: '裂变人数',
      prop: 'playcount',
    },
    {
      label: '状态',
      prop: 'employeestatus',
    },
    {
      label: '加入时间',
      prop: 'logindate',
    },
  ]
}
