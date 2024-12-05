import { globalOption } from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  column: [
    {
      label: '序号',
      prop: 'index',
    },
    {
      label: '推广员(会员)',
      prop: 'agentlinecode',
      search: true,
      searchLabel: '',
      placeholder: '搜索标题',
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
      prop: 'remark',
    },
  ]
}
