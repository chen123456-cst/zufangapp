<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
		<view class="nav1">
			<view>
				<view class="kuang orange">
				<text class="cuIcon-barcode"></text>
				</view>
				<view class="content">街道管理</view>
			</view>
			<view>
				<view class="kuang green">
				<text class="cuIcon-friend"></text>
				</view>
				<view class="content">街道成员</view>
			</view>
			<view>
				<view class="kuang blue">
				<text class="cuIcon-settings"></text>
				</view>
				<view class="content">我的报修</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				 background: ['color1', 'color2', 'color3'],
				 indicatorDots: true,
				 autoplay: true,
				 interval: 2000,
				 duration: 500
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav1{
		display: flex;
		height:200upx;
		justify-content:space-around;
		align-items: center;
		>view{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.kuang{
		width:101upx;
		height:101upx;
		background:rgba(253,185,185,1);
		border-radius:30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		text{
			font-size:54upx;
			color:#fff;
		}
	}
	.content{
		margin-top:8upx;
	}
	.green{
		background:#14A4AF;
	}
	.blue{
		background: #09417A;
	}
</style>
