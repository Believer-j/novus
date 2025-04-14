<template>
	<view class="wrap" style="background: linear-gradient( 185deg, #000000 0%, #002034 77%, #152271 100%);">
		<view class=""
			style="position: fixed; left: 0px; right: 0px; top: 0px; background: linear-gradient( 180deg, #000000 0%, #000101 100%); z-index: 1;"
			:style="{height: 58 + statusBarHeight + 'px'}">
			<view class="flex-row flex-items-center flex-between" :style="{marginTop: statusBarHeight + 'px'}">>
				<image src="/static/header-logo.png" style="width: 165px; height: 58px; margin-left: -20px;"></image>
				<view class="flex-row flex-items-center" style="margin-right: 29px;">
					<view class="wallet_wrap">
						Connect to Wallet
					</view>
					<image src="/static/8.svg" style="width: 28px; height: 28px;"></image>
				</view>
			</view>
		</view>
		<view class="" style="width: 100%;" :style="{height: 58 + statusBarHeight + 'px'}">
		</view>
		<view class="bg1 flex-column flex-items-center" style="width: 100%; height: 631px; color: white;"
			@click="segmentIndex = undefined">
			<view class="font-24"
				style="margin-left: 60px; margin-right: 60px; text-align: center;margin-top: 30px; font-family: YouSheBiaoTiHei;">
				Give market value to the market
			</view>
			<p class="font-12" style="margin-top: 25px;">
				<span>Receive <span style="color: #A3F6FD; font-size: 600;">XRP</span> rewards for a limited
					time!</span>
			</p>
			<image src="/static/2.svg" style="width: 353px; height: 271px;"></image>
			<view class="flex-row-center" style="margin-top: 94px;">
				<view class="btn flex-row-center" :class="[segmentIndex == 0 && 'btn__active']"
					@click.stop="segmentIndex = 0">
					<text>Node Purchase</text>
					<image :src="`/static/${segmentIndex == 0 ? '28' : '1'}.svg`"
						style="width: 10px; height: 11px; margin-left: 4px;"></image>
				</view>
				<view class="btn flex-row-center" style="margin-left: 10px;"
					:class="[segmentIndex == 1 && 'btn__active']" @click.stop="segmentIndex = 1">
					<text>Invite Friends</text>
					<image :src="`/static/${segmentIndex == 1 ? '28' : '1'}.svg`"
						style="width: 10px; height: 11px; margin-left: 4px;"></image>
				</view>
			</view>
		</view>
		<view v-if="segmentIndex == 1" class="alert flex-column flex-items-center" style="color: black;">
			<view class="font-15" style="margin-top: 15px; font-family: YouSheBiaoTiHei;">
				Invite Friends to participate
			</view>
			<image src="/static/30.svg" style="width: 137px; height: 134px;"></image>
			<view class="font-12 font-weight-semibold">
				Invite rewards： 100NOV/person
			</view>
			<view class="font-12 font-weight-semibold" style="color: #6A6A6A;  width: 289px;  margin-top: 25px; padding-bottom: 40px;">
				<text>Invitation link</text>
				<view class="flex-row flex-items-center flex-between" style=" margin-top: 2px; padding: 10px 16px; background: rgba(0,197,148,0); border-radius: 8px; border: 1px solid #B9B9B9; ">
					<view class="" style="color: #B9B9B9; font-size: 400; max-width: calc(100% - 24px); word-break: break-all;">
						4dasd1232134dasd1232134
					</view>
					<image src="/static/27.svg" style="width: 13px; height: 16px; min-width: 13px;"></image>
				</view>
				<view style="margin-top: 14px;">Invitation code</view>
				<view class="flex-row flex-items-center flex-between" style=" margin-top: 2px; padding: 10px 16px; background: rgba(0,197,148,0); border-radius: 8px; border: 1px solid #B9B9B9; ">
					<view class="" style="color: #B9B9B9; font-size: 400; max-width: calc(100% - 24px); word-break: break-all;">
						4dasd1232134dasd1232134
					</view>
					<image src="/static/27.svg" style="width: 13px; height: 16px; min-width: 13px;"></image>
				</view>
			</view>
		</view>
		<view class="bg2" style="width: 100%;">
			<view class="bg2 flex-column"
				style="width: 100%; height: 428px; background-image: url('/static/10.svg'); margin-top: 19px;">
				<view class="text1">
					为什么选择NOVUS
				</view>
				<view class="flex-row flex-wrap"
					style="margin-top: 10px; margin-left: 43px; margin-right: 33px; color: #9B9B9B; font-size: 10px; font-weight: 500;">
					<view v-for="(item,index) in 4" :key="index" class="flex-column flex-end"
						style="width: calc((100% - 23px) / 2.0); height: 140px; margin-top: 10px; margin-right: 9px; border: 1px solid #EAEAEA; border-radius: 8px; ">
						<view class="flex-column" style="margin-left: 12px; margin-right: 12px; margin-bottom: 8px;">
							這是區塊鏈技術領域中的一個開創性概唸。通過抵押 32 個或更多的 ETH，用戶可以生成Validator NFT
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<view class="flex-column" style="background-color: white; ">
			<view class="text1" style="margin-top: 37px;">
				工作原理
			</view>
			<view class="flex-column"
				style="margin-top: 14px; margin-left: 39px; margin-right: 39px; color: #9B9B9B; font-size: 10px; font-weight: 500;">
				<view v-for="(item,index) in 3" :key="index"
					style="width: 296px; padding: 16px 0px; border-radius: 8px; border: 1px solid #EAEAEA; margin-top: 6px;">
					<view style="margin-left: 24px; margin-right: 24px; text-align: right;">這是區塊鏈技術領域中的一個開創性概唸</view>
				</view>
			</view>
		</view>
		<view class="flex-column" style="background-color: white; padding-bottom: 30px;">
			<view class="text1" style="margin-top: 37px;">
				安全审计
			</view>
			<view class="flex-row flex-between"
				style="margin-top: 14px; margin-left: 39px; margin-right: 39px; color: #9B9B9B; font-size: 10px; font-weight: 500;">
				<view v-for="(item,index) in 2" :key="index"
					style=" width: 141px; padding: 15px 0px; border-radius: 8px; border: 1px solid #EAEAEA; margin-top: 6px;">
					<view style="margin-left: 12px; margin-right: 12px; text-align: right;">這是區塊鏈技術領域中的一個開創性概唸</view>
				</view>
			</view>
		</view>
		<view class="flex-row-center" style="width: 100%; height: 140px; background-color: black;">
			<image src="/static/header-logo.png" style="width: 165px; height: 58px; margin-left: -20px;"></image>
		</view>
	</view>
</template>

<script>
	import base from '@/mixins/base.js'
	export default {
		mixins: [base],
		data() {
			return {
				segmentIndex: undefined,
				whys: []
			}
		},
		onLoad() {

		},
		methods: {}
	}
</script>

<style lang="scss">
	.alert {
		
		background: #FFFFFF;
		box-shadow: 0px 29px 10px 0px rgba(0, 0, 0, 0);
		border-radius: 9px;
		border: 1px solid #44F3FA;
		background-color: white;
		
		
		margin: -50px 22px 40px 22px;
	}

	.text1 {
		margin-top: 87px;
		margin-left: 43px;
		font-family: YouSheBiaoTiHei;
		font-size: 15px;
		color: #000000;
	}

	.btn {
		width: 160px;
		height: 44px;
		background: rgba(255, 255, 255, 0.19);
		box-shadow: 0px 29px 10px 0px rgba(0, 0, 0, 0);
		border-radius: 9px 9px 9px 9px;
		border: 1px solid #44F3FA;
		font-weight: 600;
		font-size: 12px;
		color: #FFFFFF;

		&__active {
			color: black;
			background: #FFFFFF;
		}
	}

	.bg3 {
		background-image: url('/static/3.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.bg2 {
		background-image: url('/static/11.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.bg1 {
		background-image: url('/static/CanvaHealth.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.wallet_wrap {
		/* width: 113px; */
		padding: 4px 8px;
		background-color: #44F3FA;
		border-radius: 14px;
		margin-right: 20px;
		font-weight: 600;
		font-size: 12px;
		color: #000000;
		text-align: center;
	}
</style>