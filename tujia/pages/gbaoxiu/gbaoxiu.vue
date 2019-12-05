<template>
	<view>
		<swiperA></swiperA>
		<view class='nav'>
			<view :class="num==1?'active':''" @tap="num=1">当前报修</view>
			<view :class="num==2?'active':''" @tap="num=2">报修记录</view>
		</view>
		<view>
			<gbaoxiu></gbaoxiu>
		</view>
	</view>
</template>

<script>
	import swiperA from '../../component/swiper/swiper.vue'
	import gbaoxiu from '../../component/gbaoxiu/index.vue'
	export default {
		data() {
			return {
				num:1
			}
		},
		methods: {
			
		},
		components:{
			swiperA,
			gbaoxiu
		}
	}
</script>

<style lang="scss">
.nav{
	display: flex;
	view{
		width:50%;
		height:80upx;
		line-height: 80upx;
		text-align: center;
	}
	view.active{
		color:#1BA3AF;
		border-bottom:2upx solid #1BA3AF;
	}
}
</style>
