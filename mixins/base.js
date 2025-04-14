import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
import {
	mapState
} from 'vuex'
export default {
	mixins: [MescrollMixin],
	computed: {
		...mapState({
			curTheme: 'curTheme',
			userInfo: 'userInfo'
		}),
		statusBarHeight() {
			const sys = uni.$uv.sys()
			return sys.statusBarHeight
		},
		navbarHeight() {
			return this.statusBarHeight + 44
		},
		screenWidth() {
			const sys = uni.$uv.sys()
			return sys.windowWidth
		},
		pageHeight() {
			const sys = uni.$uv.sys()
			return sys.windowHeight - this.navbarHeight
		},
	},
	data() {
		return {
			dataList: [],
			// 下拉刷新的配置(可选, 绝大部分情况无需配置)
			downOption: {
				page: {
					size: 10 // 每页数据的数量,默认10
				},
			},
			// 上拉加载的配置(可选, 绝大部分情况无需配置)
			upOption: {
				page: {
					size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				textNoMore: '-- 没有更多了 --',
				empty: {
					use: false
				}
			},
		}
	},
	watch: {
		'$store.state.locale': {
			handler(newVal, oldVal) {
				this.localeChange && this.localeChange()
			}
		}
	},
	methods: {
		back() {
			uni.navigateBack()
		},
	}
}