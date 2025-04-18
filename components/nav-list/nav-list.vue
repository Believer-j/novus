<template>
	<uv-popup ref="popup" mode="right" :closeOnClickOverlay="false" :safeAreaInsetBottom="false" bgColor="none"
		:overlayOpacity="0.8">
		<view class="flex-column"
			style="width: 100vw; height: 100vh; background: linear-gradient( 90deg, black 0%, rgba(34,155,255,0) 100%);">
			<view class="" style="position: fixed; left: 0px; right: 0px; top: 0px;  z-index: 1;"
				:style="{height: 58 + statusBarHeight + 'px'}">
				<view class="flex-row flex-items-center flex-between" :style="{marginTop: statusBarHeight + 'px'}">
					<image src="/static/header-logo.png" style="width: 165px; height: 58px;">
					</image>
					<uv-icon name="close-circle" color="white" size="24px" style="margin-right: 36px;"
						@click="close"></uv-icon>
				</view>
			</view>
			<view class="" style="width: 100%;" :style="{height: 58 + statusBarHeight + 'px'}">
			</view>
			<view class="flex-column" style="margin-left: 36px; margin-right: 36px; margin-top: 13px; overflow: scroll;"
				:style="{maxHeight: pageHeight - 70 - statusBarHeight + 'px' }">
				<view v-for="(item,index) in list" :key="index" class="flex-column flex-items-end">
					<view class="font-15 font-weight-semibold flex-row-center" style="height: 61px;"
						:style="{color: index == navIndex ? '#44F3FA' : '#FFFFFF'}" @click="listTap(index)">
						{{ item }}
					</view>
					<image src="/static/32.svg" style="width: 178px; height: 2px;"></image>
				</view>
				<image src="/static/33.svg" mode="widthFix" style="width: 100%; margin-top: 23px;"></image>
				<view class="flex-row flex-end flex-items-center"
					style="margin-top: 23px; color: white; position: relative;">
					<view class="flex-row flex-items-center" @click.stop="showLanguage = true">
						<text class="font-15 font-weight-semibold"
							style="margin-right: 8px;">{{ $t('Language') }}</text>
						<uv-icon name="arrow-down-fill" size="12px" color="white"></uv-icon>
					</view>
					<view v-if="showLanguage" class="flex-column"
						style="position: absolute; left: 60%; right: 0px; top: 25px;  background-color: white; border-radius: 6px; z-index: 1; padding-left: 14px;">
						<view class="font-15 font-weight-semibold flex-row flex-items-center"
							style="color: black; height: 40px;" @click="languageTap('en')">
							English
						</view>
						<view class="font-15 font-weight-semibold flex-row flex-items-center"
							style="color: black; height: 40px; border-top: 1px solid #CED5D8;"
							@click="languageTap('cn')">
							简体中文
						</view>
					</view>
				</view>
				<view class="flex-row flex-end flex-items-center" style="margin-top: 25px;">
					<image src="/static/telegram.png" style="width: 18px; height: 18px;"></image>
					<image src="/static/ins.png" style="width: 18px; height: 18px; margin-left: 35px;"></image>
					<image src="/static/tel.png" style="width: 25px; height: 25px; margin-left: 35px;"></image>
					<uv-icon name="chat-fill" color="#CED5D8" size="27px" style="margin-left: 25px;"></uv-icon>
					<uv-icon name="qq-fill" color="#CED5D8" size="27px" style="margin-left: 25px;"></uv-icon>
				</view>
				<view class="flex-row flex-end" style="margin-top: 45px;">
					<view class="flex-row-center"
						style="width: 176px; height: 42px; background: #44F3FA; border-radius: 8px; color: #000000; font-size: 15px; font-weight: 600;">
						{{ $t('stay') }}
					</view>
				</view>
			</view>
		</view>
	</uv-popup>
	<toast ref="toast"></toast>
</template>

<script>
	import base from '@/mixins/base.js'
	export default {
		name: "nav-list",
		mixins: [base],
		props: {
			navIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				links: [''],
				showLanguage: false
			};
		},
		computed: {
			list() {
				return [
					this.$t('Home'),
					this.$t('PledgePool'),
					this.$t('CorePool'),
					this.$t('Refinance'),
					this.$t('NodeCloud'),
					this.$t('Settings'),
				]
			}
		},
		methods: {
			listTap(index) {
				if (index != 0) {
					this.$refs.toast.show({
						msg: this.$t('notOpen'), 
						isError: true,
						complete: () => {
						}
					})
					return
				}
				this.close()
			},
			languageTap(language) {
				this.showLanguage = false
				this.$i18n.locale = language
				this.$store.commit('setLocale', language)
			},
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