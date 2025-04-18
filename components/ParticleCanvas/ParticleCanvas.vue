<template>
	<canvas id="particleCanvas" class="canvas" style="pointer-events: none;"
		:style="{width: windowWidth + 'px', height: windowHeight + 'px'}">
	</canvas>
</template>

<script>
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
				ctx: null,
				flg: true,
				mouseX: null,
				mouseY: null,
				particles: [],
				particleNum: 500,
				animationFrameId: null
			}
		},
		mounted() {
			this.initCanvas()
			this.initWindowSize()
			this.initParticles()
			this.startAnimation()
			this.bindEvents()
		},
		beforeDestroy() {
			this.unbindEvents()
			if (this.animationFrameId) {
				cancelAnimationFrame(this.animationFrameId)
			}
		},
		methods: {
			initWindowSize() {
				const systemInfo = uni.getSystemInfoSync()
				this.windowWidth = systemInfo.windowWidth
				this.windowHeight = systemInfo.windowHeight
			},
			initCanvas() {
				const query = uni.createSelectorQuery().in(this)
				query.select('#particleCanvas')
					.fields({
						node: true,
						size: true
					})
					.exec((res) => {
						const canvas = res[0].node
						this.ctx = canvas.getContext('2d')
						canvas.width = res[0].width
						canvas.height = res[0].height
					})
			},
			rand(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min)
			},
			initParticles() {
				this.particles = []
				const num = this.windowWidth < 768 ? 15 : 500

				for (let i = 0; i < num; i++) {
					this.particles.push({
						x: this.rand(0, this.windowWidth),
						y: this.rand(0, this.windowHeight),
						x1: 0,
						y1: 0,
						r: this.rand(1, 20),
						v: {
							x: this.rand(-10, 10) * Math.random() * 0.5,
							y: this.rand(-10, 10) * Math.random() * 0.5
						},
						c: {
							r: this.rand(128, 255),
							g: this.rand(128, 255),
							b: this.rand(128, 255)
						}
					})
				}
			},
			drawParticle(particle) {
				const ctx = this.ctx
				ctx.save()
				ctx.beginPath()
				ctx.globalAlpha = 0.8
				ctx.fillStyle = `rgb(${particle.c.r}, ${particle.c.g}, ${particle.c.b})`
				ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2, false)
				ctx.fill()
				ctx.restore()
			},
			updateParticlePosition(particle) {
				if (this.mouseX !== null) {
					if (this.flg) {
						const angle = Math.atan2(particle.y1 - this.mouseY, particle.x1 - this.mouseX)
						particle.x -= Math.cos(angle) * 5
						particle.y -= Math.sin(angle) * 5
						particle.x1 = particle.x
						particle.y1 = particle.y
					}
				}
				particle.x += particle.v.x
				particle.y += particle.v.y
			},
			wrapParticlePosition(particle) {
				if (particle.x - particle.r < 0) {
					particle.v.x *= -1
				}
				if (particle.x + particle.r > this.windowWidth) {
					particle.v.x *= -1
				}
				if (particle.y - particle.r < 0) {
					particle.v.y *= -1
				}
				if (particle.y + particle.r > this.windowHeight) {
					particle.v.y *= -1
				}
			},
			render() {
				if (!this.ctx) return

				this.ctx.clearRect(0, 0, this.windowWidth, this.windowHeight)

				this.particles.forEach(particle => {
					this.updateParticlePosition(particle)
					this.wrapParticlePosition(particle)
					this.drawParticle(particle)
				})

				this.animationFrameId = requestAnimationFrame(this.render)
			},
			startAnimation() {
				this.animationFrameId = requestAnimationFrame(this.render)
			},
			bindEvents() {
				return
				// 窗口大小变化
				uni.onWindowResize(() => {
					const systemInfo = uni.getSystemInfoSync()
					this.windowWidth = systemInfo.windowWidth
					this.windowHeight = systemInfo.windowHeight

					const query = uni.createSelectorQuery().in(this)
					query.select('#particleCanvas')
						.fields({
							node: true,
							size: true
						})
						.exec((res) => {
							const canvas = res[0].node
							canvas.width = res[0].width
							canvas.height = res[0].height
						})

					this.particles.forEach(particle => {
						particle.x = this.rand(0, this.windowWidth)
						particle.y = this.rand(0, this.windowHeight)
					})
				})

				// 点击事件
				document.addEventListener('click', this.handleClick)

				// 鼠标移动
				document.addEventListener('mousemove', this.handleMouseMove)

				// 触摸移动
				document.addEventListener('touchmove', this.handleTouchMove)
			},
			unbindEvents() {
				uni.offWindowResize()
				document.removeEventListener('click', this.handleClick)
				document.removeEventListener('mousemove', this.handleMouseMove)
				document.removeEventListener('touchmove', this.handleTouchMove)
			},
			handleClick() {
				this.flg = !this.flg
			},
			handleMouseMove(e) {
				this.mouseX = e.clientX
				this.mouseY = e.clientY
			},
			handleTouchMove(e) {
				if (e.targetTouches.length === 1) {
					const touch = e.targetTouches[0]
					this.mouseX = touch.pageX
					this.mouseY = touch.pageY
				}
			}
		}
	}
</script>

<style scoped>
	

	.canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		
	}
</style>