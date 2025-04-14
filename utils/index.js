
export const getShortAddress = (value) => {
	var start = value.substring(0, 6);
	var end = value.substring(value.length - 6, value.length);
	return "0x..." + end
}

export const getShortAddress2 = (value) => {
	var start = value.substring(0, 6);
	var end = value.substring(value.length - 6, value.length);
	return start + '......' + end
}

export const isEmpty = (value) => {
	let a = uni.$uv.test.empty(value)
	if (!a) {
		return value == 'null'
	}
	return a
}

export function empty(value, placeholder = '') {
	return isEmpty(value) ? placeholder : value
}

export const decimal = (value, decimals = 2) => {
	switch (typeof value) {
		case 'undefined':
			value = Number(0).toFixed(decimals)
			break
		case 'string':
			value = Number(value).toFixed(decimals)
			break
		case 'number':
			value = value.toFixed(decimals)
			break
	}
	return value
}

export const showToast = (msg) => {
	uni.showToast({
		title: msg,
		icon: 'none',
		duration: 2000
	});
}

export const copy = (value, msg) => {
	uni.setClipboardData({
		data: value,
		success: () => {
			showToast(msg || 'copied')
		}
	})
}

/**
 * 获取时间随机数
 * @param {number} len
 * @returns
 */
export const randomTimeStr = (prefix = new Date().getTime(), len = 13) => {
	const chars = '012345678';
	const maxPos = chars.length;
	let pwd = prefix.toString().substring(7);
	len = len - pwd.length;
	for (let i = 0; i < len; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
}

export const priceFormat = (val, decimals = 3) => {
	return uni.$u.priceFormat(val, decimals)
}

export const pageVM = () => {
	try{
		const pages = getCurrentPages();
		const page = pages[pages.length - 1];
		const pageVM = page.$vm;
		return pageVM
	}catch(e){
		//TODO handle the exception
	}
}
/**
 * 必须有数字和字母, 8至16位
 */
export const enAndNum =(str)=> {
	const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g
	return reg.test(str)
}

export function replaceAll(str, searchValue, replaceValue) {
	while (str.indexOf(searchValue) != -1){
		str = str.replace(searchValue, replaceValue)
	}
	return str
}
export function randomColor() {
	var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math
		.random() * 256) + ')';
	return color;
}
export default {
	getShortAddress,
	getShortAddress2,
	isEmpty,
	decimal,
	showToast,
	copy,
	randomTimeStr,
	priceFormat,
	empty,
	pageVM,
	enAndNum,
	replaceAll,
	randomColor
}