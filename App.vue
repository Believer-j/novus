<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let that = this
			setTimeout(function() {
				that.reconnectWallet()
			}, 1000);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			reconnectWallet() {
				const localAddress = this.$store.state.address
				// 本地存在钱包地址
				if (!uni.$uv.test.empty(localAddress)) {
					// this.$store.dispatch('login')
					// 获取连接器中的地址与钱包连接状态
					const account = this.$web3.getAccount()
					if (!account.address || account.address !== localAddress) {
						this.$store.dispatch('login')
					} 
				}
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uv-ui-tools/index.scss';
	@import "style/base.scss";
</style>