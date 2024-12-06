import CryptoJS from "crypto-js";
import qs from "qs";

const AES_KEY = "FO92712eVGwk0IG4";
const MD5_KEY = "3JSHcteXuC8U0IBN";
export const BRANDCODE = "EB00000T";
export const ENTERPRISE_CODE = "EN001N"; // 请替换为实际的企业代码
import { useUserStore } from "../store/modules/user.store.js";

export const encryptApiParams = (params, noCrypto = false) => {

	const userStore = useUserStore()

	if (noCrypto) {
		return qs.stringify(params);
	}
	// 步骤1: 将业务参数转换为键值对字符串
	const stringParams = qs.stringify({
		employeecode: userStore.userInfo.employeecode,
		parentemployeecode: userStore.userInfo.parentemployeecode, // 用户编码
		...params,
		brandcode: BRANDCODE,
	});

	console.log(userStore.userInfo.employeecode, stringParams);
	console.log(userStore.userInfo.parentemployeecode);

	// 步骤2: AES加密
	const aesSecret = CryptoJS.enc.Utf8.parse(AES_KEY);
	const encrypted = CryptoJS.AES.encrypt(stringParams, aesSecret, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
		enterprisecode: ENTERPRISE_CODE,
	}).toString();
	const encodedParams = encrypted.toString();

	const signature = CryptoJS.MD5(stringParams + MD5_KEY).toString();

	return qs.stringify({
		enterprisecode: ENTERPRISE_CODE,
		signature: signature.toString(),
		params: encodedParams,
	});
};
