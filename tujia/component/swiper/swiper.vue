<template>
	<view>
		<swiper class="swiper"  :autoplay="autoplay" >
			<swiper-item v-for="(item,index) in imglist" :key="index"> 
				<view class="swiper-item uni-bg-red">
					<image :src="item" mode="aspectFill" ></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="nav1">
			<view @click="handlesel(0)">
				<view class="kuang orange">
				<text class="cuIcon-barcode"></text>
				</view>
				<view class="content" >街道管理</view>
			</view>
			<view  @click="handlesel(1)">
				<view class="kuang green">
				<text class="cuIcon-friend"></text>
				</view>
				<view class="content" >街道成员</view>
			</view>
			<view  @click="handlesel(2)">
				<view class="kuang blue">
				<text class="cuIcon-settings"></text>
				</view>
				<view class="content" @click="handlesel(2)">我的报修</view>
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
				 duration: 500,
				 imglist:['../../static/img/1.jpg','../../static/img/2.jpg','../../static/img/3.jpg',]
			}
		},
		methods:{
			handle(i){
				uni.navigateTo({
					url:i
				})
			},
			// 子父通信
			handlesel(i){
				this.$emit('tranfrom',i)
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
	.swiper-item,image{
		height:100%;
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
