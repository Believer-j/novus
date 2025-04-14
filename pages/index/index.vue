<template>
	<view class="wrap">
		<home v-show="tabIndex == 0"></home>
		<zone v-show="tabIndex == 1"></zone>
		<assets v-show="tabIndex == 2"></assets>
		<user v-show="tabIndex == 3"></user>
		<uv-tabbar :value="tabIndex" activeColor="#18533C" inactiveColor="#C1C9C5" @change="index => tabIndex = index">
			<uv-tabbar-item v-for="(item, index) in tabs" :key="index" :text="item">
				<template v-slot:active-icon>
					<image class="icon" :src="`/static/tabbar/tab${index}-s.png`"></image>
				</template>
				<template v-slot:inactive-icon>
					<image class="icon" :src="`/static/tabbar/tab${index}.png`"></image>
				</template>
			</uv-tabbar-item>
		</uv-tabbar>
		
	</view>
</template>

<script>
	import home from "./components/home/home.vue"
	import zone from "./components/zone/zone.vue"
	import assets from "./components/assets/assets.vue"
	import user from "./components/user/user.vue"
	export default {
		components: {
			home,
			zone,
			assets,
			user
		},
		data() {
			return {
				tabIndex: 0,
				tabs: ['首页', '专区', '资产', '我的']
			}
		},
		onLoad() {

		},
		methods: {
			async tap() {
				// this.$store.dispatch('login')
				// const res = await this.$web3.getBalance(this.$store.state.address)
				// console.log(this.$web3.formatEther(res.value))
				// console.log(this.$web3.parseEther('1'))
				const res = await this.$web3.readContract('0x36Fdc78c6ecf0503F7106859eE7e1CC0A27a00b5', 'balanceOf', [
					this.$store.state.address
				])
				console.log(res)
				console.log(this.$web3.formatEther(res))
			}
		}
	}
</script>

<style>
	.icon {
		width: 25px;
		height: 25px;
	}
</style>