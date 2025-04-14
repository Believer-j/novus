import {
	AddressKey,
	ShortAddressKey,
	UserInfoKey,
	TokenKey,
	InviteCodeKey,
	LocaleKey,
	ThemeKey
} from "@/config/index.js"

export const set = (key, value) => {
	uni.setStorageSync(key, value)
}
export const get = (key) => {
	return uni.getStorageSync(key) || ''
}
export const remove = (key) => {
	uni.removeStorageSync(key)
}
export const clear = () => {
	const res = uni.getStorageInfoSync();
	res.keys.map((item) => {
		if (item != LocaleKey && item != ThemeKey) {
			remove(item)
		}
		
	})
}

export const setAddress = (value) => {
	uni.setStorageSync(AddressKey, value)
}
export const getAddress = () => {
	return uni.getStorageSync(AddressKey)
}
export const setShortAddress = (value) => {
	uni.setStorageSync(ShortAddressKey, value)
}
export const getShortAddress = () => {
	return uni.getStorageSync(ShortAddressKey)
}
export const setUserInfo = (value) => {
	uni.setStorageSync(UserInfoKey, value)
}
export const getUserInfo = () => {
	return uni.getStorageSync(UserInfoKey)
}
export const setToken = (value) => {
	uni.setStorageSync(TokenKey, value)
}
export const getToken = () => {
	return uni.getStorageSync(TokenKey)
}
export const setInviteCode = (value) => {
	uni.setStorageSync(InviteCodeKey, value)
}
export const getInviteCode = () => {
	return uni.getStorageSync(InviteCodeKey)
}

export const setLocale = (value) => {
	uni.setStorageSync(value, LocaleKey)
}
export const getLocale = () => {
	return uni.getStorageSync(LocaleKey)
}

export const setTheme = (value) => {
	set(ThemeKey, value)
}

export const getTheme = () => {
	return get(ThemeKey)
}

export default {
	set,
	get,
	remove,
	clear,
	setAddress,
	getAddress,
	setShortAddress,
	getShortAddress,
	setUserInfo,
	getUserInfo,
	setToken,
	getToken,
	setInviteCode,
	getInviteCode,
	setLocale,
	getLocale,
	setTheme,
	getTheme
}