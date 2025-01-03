import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  column: [
    {
      label: '标题',
      prop: 'title',
      search: true,
      searchLabel: '',
      searchPlaceholder: '请输入标题'
    },
    // {
    //   label: '内容',
    //   prop: 'content',
    // },
    {
      label: '排序',
      prop: 'sort',
      search: true,
      searchLabel: '',
      searchPlaceholder: '请输入排序'
    },
    {
      label: '是否跳转',
      prop: 'canLink',
    },
    {
      label: '发布时间',
      prop: 'createTime',
    },
    {
      label: '发布时间',
      prop: 'createTime',
    },
    {
      label: '发布时间',
      prop: 'createTime',
    },
  ]
}
