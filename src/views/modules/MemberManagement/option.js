import { globalOption } from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

const levelOptions = Array.from({ length: 12 }).map((_, i) => ({
  label: `VIP${i + 1}`,
  value: String(i + 1).padStart(4, '0')
}))

export const isnormalOptions = [
  {
    "label": t("静止户"),
    "value": 0
  },
  {
    "label": t("正常户"),
    "value": 1
  }
]

export const reasonTypes = [
  {
    "label": t("注册未充值"),
    "value": "REGISTERNODEPOSIT"
  },
  {
    "label": t("超过1周没登录"),
    "value": "NOLOGINWEEK"
  },
  {
    "label": t("超过1周未充值的"),
    "value": "NODEPOSITWEEK"
  }
]

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  // refreshBtn: false,
  columnBtn: false,
  menu: false,
  menuWidth: 100,
  expand: true,
  expandWidth: 1,
  expandRowKeys: [1],
  expandClassName: 'invisible',
  expandLabelClassName: 'invisible',
  rowKey: 'loginaccount',
  showSummary: true,
  column: [
    {
      label: t('等级'),
      prop: 'employeelevelcode',
      search: true,
      searchLabel: '',
      placeholder: t('请选择等级'),
      type: 'select',
      searchOrder: 3,
      dicData: levelOptions
    },
    {
      label: t('账号姓名'),
      prop: 'loginaccount',
      search: true,
      searchLabel: '',
      placeholder: t('请输入会员账号'),
      searchOrder: 4
    },
    {
      label: t('存款/提款'),
      prop: 'accumulateddeposit_accumulatedwithdraw',
      search: true,
      searchLabel: '',
      placeholder: t('是否存款'),
      type: 'select',
      searchOrder: 1,
      dicData: [
        {
          label: t('是'),
          value: 1
        },
        {
          label: t('否'),
          value: 0
        }
      ],
      sortable: true
    },
    {
      label: t('存取差'),
      prop: 'winlose',
      sortable: true
    },
    // {
    //   label: t('手机号/邮箱'),
    //   prop: 'phoneOrEmail',
    // },
    {
      label: t('创建时间'),
      prop: 'logindatetime',
      sortable: true
    },
    {
      label: t('最后登录'),
      prop: 'lastlogintime',
      sortable: true
    },
    {
      label: t('状态'),
      prop: 'isnormal',
      type: 'select',
      search: true,
      searchLabel: '',
      placeholder: t('状态'),
      searchOrder: 2,
      dicData: isnormalOptions
    },
    {
      label: t('维护原因'),
      prop: 'reasontype',
      search: true,
      searchLabel: '',
      placeholder: t('维护原因'),
      type: 'select',
      searchOrder: 1,
      dicData: reasonTypes,
      searchValue: reasonTypes[0].value
    },
    {
      label: t('操作'),
      prop: '_actions',
    },
    // {
    //   label: t('其它参考'),
    //   prop: 'other',
    // },
  ]
}
