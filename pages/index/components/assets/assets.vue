<template>
	<view>
		<view class="linear-gradient flex-column">
			<assets-item></assets-item>
			<assets-item currency="USDT" style="margin-top: 0px;"></assets-item>
		</view>

	</view>
</template>

<script>
	import assetsItem from "./components/assets-item.vue";
	export default {
		components: {
			assetsItem
		},
		data() {
			return {

			}
		},
		mounted() {
			console.log('assets')
		},

		methods: {

		}
	}
</script>

<style scoped>
	.linear-gradient {
		
		background: linear-gradient(to right bottom, rgba(56, 152, 53, 0.5), rgba(56, 152, 53, 1));
	}
</style>