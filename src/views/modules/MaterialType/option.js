import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  column: [
    {
      label: '标题',
      prop: 'title',
    },
    // {
    //   label: '内容',
    //   prop: 'content',
    // },
    {
      label: '排序',
      prop: 'sort',
    },
    {
      label: '是否跳转',
      prop: 'canLink',
    },
    {
      label: '发布时间',
      prop: 'createTime',
    },
  ]
}
