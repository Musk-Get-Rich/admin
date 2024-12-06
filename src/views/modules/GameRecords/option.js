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
      label: '比赛类型',
    },
    withdrawalAmount: {
      label: '注单笔数',
    },
    winLoss:{
      label: '投注金额',
    },
    totalBonusAmount:{
      label: '会员',
    },
    fee:{
      label: '有效投注额',
    }
  }
}
