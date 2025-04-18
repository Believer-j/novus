import uniRequest from "./request";

// 登录验签
export const checkSign = (data) => {
	return uniRequest('/base/api/novus/checkSign', {
		method: 'post',
		data,
	})
}

// 获取用户信息
export const getUserInfoApi = (data) => {
	return uniRequest('/base/api/novus/user/info', {
		method: 'post',
		data,
	})
}

export const getConfigApi = (data) => {
	return uniRequest('/base/api/novus/novus/config', {
		method: 'post',
		data
	})
}