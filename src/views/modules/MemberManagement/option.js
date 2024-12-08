import { globalOption } from "@/config/tabOption.js";

const levelOptions = Array.from({ length: 12 }).map((_, i) => ({
  label: `VIP${i + 1}`,
  value: String(i + 1).padStart(4, '0')
}))

export const isnormalOptions = [
  {
    "label": "静止户",
    "value": 0
  },
  {
    "label": "正常户",
    "value": 1
  }
]

export const reasonTypes = [
  {
    "label": "注册未充值",
    "value": "REGISTERNODEPOSIT "
  },
  {
    "label": "超过1周没登录",
    "value": "NOLOGINWEEK"
  },
  {
    "label": "超过1周未充值的",
    "value": "NODEPOSITWEEK"
  }
]

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  refreshBtn: false,
  columnBtn: false,
  menu: false,
  menuWidth: 100,
  expand: true,
  expandWidth: 1,
  expandRowKeys: [1],
  expandClassName: 'invisible',
  expandLabelClassName: 'invisible',
  rowKey: 'loginaccount',
  column: [
    {
      label: '等级',
      prop: 'employeelevelcode',
      search: true,
      searchLabel: '',
      placeholder: '请选择等级',
      type: 'select',
      searchOrder: 3,
      dicData: levelOptions
    },
    {
      label: '账号姓名',
      prop: 'loginaccount',
      search: true,
      searchLabel: '',
      placeholder: '请输入会员账号',
      searchOrder: 4
    },
    {
      label: '存款/提款',
      prop: 'hasDeposit',
      search: true,
      searchLabel: '',
      placeholder: '是否存款',
      type: 'select',
      searchOrder: 1,
      dicData: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      label: '净输赢',
      prop: 'winlose',
    },
    {
      label: '手机号/邮箱',
      prop: 'phoneOrEmail',
    },
    {
      label: '创建时间',
      prop: 'logindatetime',
    },
    {
      label: '最后登录',
      prop: 'lastlogintime',
    },
    {
      label: '状态',
      prop: 'isnormal',
      type: 'select',
      search: true,
      searchLabel: '',
      placeholder: '状态',
      searchOrder: 2,
      dicData: isnormalOptions
    },
    {
      label: '维护原因',
      prop: 'reasontype',
      search: true,
      searchLabel: '',
      placeholder: '维护原因',
      type: 'select',
      searchOrder: 1,
      dicData: reasonTypes
    },
    {
      label: '操作',
      prop: '_actions',
    },
    {
      label: '其它参考',
      prop: 'other',
    },
  ]
}
