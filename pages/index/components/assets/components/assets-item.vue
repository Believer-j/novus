<template>
	<view class="assets-item flex-row " style="">
		<view class="flex-column" style=" width: calc((100vw - 50px) * 0.5);">
			<view class="flex-row flex-items-center">
				<image src="/static/logo.png" style="width: 20px; height: 20px;"></image>
				<span style="margin-left: 5px;">投资金额({{currency}})</span>
			</view>
			<p class="font-16 font-weight-semibold" style="margin-top: 8px;">
				<span >{{ currency == 'CNY' ? '¥' : '$' }}</span>
				<span>123.2321</span>
			</p>
			<view class="flex-row-center" style="width: 55px; background-color: #389838; color: white; height: 30px; margin-top: 10px; border-radius: 6px;">
				充值
			</view>
		</view>
		<view class="flex-column">
			<view class="flex-row flex-items-center">
				<image src="/static/logo.png" style="width: 20px; height: 20px;"></image>
				<span style="margin-left: 5px;">提现金额({{currency}})</span>
			</view>
			<p class="font-16 font-weight-semibold" style="margin-top: 8px;">
				<span >{{ currency == 'CNY' ? '¥' : '$' }}</span>
				<span>123.2321</span>
			</p>
			<view class="flex-row flex-items-center">
				<view class="flex-row-center" style="width: 55px; background-color: #389838; color: white; height: 30px; margin-top: 10px; border-radius: 6px;">
					提现
				</view>
				<view class="flex-row-center" style="width: 55px; background-color: #389838; color: white; height: 30px; margin-top: 10px; margin-left: 10px; border-radius: 6px;" @click="transfer">
					划转
				</view>
			</view>
		</view>
		<asset-transfer ref="transferPopup" />
	</view>
</template>

<script>
	import assetTransfer from './asset-transfer.vue';
	export default {
		components: {
			assetTransfer
		},
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
			transfer() {
				this.$refs.transferPopup.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.assets-item {
		margin: 15px;
		padding: 14px 10px;
		background-color: rgba(255, 255, 255, .6);
		border-radius: 6px;
		color: #333333;
		font-size: 14px;
	}
</style>
