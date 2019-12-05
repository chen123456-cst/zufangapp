<template>
	<view>
		<swiperA></swiperA>
		<view class="bgbox">
			<view class="header">
				<text>业主</text>
				<text></text>
				<text>09</text>
				<text>邀请加入街道</text>
			</view>
			<view class="box">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in 3">
						<view class="swiper-item">
							<view v-for="(item,index) in 8" class="imgd" @tap="handleShow">
								<text>{{item}}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="bgbox">
			<view class="header">
				<text>商户</text>
				<text></text>
				<text>09</text>
				<text>邀请加入街道</text>
			</view>
			<view class="box">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in 3">
						<view class="swiper-item">
							<view v-for="(item,index) in 8" class="imgd">
								<text>{{item}}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="motai" v-show='isShow'>
			<view>
			<image src="../../static/logo.png" mode=""></image>
			<view>昵称</view>
			<view>电话</view>
			<view>地址</view>
			<textarea value="" placeholder="备注信息" />
			<view>保存</view>
			<text class="cuIcon-close" @tap="isShow=false"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import swiperA from '../../component/swiper/swiper.vue'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				isShow:false
			}
		},
		methods: {
			handleShow(){
				this.isShow=true
			}
		},
		components: {
			swiperA
		}
	}
</script>

<style lang="scss" scoped>
.box{
	height:347upx;
}
.swiper{
	height:347upx;
}
.swiper-item{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-around;
	padding:0 37upx;
	height:347upx;
}
.imgd{
	width:136upx;
	height:136upx;
	border-radius: 50%;
	border:1upx solid #EEEEEE;
}
.header{
	height:79upx;
	line-height:79upx;
	margin-left:35upx;
	position:relative;
	text:nth-of-type(1){
		font-size:30upx;
		color:rgba(51,51,51,1);
	}
	text:nth-of-type(2){
		display:inline-block;
		width:2upx;
		height:18upx;
		background:#EEEEEE;
		margin:0 20upx;
	}
	text:nth-of-type(3){
		font-size:24upx;
		color:rgba(153,153,153,1);
	}
	text:nth-of-type(4){
		font-size:24upx;
		color:#fff;
		width:190upx;
		height:50upx;
		background:rgba(0,67,129,1);
		border-radius:10upx;
		display: inline-block;
		line-height:50upx;
		text-align: center;
		position:absolute;
		right:36upx;
		top:15upx;	
	}
}
.bgbox{
	border-top:20upx solid #EEEEEE;
	border-bottom:20upx solid #EEEEEE;
}
.motai{
	position:fixed;
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.3);
	top:0;
	left:0;
	>view{
		width:430upx;
		height:523upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		position:absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		image{
			width:179upx;
			height:179upx;
			border-radius:50%;
			position:absolute;
			top:-89.5upx;
			left:126upx;
		}
		view{
			text-align: center;
			font-size:15upx;
		}
		view:nth-of-type(1){
			margin-top:107upx;
			font-size:30upx;
			font-weight: 600;
		}
		textarea{
			width:388upx;
			height:200upx;
			font-size:24upx;
			color:#999999;
			border:1upx solid #EEEEEE;
			padding:17upx 18upx;
			margin:10upx 0 23upx 20upx;
		}
		view:nth-of-type(4){
			width:386upx;
			height:41upx;
			background:rgba(0,67,129,1);
			border-radius:10upx;
			color:#fff;
			text-align: center;
			line-height: 41upx;
			margin-left:22upx;
		}
		text{
			position:absolute;
			right:19upx;
			top:19upx;
		}
	}
}
</style>
