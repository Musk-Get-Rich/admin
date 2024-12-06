import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  menu: false,
  column: {
    depositAmount: {
      label: '编号',
    },
    withdrawalAmount: {
      label: '会员账号',
    },
    winLoss:{
      label: '金额',
    },
    totalBonusAmount:{
      label: '资金类型',
    },
    fee:{
      label: '完成时间',
    },
  }
}
