<template>
	<view>
		<uv-popup ref="popup" bgColor="none" :closeOnClickOverlay="false" :safeAreaInsetBottom="false">
			<view class="wrap_toast">
				<view class="content_toast flex-column-center">
					<image v-if='isError' src="@/static/toast_error.png" style="width: 60px; height: 60px; margin-top: 14px;"></image>
					<image v-else src="@/static/toast_success.png" style="width: 60px; height: 60px;  margin-top: 14px;"></image>
					<view class="font-family font-20" style="color: #875935; margin: 25px 15px; line-height: 30px; text-align: center;">
						{{ msg }}
					</view>
				</view>
			</view>
		</uv-popup>
	</view>
</template>

<script>
	export default {
		name:"toast",
		data() {
			return {
				timer: null,
				count: 2,
				msg: '',
				isError: false
			};
		},
		methods: {
			show({msg, isError, complete}) {
				this.isError = isError
				this.msg = msg
				if (this.timer) {
					clearInterval(this.timer)
					this.timer = null
				}
				
				this.$refs.popup.open()
				this.count = 2
				this.timer = setInterval(() => {
					if (!--this.count) {
						this.close()
						if (typeof(complete) == 'function') {
							complete()
						}
					}
				}, 1000)
			},
			close() {
				clearInterval(this.timer)
				this.timer = null
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss">
	.wrap_toast {
		width: calc(100vw - 40px);
		min-width: 180px;
		background: RGBA(68, 243, 250, 1);
		border-radius: 20px;
		border: 5px solid RGBA(68, 243, 250, 1);
		.content_toast {
			background-color: white;
			border-radius: 20px;
			border: 5px solid RGBA(68, 243, 250, 1);
			margin: 10px;
			// height: 336px;
		}
	}
</style>