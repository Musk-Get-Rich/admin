import { requestFunc } from "../request.js";

// 账变明显-佣金钱包
export const _commissionWallet = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/CommissionWallet', params)
}

// 账变明显-彩金钱包