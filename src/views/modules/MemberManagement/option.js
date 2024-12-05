import { globalOption } from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  refreshBtn: false,
  columnBtn: false,
  column: [
    {
      label: '等级',
      prop: 'level',
      search: true,
      searchLabel: '',
      placeholder: '请选择等级',
      type: 'select',
      searchOrder: 3,
      dicData: [
        {
          label: '一级',
          value: 1
        },
        {
          label: '二级',
          value: 2
        }
      ]
    },
    {
      label: '账号姓名',
      prop: 'name',
      search: true,
      searchLabel: '',
      placeholder: '请输入会员账号',
      searchOrder: 4
    },
    {
      label: '存款/提款',
      prop: 'level',
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
          value: 2
        }
      ]
    },
    {
      label: '净输赢',
      prop: 'employeestatus',
    },
    {
      label: '手机号/邮箱',
      prop: 'phoneOrEmail',
    },
    {
      label: '创建时间',
      prop: 'remark',
    },
    {
      label: '最后登录',
      prop: 'content',
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      search: true,
      searchLabel: '',
      placeholder: '状态',
      searchOrder: 2,
      dicData: [
        {
          "label": "静止户",
          "value": "静止户"
        },
        {
          "label": "正常户",
          "value": "正常户"
        },
        {
          "label": "停权户",
          "value": "停权户"
        },
        {
          "label": "密码锁定",
          "value": "密码锁定"
        },
        {
          "label": "内部试玩",
          "value": "内部试玩"
        },
        {
          "label": "沉默户",
          "value": "沉默户"
        },
        {
          "label": "注销",
          "value": "注销"
        }
      ]
    },
    {
      label: '维护原因',
      prop: 'reason',
      search: true,
      searchLabel: '',
      placeholder: '维护原因',
      type: 'select',
      searchOrder: 1,
      dicData: [
        {
          "label": "注册没充值",
          "value": "noRecharge"
        },
        {
          "label": "超过1周没登录",
          "value": "noLoginWeek"
        },
        {
          "label": "超过1周没充值的",
          "value": "noRechargeWeek"
        },
        {
          "label": "可注销",
          "value": "canDelete"
        }
      ]
    },
  ]
}
