import { globalOption } from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";

const t = i18n.global.t
export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 6, // 搜索框宽度
  index: true,
  refreshBtn: false,
  columnBtn: false,
  column: [
    {  
      label: t('下级代理'),  
      prop: 'loginaccount',  
    },  
    {  
      label: t('下线人数（需要维护）'),  
      prop: 'playcount',  
    }, 
    {
      label: t('状态'),
      prop: 'employeestatus',
      dicData: [
        {
          value: '1',
          label: t('启用')
        },
        {
          value: '2',
          label: t('锁定游戏')
        },
        {
          value: '3',
          label: t('禁用')
        }
      ]
    },
    {  
      label: t('备注'),  
      prop: 'remark',  
    },  
    {  
      label: t('团队业绩查询'),  
      prop: 'content',  
    }, 
  ]
}
