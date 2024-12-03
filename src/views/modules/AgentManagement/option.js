import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  column: [
    {
      label: '序号',
      prop: 'year',
    },
    {
      label: '下级代理',
      prop: 'period',
    },
    {
      label: '下线人数',
      prop: 'articleTypeName',
    },
    {
      label: '状态',
      prop: 'articleTypeId',
      type: 'select',
      searchLabel: '',
      placeholder: '搜索类型',
    },
    {
      label: '备注',
      prop: 'title',
      width: 300,
      searchLabel: '',
      placeholder: '搜索标题',
    },
    {
      label: '团队业绩查询',
      prop: 'content',
      width: 300,
    },
  ]
}
