<template>
	<view class="wrap " style="background: #fff; ">
		<view class="flex-row-center"
			style="position: fixed; width: 30px; height: 30px; background-color: rgba(0, 0, 0, 0.5); border-radius: 50%; left: 15px;"
			:style="{top: statusBarHeight + 10 + 'px'}" @click="back">
			<uv-icon name="arrow-left" color="white"></uv-icon>
		</view>
		<view class="flex-column"
			style="margin-left: 40px; margin-right: 40px; margin-top: 40px; color: black; font-size: 20px;">
			<view class="" style="font-family: YouSheBiaoTiHei; text-align: center;">
				{{ $t('ruleTile') }}
			</view>
			<view class="name">
				{{ $t('ruleTitle1') }}
			</view>
			<view class="msg" style="margin-top: 8px;">
				{{ $t('ruleTitle1_1') }}
			</view>
			<view class="msg" style="margin-top: 14px;">
				{{ $t('ruleTitle1_1') }}
			</view>
			<view v-for="(item,index) in contents" :key="index">
				<view class="name">
					{{ item.name }}
				</view>
				<view v-for="(subItem,subIndex) in item.subs" :key="subIndex">
					<view class="msg" style="margin-top: 18px;">
						{{ subItem.name }}
					</view>
					<view v-for="(sItem,sIndex) in subItem.subs" :key="sIndex" class="flex-row "
						style="margin-left: 15px; margin-top: 8px;">
						<view
							style="width: 5px; height: 5px; border-radius: 50%; background-color: rgba(132, 132, 132, 0.6); min-width: 5px; margin-top: 5px;">
						</view>
						<view class="msg" style="margin-left: 8px; ">
							{{ sItem }}
						</view>
					</view>
				</view>
			</view>
			<view class="name">
				{{ $t('ruleTitle10') }}
			</view>
			<view class="flex-row " style="margin-left: 15px; margin-top: 8px;">
				<view
					style="width: 5px; height: 5px; border-radius: 50%; background-color: rgba(132, 132, 132, 0.6); min-width: 5px; margin-top: 5px;">
				</view>
				<view class="msg" style="margin-left: 8px;">
					{{ $t('ruleTitle10_1') }}
				</view>
			</view>
			<view class="flex-row " style="margin-left: 15px; margin-top: 8px; margin-bottom: 44px;">
				<view
					style="width: 5px; height: 5px; border-radius: 50%; background-color: rgba(132, 132, 132, 0.6); min-width: 5px; margin-top: 5px;">
				</view>
				<view class="msg" style="margin-left: 8px;">
					{{ $t('ruleTitle10_2') }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import base from '@/mixins/base.js'
	export default {
		mixins: [base],
		data() {
			return {

			}
		},
		computed: {
			contents() {
				return [{
					name: this.$t('ruleTitle2'),
					subs: [{
							name: this.$t('ruleTitle2_1'),
							subs: [this.$t('ruleTitle2_1_1'), this.$t('ruleTitle2_1_2')]
						},
						{
							name: this.$t('ruleTitle2_2'),
							subs: [this.$t('ruleTitle2_2_1'), this.$t('ruleTitle2_2_2'), this.$t(
								'ruleTitle2_2_3')]
						}
					]
				}, {
					name: this.$t('ruleTitle3'),
					subs: [{
							name: this.$t('ruleTitle3_1'),
							subs: [this.$t('ruleTitle3_1_1'), this.$t('ruleTitle3_1_2')]
						},
						{
							name: this.$t('ruleTitle3_2'),
							subs: [this.$t('ruleTitle3_2_1'), this.$t('ruleTitle3_2_2')]
						},
						{
							name: this.$t('ruleTitle3_3'),
							subs: [this.$t('ruleTitle3_3_1'), this.$t('ruleTitle3_3_2')]
						}
					]
				}, {
					name: this.$t('ruleTitle4'),
					subs: [{
							name: this.$t('ruleTitle4_1'),
							subs: [this.$t('ruleTitle4_1_1'), this.$t('ruleTitle4_1_2')]
						},
						{
							name: this.$t('ruleTitle4_2'),
							subs: [this.$t('ruleTitle4_2_1'), this.$t('ruleTitle4_2_2')]
						}
					]
				}, {
					name: this.$t('ruleTitle5'),
					subs: [{
							name: this.$t('ruleTitle5_1'),
							subs: [this.$t('ruleTitle5_1_1'), this.$t('ruleTitle5_1_2')]
						},
						{
							name: this.$t('ruleTitle5_2'),
							subs: [this.$t('ruleTitle5_2_1'), this.$t('ruleTitle5_2_2'), this.$t(
								'ruleTitle5_2_3')]
						},
						{
							name: this.$t('ruleTitle5_3'),
							subs: [this.$t('ruleTitle5_3_1'), this.$t('ruleTitle5_3_2'), this.$t(
								'ruleTitle5_3_3')]
						}
					]
				}, {
					name: this.$t('ruleTitle6'),
					subs: [{
							name: this.$t('ruleTitle6_1'),
							subs: [this.$t('ruleTitle6_1_1'), this.$t('ruleTitle6_1_2'), this.$t(
								'ruleTitle6_1_3')]
						},
						{
							name: this.$t('ruleTitle6_2'),
							subs: [this.$t('ruleTitle6_2_1'), this.$t('ruleTitle6_2_2'), this.$t(
								'ruleTitle6_2_3')]
						}
					]
				}, {
					name: this.$t('ruleTitle7'),
					subs: [{
							name: this.$t('ruleTitle7_1'),
							subs: [this.$t('ruleTitle7_1_1'), this.$t('ruleTitle7_1_2'), this.$t(
								'ruleTitle7_1_3')]
						},
						{
							name: this.$t('ruleTitle7_2'),
							subs: [this.$t('ruleTitle7_2_1'), this.$t('ruleTitle7_2_2'), this.$t(
								'ruleTitle7_2_3')]
						},
						{
							name: this.$t('ruleTitle7_3'),
							subs: [this.$t('ruleTitle7_3_1'), this.$t('ruleTitle7_3_2'), this.$t(
								'ruleTitle7_3_3')]
						}
					]
				}, {
					name: this.$t('ruleTitle8'),
					subs: [{
							name: this.$t('ruleTitle8_1'),
							subs: [this.$t('ruleTitle8_1_1'), this.$t('ruleTitle8_1_2'), this.$t(
								'ruleTitle8_1_3')]
						},
						{
							name: this.$t('ruleTitle8_2'),
							subs: [this.$t('ruleTitle8_2_1'), this.$t('ruleTitle8_2_2'), this.$t(
								'ruleTitle8_2_3')]
						}
					]
				}, {
					name: this.$t('ruleTitle9'),
					subs: [{
							name: this.$t('ruleTitle9_1'),
							subs: [this.$t('ruleTitle9_1_1'), this.$t('ruleTitle9_1_2')]
						},
						{
							name: this.$t('ruleTitle9_2'),
							subs: [this.$t('ruleTitle9_2_1'), this.$t('ruleTitle9_2_2')]
						},
						{
							name: this.$t('ruleTitle9_3'),
							subs: [this.$t('ruleTitle9_3_1'), this.$t('ruleTitle9_3_2')]
						}
					]
				}, ]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.msg {
		font-weight: 500;
		font-size: 12px;
		color: #848484;
	}

	.name {
		font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
		font-weight: 400;
		font-size: 16px;
		color: #000000;
		margin-top: 38px;
	}
</style>