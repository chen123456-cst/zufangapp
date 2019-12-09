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
				<image :src="Base_Url+imgurl" mode="aspectFill"></image>
			</view>
			<view class="username">{{tel}}</view>
		</view>
		<!-- 列表 -->
		<view class="cu-bar bg-white cu" @tap="login('centmsg/centmsg')">
		基本信息
		<text class="cuIcon-right" ></text>
		</view>
		<view class="cu-bar bg-white" @tap="login('../csafe/csafe')">
		账号安全
		<text class="cuIcon-right" ></text>
		</view>
		<view class="cu-bar bg-white" @tap="login('mysafe/mysafe')">
		我的保修
		<text class="cuIcon-right"></text>
		</view>
		<view class="cu-bar bg-white" @tap="login('../gsuggest/gsuggest')">
		意见反馈
		<text class="cuIcon-right"></text>
		</view>
		<button class="cu-btn block  lg" @tap="exit()">退出账号</button>
	</view>
</template>

<script>
	import cnav from '../cnav/cnav'
	import {Base_Url,getstatic} from '../../common/getstatic.js'
	export default {
		
		components:{
			cnav,
		},
		data() {
			return {
				tel:'',
				imgurl:'',
				Base_Url:Base_Url
			}
		},
		onLoad(){
			// 获取登录用户信息
			uni.getStorage({
				key:'dsaddsad',
				success:(res)=>{
					let {tel,imgurl}=res.data;
					this.tel=tel;
					this.imgurl=imgurl;
				}
			})
		},
		onShow(){
			// 获取登录用户信息
			uni.getStorage({
				key:'dsaddsad',
				success:(res)=>{
					let {tel,imgurl}=res.data;
					this.tel=tel;
					this.imgurl=imgurl;
				}
			})
			let data={
				tel:this.tel
			}
			getstatic('/users/list',data,'get').then((res)=>{
			   this.imgurl=res.data.data[0].imgurl;
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
		position:relative;
		.imgbox{
			width:136upx;
			height:136upx;
			border-radius: 50%;
			position:absolute;
			top:-68upx;
			left:50%;
			transform: translateX(-50%);
			image{
				width:100%;
				height:100%;
				border-radius: 50%;
			}
		}
		.username{
			// margin:0 auto;
			position:absolute;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
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
