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
