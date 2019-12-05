<template>
	<view>
		<swiperA></swiperA>
		<view>
			<view class="header">
				<text class="cuIcon-location"></text>
				<text>街道名称:</text>
				<text>长安</text>
			</view>
			<view>
				<canvas canvas-id="can"></canvas>
			</view>
		</view>
		
	</view>
</template>

<script>
	import swiperA from '@/component/swiper/swiper.vue'
	export default {
		data() {
			return {
				address:''
			}
		},
		components:{
			swiperA
		},
		methods: {
		},
		onLoad(){
		}
	}
</script>

<style lang='scss'>
.header{
	line-height: 60upx;
	padding-left:34upx;
	font-size:24upx;
	color:#333333;
	border-bottom:1upx solid #EEEEEE;
	border-top:20upx solid #EEEEEE;
	text:nth-of-type(2){
		margin-left:16upx;
		margin-right:16upx;
	}
}
</style>
