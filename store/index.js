import Vuex from 'vuex'
import {
	checkSign,
	getUserInfoApi
} from "@/request/api.js"

import {
	getInviteCode,
	setInviteCode,
	getUserInfo,
	setUserInfo,
	getToken,
	setToken,
	getAddress,
	setAddress,
	getLocale,
	setLocale,
	clear,
	setTheme,
	getTheme
} from "@/utils/cookie.js"

import {
	DefaultLocaleLang,
	DefaultTheme,
	PrefixTheme
} from "@/config/index.js"

const store = new Vuex.Store({
	/**
	 * 存储所有的全局数据
	 */
	state: {
		deviceId: uni.getDeviceInfo().deviceId, // 唯一设备id -- 清除缓存失效
		invitationCode: getInviteCode() || '',
		token: getToken() || '',
		userInfo: getUserInfo() || {},
		isLogin: getAddress() || getToken(),
		address: getAddress() || '',
		locale: getLocale() || DefaultLocaleLang,
		loginLoading: false, // 登录加载
		curTheme: DefaultTheme,
		invitePopupShow: false
	},
	/**
	 * 需要通过计算获取state里的内容的数据
	 * 只读
	 */
	getters: {

	},
	/**
	 * 定义对state的操作，
	 * mutations 不能执行异步操作
	 */
	mutations: {
		// 设置语言
		setLocale(state, data) {
			const locale = getLocale();
			state.locale = data || locale || DefaultLocaleLang
			setLocale(state.locale)
		},
		// 设置邀请码
		setInvitationCode(state, code) {
			state.invitationCode = code
			setInviteCode(code)
		},
		// 退出登录
		logout(state) {
			clear()
			state.isLogin = false
			state.userInfo = {}
			state.token = ''
			state.address = ''
			uni.navigateTo({
				url: '/pages/index/index'
			})
		},
		// 设置用户信息
		setUserInfo(state, user) {
			state.userInfo = user
			setUserInfo(user)
			state.isLogin = true
			state.loginLoading = false
			// 没有邀请码需要弹出邀请码弹窗
			if (user.bindStatus === 0) {
				state.invitePopupShow = true
			} else {
				state.invitePopupShow = false
			}
		},
		// 设置地址和token
		setTokenAddress(state, {
			address,
			token
		}) {
			state.address = address
			setAddress(address)
			state.token = token
			setToken(token)
		},
		setWalletAddress(state, address) {
			state.address = address
			setAddress(address)
		},
		// 设置主题色
		setTheme(state, data = DefaultTheme) {
			const localTheme = getTheme()
			const currentTheme = data || localTheme || DefaultTheme
			const dom = document.querySelector('html')
			let curClass = dom.className
			const themeClass = `${PrefixTheme}${currentTheme}`
			let arr = curClass.split(' ').filter(val => !val.includes(PrefixTheme))
			arr.push(themeClass)
			const classNames = arr.join(' ')
			dom.className = classNames;
			state.curTheme = currentTheme
			setTheme(currentTheme)
		}
	},
	/**
	 * 定义对state的操作，可以异步
	 * 但是 actions不能直接修改state
	 * 修改的操作需要放到mutations中
	 */
	actions: {
		// 获取用户信息
		async getUserInfo({
			state,
			commit
		}) {
			try {

				const res = await getUserInfoApi({
					token: state.token,
				})
				commit('setUserInfo', res)
			} catch (e) {

			}
		},
		async login({
			state,
			commit,
			dispatch
		}, invitationCode = '') {
			try {
				state.loginLoading = true

				const walletVal = await uni.$web3.connect();
				const address = walletVal.accounts[0];
				const start = address.substring(0, 6);
				const end = address.substring(address.length - 6, address.length);
				// 签名
				const signMessage = await uni.$web3.signMessage(start + end);
				console.log(signMessage)
				let params = {
					udid: "11",
					address,
					sign: start + end,
					content: signMessage,
					invitationCode, // 绑定邀请码时传入
					isPc: 1
				};
				uni.showLoading()
				try {
					const data = await checkSign(params)
					// 触发数据变更
					await commit('setTokenAddress', {
						address,
						token: data
					})
					// 刷新用户信息
					dispatch('getUserInfo')
				} catch (e) {
					//TODO handle the exception
				}
				uni.hideLoading()
			} catch (e) {
				//TODO handle the exception
				state.loginLoading = false
				console.log(e)
			}
		}
	},
	modules: {

	}
})

export default store