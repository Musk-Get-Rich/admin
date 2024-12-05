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
      label: '下级代理',
      prop: 'agentlinecode',
    },
    {
      label: '下线人数（需要维护）',
      prop: 'playcount',
    },
    {
      label: '状态',
      prop: 'employeestatus',
      dicData: [
        {
          value: '1',
          label: '启用'
        },
        {
          value: '2',
          label: '锁定游戏'
        },
        {
          value: '3',
          label: '禁用'
        }
      ]
    },
    {
      label: '备注',
      prop: 'remark',
    },
    {
      label: '团队业绩查询',
      prop: 'content',
    },
  ]
}
