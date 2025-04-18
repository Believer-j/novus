<template>
	<view class="wrap " style="background: linear-gradient( 185deg, #000000 0%, #002034 77%, #152271 100%);">

		<view class=""
			style="position: fixed; left: 0px; right: 0px; top: 0px; background: linear-gradient( 180deg, #000000 0%, #000101 100%); z-index: 1;"
			:style="{height: 58 + statusBarHeight + 'px'}">
			<view class="flex-row flex-items-center flex-between" :style="{marginTop: statusBarHeight + 'px'}">>
				<image src="/static/header-logo.png" style="width: 165px; height: 58px; margin-left: -20px;"></image>
				<view class="flex-row flex-items-center" style="margin-right: 29px;">
					<view class="wallet_wrap" @click="wellet">
						{{ shortAddress }}
					</view>
					<image src="/static/8.svg" style="width: 28px; height: 28px;" @click="$refs.navListPopup.open()">
					</image>
				</view>
			</view>
		</view>
		<view class="" style="width: 100%;" :style="{height: 58 + statusBarHeight + 'px'}">
		</view>
		<view class="bg1 flex-column flex-items-center" style="width: 100%; height: 631px; color: white;"
			@click="segmentIndex = undefined">
			<view class="font-24"
				style="margin-left: 60px; margin-right: 60px; text-align: center;margin-top: 30px; font-family: YouSheBiaoTiHei;">
				{{ $t('giveMarket') }}
			</view>
			<p class="font-12 font-weight-semibold" style="margin-top: 25px; color: white;">
				<span>{{ localeXRP == 'en' ? 'Receive ' : '限时领取' }}</span>
				<span style="color: #A3F6FD;">XRP</span>
				<span>{{ localeXRP == 'en' ? ' rewards for a limited time!' : '奖励！' }}</span>
			</p>
			<image src="/static/2.svg" style="width: 353px; height: 271px;"></image>
			<view class="flex-row-center" style="margin-top: 94px;">
				<view class="btn flex-row-center" :class="[segmentIndex == 0 && 'btn__active']"
					@click.stop="segmentIndex = 0">
					<text>{{ $t('NodePurchase') }}</text>
					<image :src="`/static/${segmentIndex == 0 ? '28' : '1'}.svg`"
						style="width: 10px; height: 11px; margin-left: 4px;"></image>
				</view>
				<view class="btn flex-row-center" style="margin-left: 10px;"
					:class="[segmentIndex == 1 && 'btn__active']" @click.stop="segmentIndex = 1">
					<text>{{ $t('InviteFriends') }}</text>
					<image :src="`/static/${segmentIndex == 1 ? '28' : '1'}.svg`"
						style="width: 10px; height: 11px; margin-left: 4px;"></image>
				</view>
			</view>
		</view>
		<view v-if="segmentIndex == 0" class="alert flex-column flex-items-center" style="color: black;">
			<view class="font-15" style="margin-top: 15px; font-family: YouSheBiaoTiHei;">
				{{ $t('NOVUSnodepurchase') }}
			</view>
			<view class=" font-12 font-weight-semibold"
				style="color: #6A6A6A;  width: 289px;  margin-top: 25px; padding-bottom: 30px; ">
				<uv-line-progress :percentage="60" activeColor="#13F3DD" inactiveColor="#F4F4F4">
					<text class="uv-percentage-slot">{{30}}%</text>
				</uv-line-progress>
				<view class="flex-row flex-items-center flex-between"
					style="color: #000000; font-size: 10px; margin-top: 4px;">
					<text>11/100</text>
					<text>100USDT</text>
				</view>
				<view class="flex-row flex-items-center flex-between"
					style="border: 1px solid #B9B9B9; height: 36px; margin-top: 17px; color: #9B9B9B; border-radius: 8px; font-size: 10px; padding-left: 10px; padding-right: 10px;">
					<text>{{ $t('Number') }}</text>
					<uv-number-box v-model="usdtStepValue" bgColor="#fff" inputWidth="50px" color="#A6A6A6"
						@change="usdtStepValueChange"></uv-number-box>
					<text>USDT</text>
				</view>
				<view class="" style="color: #9B9B9B; font-size: 10px; font-synthesis-weight: 500; margin-top: 7px;">
					{{ `${$t('USDTbalance')} ${'12345'}` }}
				</view>
				<view class="" style="color: #636BFF; font-size: 10px; font-synthesis-weight: 500; margin-top: 2px;">
					{{ `${$t('Full')}: 3333 NOVUS` }}
				</view>
				<view class="" style="color: #9B9B9B; font-size: 10px; font-synthesis-weight: 500; margin-top: 17px;">
					{{ `${$t('LatestPrice')}: ${'12345'}USDT` }}
				</view>
				<view class="" style="color: #9B9B9B; font-size: 10px; font-synthesis-weight: 500; margin-top: 2px;">
					{{ `${$t('TotalPrice')}: ${'12345'}USDT` }}
				</view>
				<view class="flex-row-center"
					style="background-color: #000000; height: 36px; margin-top: 11px; border-radius: 8px; color: white; font-size: 10px; font-weight: 500;">
					<text>{{ $t('ImmediateParticipation') }}</text>
					<image src="/static/18.svg" style="width: 11px; height: 9px; margin-left: 4px; margin-top: 2px;">
					</image>
				</view>
				<view class="flex-row flex-items-center flex-between"
					style="margin-top: 8px; height: 51px; border-radius: 8px; border: 1px solid #00C594; padding-left: 10px; padding-right: 10px;">
					<view class="flex-column">
						<text style="color: #9B9B9B; font-size: 10px;">{{ $t('Subscribed') }}</text>
						<text style="color: #060606; font-size: 10px; font-size: 500;">11</text>
					</view>
					<image src="/static/19.svg" style="width: 16px;height: 16px;"></image>
					<view class="flex-column flex-items-end">
						<text style="color: #9B9B9B; font-size: 10px;">{{ $t('Obtainable') }}</text>
						<text style="color: #060606; font-size: 10px; font-size: 500;">11</text>
					</view>
				</view>
				<view class="" style="color: #9B9B9B; font-size: 10px; font-synthesis-weight: 500; margin-top: 23px;">
					{{ `${$t('CurrentHoldings')}: ${'12345'}USDT` }}
				</view>
				<view class="flex-row-center"
					style="background-color: #44F3FA; height: 36px; margin-top: 5px; border-radius: 8px; color: #060606; font-size: 10px; font-weight: 500;"
					@click="showTransfer">
					<text>{{ $t('Transfer') }}</text>
				</view>
				<view class="flex-column-center"
					style="margin-top: 12px; color: #636BFF; font-size: 10px; font-weight: 500;" @click="gotoRules">
					<text>{{ $t("NOVUSRule") }}</text>
					<image src="/static/20.svg" style="width:14px; height:13px; margin-top: 3px;"></image>
				</view>
			</view>

		</view>
		<view v-if="segmentIndex == 1" class="alert flex-column flex-items-center" style="color: black;">
			<view class="font-15" style="margin-top: 15px; font-family: YouSheBiaoTiHei;">
				{{ $t('InviteFriendsToParticipate') }}
			</view>
			<image src="/static/30.svg" style="width: 137px; height: 134px;"></image>
			<view class="font-12 font-weight-semibold">
				{{ `${$t('InviteRewards')} ${`100 NOV`}/${$t('person')}` }}
			</view>
			<view class="font-12 font-weight-semibold"
				style="color: #6A6A6A;  width: 289px;  margin-top: 25px; padding-bottom: 40px;">
				<text>{{ $t('InvitationLink') }}</text>
				<view class="flex-row flex-items-center flex-between"
					style=" margin-top: 2px; padding: 10px 16px; background: rgba(0,197,148,0); border-radius: 8px; border: 1px solid #B9B9B9; ">
					<view class=""
						style="color: #B9B9B9; font-size: 400; max-width: calc(100% - 24px); word-break: break-all;">
						4dasd1232134dasd1232134
					</view>
					<image src="/static/27.svg" style="width: 13px; height: 16px; min-width: 13px;"></image>
				</view>
				<view style="margin-top: 14px;">{{ $t('InvitationCode') }}</view>
				<view class="flex-row flex-items-center flex-between"
					style=" margin-top: 2px; padding: 10px 16px; background: rgba(0,197,148,0); border-radius: 8px; border: 1px solid #B9B9B9; ">
					<view class=""
						style="color: #B9B9B9; font-size: 400; max-width: calc(100% - 24px); word-break: break-all;">
						4dasd1232134dasd1232134
					</view>
					<image src="/static/27.svg" style="width: 13px; height: 16px; min-width: 13px;"></image>
				</view>
			</view>
		</view>
		<view class="bg2" style="width: 100%;">
			<view class="bg2 flex-column"
				style="width: 100%;  background-image: url('/static/10.svg'); margin-top: 19px;">
				<view class="text1">
					NOUVS 概述
				</view>
				<view class=""
					style="padding: 14px; border: 1px solid #EAEAEA; border-radius: 8px; margin: 14px 40px 0px 40px; color: #848484; font-size: 10px; font-weight: 500;">
					NOVUS旨在打造一个基于区块链技术的去中心化加密支付网络，实现“交易即收益，流通即价值”的全新生态。作为整个生态的基石，本项目发行总量为10亿枚的代币，将通过挖矿机制不断产出，同时采用严格的销毁机制，使代币总量最终缩减至2100万枚，从而保证其稀缺性和长期价值。
				</view>
			</view>
		</view>

		<view class="flex-column" style="background-color: white; ">
			<view class="text1" style="margin-top: 26px;">
				{{ $t('whyChooseNovus') }}
			</view>
			<view class="flex-column"
				style="margin-top: 15px; margin-left: 40px; margin-right: 40px; color: #848484; font-size: 10px; font-weight: 500;">
				<view v-for="(item,index) in whys" :key="index" class="flex-column"  style="border: 1px solid #EAEAEA; border-radius: 8px; padding: 17px 16px; margin-bottom: 3px;">
					<view class="flex-row flex-items-center" style="margin-left: 10px;">
						<image :src="`/static/${item.icon}.svg`" style="width: 20px; height: 20px;"></image>
						<text style="color: #000000; font-size: 11px; font-weight: 500; margin-left: 8px;">{{ item.name }}</text>
					</view>
					<view v-for="(subItem,subIndex) in item.subs" :key="subIndex" class="flex-row" style="margin-top: 10px; font-size: 10px; color: #848484; font-weight: 500;">
						<view style="width: 5px; height: 5px; border-radius: 50%; background-color: rgba(132, 132, 132, 0.6); min-width: 5px; margin-top: 5px;"></view>
						<view class="" style="margin-left: 5px;">
							{{ subItem }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex-column" style="background-color: white; ">
			<view class="text1" style="margin-top: 26px;">
				{{ $t('trait') }}
			</view>
			<view class="flex-column"
				style="margin-top: 15px; margin-left: 40px; margin-right: 40px; color: #848484; font-size: 10px; font-weight: 500;">
				<view v-for="(item,index) in traits" :key="index" class="flex-column"  style="border: 1px solid #EAEAEA; border-radius: 8px; padding: 17px 16px; margin-bottom: 15px;">
					<view class="flex-row flex-items-center" style="margin-left: 10px;">
						<image :src="`/static/${item.icon}.svg`" style="width: 20px; height: 20px;"></image>
						<text style="color: #000000; font-size: 11px; font-weight: 500; margin-left: 8px;">{{ item.name }}</text>
					</view>
					<view v-for="(subItem,subIndex) in item.subs" :key="subIndex" class="flex-row" style="margin-top: 10px; font-size: 10px; color: #848484; font-weight: 500;">
						<view style="width: 5px; height: 5px; border-radius: 50%; background-color: rgba(132, 132, 132, 0.6); min-width: 5px; margin-top: 5px;"></view>
						<view class="" style="margin-left: 5px;">
							{{ subItem }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex-column" style="background-color: white; padding-bottom: 45px;">
			<view class="text1" style="margin-top: 26px;">
				{{ $t('partner') }}
			</view>
			<view class="flex-row flex-items-center flex-between"
				style="margin-top: 15px; margin-left: 40px; margin-right: 40px; color: #848484; font-size: 10px; font-weight: 500;">
				<view v-for="(item,index) in 4" :key="index" style="border: 1px solid #EAEAEA; height: 59px; border-radius: 8px; width: calc((100% - 28px) * 0.25);">
					
				</view>
			</view>
		</view>
		<image src="/static/test.png" mode="widthFix" style="width: 100%;"></image>
		<view class="flex-row-center" style="width: 100%; height: 140px; background-color: black;">
			<image src="/static/header-logo.png" style="width: 165px; height: 58px; margin-left: -20px;"></image>
		</view>
		<uv-popup ref="transfer" mode="center" round="9px" :safeAreaInsetBottom="false">
			<view id="transferPop" class="flex-column" style="width: 319px; height: 222px; color: #000000;">
				<view class="font-15" style="margin-top: 27px; text-align: center; font-family: YouSheBiaoTiHei;">
					{{ $t('Transfer') }}
				</view>
				<view class=""
					style="margin-left: 16px; margin-right: 16px; margin-top: 19px; border-radius: 9px;  height: 36px;">
					<uv-input :placeholder="$t('Address')"></uv-input>
				</view>
				<view class=""
					style="margin-left: 16px; margin-right: 16px; margin-top: 9px; border-radius: 9px;  height: 36px;">
					<uv-input :placeholder="$t('AmountNumber')"></uv-input>
				</view>
				<view class="flex-row flex-items-center flex-between font-weight-medium"
					style="margin: 9px 16px 29px 16px; font-size: 12px;">
					<view class="flex-row-center"
						style="width: 98px; height: 37px; background: rgba(179,179,179,0.2); border-radius: 8px;"
						@click="$refs.transfer.close()">
						{{ $t('Cancel') }}
					</view>
					<view class="flex-row-center"
						style="width: 179px; height: 37px; background: #44F3FA; border-radius: 8px;" @click="transfer">
						{{ $t('Transfer') }}
					</view>
				</view>
			</view>
		</uv-popup>
		<nav-list ref="navListPopup"></nav-list>
		<toast ref="toast"></toast>
		<ParticleCanvas></ParticleCanvas>
		<explosionCanvas ref="partyFire"></explosionCanvas>
	</view>
</template>

<script>
	import base from '@/mixins/base.js'
	import {
		getConfigApi
	} from '@/request/api.js'
	export default {
		mixins: [base],
		data() {
			return {
				segmentIndex: undefined,
				usdtStepValue: 0
			}
		},
		computed: {
			localeXRP() {
				let locale = this.$store.state.locale
				return locale
			},
			traits() {
				return [
					{
						name: this.$t('traitTitle1'),
						subs: [this.$t('traitTitle1_1'), this.$t('traitTitle1_2'), this.$t('traitTitle1_3')],
						icon: '27'
					},
					{
						name: this.$t('traitTitle2'),
						subs: [this.$t('traitTitle2_1'), this.$t('traitTitle2_2'), this.$t('traitTitle2_3')],
						icon: '27'
					}
				]
			},
			whys() {
				return [
					{
						name: this.$t('whyTitle1'),
						subs: [this.$t('whyAsk1_1'), this.$t('whyAsk1_2')],
						icon: '27'
					},
					{
						name: this.$t('whyTitle2'),
						subs: [this.$t('whyAsk2_1'), this.$t('whyAsk2_2')],
						icon: '27'
					},
					{
						name: this.$t('whyTitle3'),
						subs: [this.$t('whyAsk3_1'), this.$t('whyAsk3_2')],
						icon: '27'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			gotoRules() {
				uni.navigateTo({
					url: '/pages/rules/rules'
				})
			},
			transfer() {
				var canvas = document.getElementById('transferPop');
				this.$refs.partyFire.triggerEffect(canvas)
				this.$refs.transfer.close()
			},
			showTransfer() {
				this.$refs.transfer.open()
			},
			async wellet() {
				// const res = await getConfigApi()
				this.$store.dispatch('login')
				// this.$refs.toast.show({
				// 	msg: 'fhjshfkj',
				// 	isError: true,
				// 	complete: () => {
				// 		console.log('结束')
				// 	}
				// })
			},
			usdtStepValueChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>

<style lang="scss">
	.uv-percentage-slot {
		padding: 1px 5px;
		background-color: #13F3DD;
		color: #848484;
		border-radius: 100px;
		font-size: 10px;
		margin-right: -5px;
		border: 1px solid #FFFFFF;
	}

	.alert {
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

	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.container1 {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header {
		width: 100%;
		text-align: center;
		pointer-events: none;
		user-select: none;
		background: #eeeeee;
		padding: 20px 0;
		border-top: 2px solid #cdd5d7;
		border-bottom: 2px solid #cdd5d7;
	}
</style>