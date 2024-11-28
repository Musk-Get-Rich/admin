import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  column: [
    {
      label: '年份',
      prop: 'year',
    },
    {
      label: '开奖期数',
      prop: 'period',
    },
    {
      label: '类型',
      prop: 'articleTypeName',
    },
    {
      label: '类型',
      prop: 'articleTypeId',
      search: true,
      type: 'select',
      searchLabel: '',
      placeholder: '搜索类型',
    },
    {
      label: '标题',
      prop: 'title',
      width: 300,
      search: true,
      searchLabel: '',
      placeholder: '搜索标题',
    },
    {
      label: '内容',
      prop: 'content',
      width: 300,
    },
    {
      label: '排序',
      prop: 'sort',
    },
    {
      label: '发布时间',
      width: 180,
      prop: 'createTime',
    },
  ]
}
