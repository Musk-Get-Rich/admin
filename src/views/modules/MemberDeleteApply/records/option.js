import { globalOption } from "@/config/tabOption.js";

export const statusOptions = [
  {
    label: '审核中',
    value: 0
  },
  {
    label: '已注销',
    value: 1
  },
  {
    label: '已拒绝',
    value: 2
  }
]

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  rowKey: 'loginaccount',
  menu: false,
  column: [
    {
      label: '提交时间',
      prop: 'createtime',
    },
    {
      label: '用户名',
      prop: 'loginaccount',
    },
    {
      label: '昵称',
      prop: 'uppercode',
    },
    {
      label: '注册时间',
      prop: 'updatetime',
    },
    {
      label: '状态',
      prop: 'status',
      dicData: statusOptions
    },
    {
      label: '审核备注',
      prop: 'remark',
    }
  ]
}
