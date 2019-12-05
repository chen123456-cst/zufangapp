<template>
	<view>
		<cnav title="我的" :isshow="true"></cnav>
		<!-- 头部图片 -->
		<view class="header">
			<image src="../../static/img/2.jpg" mode="aspectFill"></image>
		</view>
		<!-- 街道管理员 -->
		<view class="headerman">
			<view class="imgbox">
				<image src="../../static/img/1.jpg" mode="aspectFill"></image>
			</view>
			<view class="username">{{name}}</view>
		</view>
		<!-- 列表 -->
		<view class="cu-bar bg-white cu" @tap="login('centmsg/centmsg')">
		基本信息
		<text class="cuIcon-right" ></text>
		</view>
		<view class="cu-bar bg-white" @tap="login('safe/safe')">
		账号安全
		<text class="cuIcon-right" ></text>
		</view>
		<view class="cu-bar bg-white" @tap="login('mysafe/mysafe')">
		我的保修
		<text class="cuIcon-right"></text>
		</view>
		<view class="cu-bar bg-white" @tap="login('rese/rese')">
		意见反馈
		<text class="cuIcon-right"></text>
		</view>
		<button class="cu-btn block  lg" @tap="exit()">退出账号</button>
	</view>
</template>

<script>
	import cnav from '../cnav/cnav'
	export default {
		components:{
			cnav,
		},
		data() {
			return {
				name:''
			}
		},
		onShow(){
			// 获取登录用户信息
			uni.getStorage({
				key:'dsaddsad',
				success:(res)=>{
					this.name=res.data.name;
				}
			})
		},
		methods: {
			// 退出账号
			exit(){
				//清空本地缓存
				uni.clearStorage();
				uni.navigateTo({
					url:'../cindex/cindex'
				})
			},
			// 路由跳转
			login(v){
				uni.navigateTo({
					url:v
				})
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
		overflow: hidden;
		.imgbox{
			width:136upx;
			height:136upx;
			border-radius: 50%;
			background:#0081FF;
			margin:0 auto;
			margin-top: -68upx;
			image{
				width:100%;
				height:100%;
				border-radius: 50%;
			}
		}
		.username{
			// margin:0 auto;
			margin-top: 26upx;
			text-align: center;
			font-size: 36upx;
			font-weight:bold;
			color:rgba(51,51,51,1)
		}
	}
	.cu{
		margin-top: 130upx;
	}
	.cu-bar{
		width:662upx;
		margin-left: 32upx;
		border-bottom:1px solid #ccc;
	}
	.cu-btn{
		width:706upx;
		margin: 0 auto;
		background:#2C405A;
		color:#fff;
		margin-top: 312upx;
	}
</style>
