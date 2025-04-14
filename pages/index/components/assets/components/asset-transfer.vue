<template>
	<uv-popup ref="popup" mode="center" :closeOnClickOverlay="false" :safe-area-inset-bottom="false" :round='10'>
		<view style="color: #333333; margin: 14px;  width: 85vw;">
			<view class="flex-row flex-items-center flex-between">
				<span class="font-17 font-weight-medium">划转至投资金额 ({{currency}})</span>
				<uv-icon name="close" color="gray" size="25px" @click="close"></uv-icon>
			</view>
		</view>
	</uv-popup>
</template>

<script>
	export default {
		props: {
			currency: {
				type: String,
				default: 'CNY'
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			console.log('assets')
		},
		
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>
</style>