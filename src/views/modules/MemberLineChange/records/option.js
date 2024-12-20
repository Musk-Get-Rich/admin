import { globalOption } from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export const statusOptions = [
  {
    label: t('审核中'),
    value: 0
  },
  {
    label: t('已注销'),
    value: 1
  },
  {
    label: t('已拒绝'),
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
      label: t('提交时间'),
      prop: 'createtime',
    },
    {
      label: t('用户名'),
      prop: 'loginaccount',
    },
    {
      label: t('昵称'),
      prop: 'uppercode',
    },
    {
      label: t('注册时间'),
      prop: 'updatetime',
    },
    {
      label: t('状态'),
      prop: 'status',
      dicData: statusOptions
    },
    {
      label: t('审核备注'),
      prop: 'remark',
    }
  ]
}
