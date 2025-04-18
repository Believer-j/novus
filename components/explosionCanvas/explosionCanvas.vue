<!-- components/particle-effect.vue -->
<template>
	<view >
	</view>
</template>

<script>
	import party, {
		Rect
	} from "party-js";
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
			}
		},
		mounted() {
			this.initWindowSize()
		},
		methods: {
			initWindowSize() {
				const systemInfo = uni.getSystemInfoSync()
				this.windowWidth = systemInfo.windowWidth
				this.windowHeight = systemInfo.windowHeight
			},
			triggerEffect(v) {
				
				// let rect = new Rect(this.windowWidth * 0.5, this.windowHeight * 0.5)
				party.confetti(v);
			},
			triggerSparkles() {
				let rect = new Rect(this.windowWidth * 0.5, this.windowHeight * 0.5)
				party.sparkles(rect);
			}
		}
	}
</script>