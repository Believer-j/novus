// i18n.js
import {
	createI18n
} from 'vue-i18n' // v9.x

import {
	DefaultLocaleLang
} from '@/config/index.js'
import {
	getLocale,
} from "@/utils/cookie.js"

// 引入语言文件
import en from './en.json'; // 美国
import cn from './cn.json'; // 中国



const messages = {
	en,
	cn
};

// 设置默认语言
const defaultLang = getLocale() || DefaultLocaleLang;
console.log(defaultLang)

const i18nConfig = {
	locale: defaultLang, // set locale
	messages, // set locale messages
};

const i18n = createI18n(i18nConfig)

export default i18n;