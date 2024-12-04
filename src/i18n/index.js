import { createI18n } from "vue-i18n";
import enLocale from "./modules/en";
import zhcnLocale from "./modules/zh_CN.js";
import zhTWLocale from "./modules/zh_TW.js"
import {LOCAL_STORAGE_NAME} from "@/config/index.js";
import {LANGUAGE} from "@/config/storageKey.js";

const lang = localStorage.getItem(LANGUAGE) || "zh-CN";
export const langOptions = [
	{
		value: "en",
		label: "English",
	},
	{
		value: "zh-CN",
		label: "简体中文",
	},
	{
		value: "zh-TW",
		label: "繁体中文",
	},
];

const messages = {
	en: {
		...enLocale,
	},
	'zh-CN': {
		...zhcnLocale,
	},
	'zh-TW': {
		...zhTWLocale
	}
};

const i18n = createI18n({
	legacy: false,
	locale: lang, // 首先从缓存里拿，没有的话就用浏览器语言，
	fallbackLocale: "zh-CN", // 设置备用语言
	messages,
});
export default i18n;
