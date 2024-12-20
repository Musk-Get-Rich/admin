import { requestFunc } from "../request.js";

// 账变明显-佣金钱包
export const _doTransLog = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/DoTransLog', params)
}

// 账变明显-彩金钱包
export const _giftRecord = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/GiftRecord', params)
}