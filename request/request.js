import {
	baseURL
} from "@/request/base.js"
import store from '@/store/index.js'
import utils from '@/utils/index.js'

const uniRequest = (url = '', {
	method = 'get',
	data = {}
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url, //仅为示例，并非真实接口地址。
			data,
			method,
			timeout: 60000,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded',
				token: store.state.token
			},
			success: ({
				data
			}) => {
				if (data.code === 0) {
					resolve(data.data)
				} else {

					// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
					if (data.code === 401) {
						// uni.$u.toast('collect the wallet first')
						// store.commit('logout') // token过期之后退出登录
						// setTimeout(() => {
						// 	uni.reLaunch({
						// 		url: "/pages/index/index"
						// 	})
						// }, 500)


					} else if (data.code === 501 || data.code === 502) {
						// 服务器报错
					} else {
						// utils.errorToast(data.msg)
					}
					reject(data)
				}
			},
			fail: (err) => {
				console.log('--------err---------', err, url, data)
				reject(err)
			}
		});

	})
}
export default uniRequest