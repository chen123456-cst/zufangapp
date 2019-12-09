<template>
	<view>
	<cnav title="社区管理"></cnav>
	<!-- 头部图片 -->
	<view class="header">
		<image src="../../static/img/2.jpg" mode="aspectFill"></image>
	</view>
	<!-- 街道管理员 -->
	<view class="headerman">
		<view>
			<view class="imgbox">
				<image src="../../static/img/7.png" mode="aspectFill"></image>
			</view>
		</view>
		<view>
			<view class="human">
				<text>街道管理员</text>
				<text>{{phone}}</text>
				<text @tap="msg">私信</text>
			</view>
		</view>
	</view>
	<view class="allmsg">
		<allmsg></allmsg>
	</view>
	<!-- 今日故事 -->
	<view class="msgtitle">
		<msgtitle></msgtitle>
	</view>
	</view>
</template>

<script>
	import cnav from '../cnav/cnav.vue'
	import allmsg from '../../component/allmsg/allmsg.vue'
	import msgtitle from '../../component/msgtitle/msgtitle.vue'
	export default {
		components:{
			cnav,
			allmsg,
			msgtitle
		},
		data() {
			return {
				phone:'18875152489'
			}
		},
		methods: {
			// 私信
			msg(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width:100%;
		height:294upx;
		image{
			width:100%;
			height:100%;
			z-index: -999;
		}
	}
	.headerman{
		width:614upx;
		height: 200upx;
		background: #fff;
		box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.16);
		border-radius:10px;
		margin: -100upx auto;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		>view{
			width:50%;
			height:100%;
			.imgbox{
				width:146upx;
				height: 146upx;
				border-radius: 50%;
				margin-left: 124upx;
				margin-top: 24upx;
				image{
					width:100%;
					height:100%;
					border-right: 50%;
				}
				
			}
			.human{
				display: flex;
				align-items: center;
				flex-direction: column;
				>text{
					margin-top: 18upx;
					font-size: 24upx;
				}
				>text:nth-of-type(1){
				}
				>text:nth-of-type(1){
					color:#333;
					font-size: 30upx;
				}
				>text:nth-of-type(2){
					color:#ccc;
				}
				>text:nth-of-type(3){
					width:134upx;
					border-radius: 10upx;
					border:2px solid #0081FF;
					text-align: center;
					line-height: 48upx;
					color:#007AFF;
				}
			}
		}
	}
	.allmsg{
		margin-top:160upx;
	}
	.msgtitle{
		margin-top: 20upx;
	}
</style>
