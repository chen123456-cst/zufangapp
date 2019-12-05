<template>
	<view>
		<cnav title="基本信息"></cnav>
		<view class="humanmsg">
			<view>
				<text>头像</text>
				<!-- 更换头像功能 -->
				<view class="imgchos" @tap="handleimg">
					<image :src="imgurl" mode="aspectFill"></image>
				</view>
			</view>
			<view>
				<text>姓名</text>
				<input type="text" v-model="userinfo.username">
			</view>
			<view>
				<text>电话</text>
				<input type="text" v-model="userinfo.tel">
			</view>
			<view>
				<text>生日</text>
				<input type="text" v-model="userinfo.birth">
			</view>
			<view>
				<text>地址</text>
				<input type="text" v-model="userinfo.address">
			</view>
		</view>
			<button class="cu-btn block  lg" @tap="reserve">保存</button>
	</view>

</template>

<script>
	import cnav from '../../cnav/cnav'
	import {Base_Url,getstatic} from '../../../common/getstatic.js'
	export default {
		components:{
			cnav
		},
		data() {
			return {
				userinfo:{
					username:'1111',
					tel:'18875152489',
					password:'',
					imgurl:'',
					birth:'1997.1.16',
					address:'重庆市九龙坡',
					street:''
				},
				imgurl:'',
				Base_Url:Base_Url
			}
		},
		methods: {
			// 更换头像的功能
			handleimg(){
				uni.chooseImage({
					count:1,
				    success: (res)=> {
					let temp = res.tempFilePaths[0];
					this.imgurl=temp;
					uni.uploadFile({
					    url: this.Base_Url+'/admin/imgurl',
					    filePath: temp,
					    method:'post',
						name:'myImg',
					    success: (res1) => {
					        let data = JSON.parse(res1.data);
							this.userinfo.imgurl=data.imgUrl;
					    }
					});
				   }
				});
			},
			// 保存数据功能
			reserve(){
				let data=this.userinfo
				getstatic('/admin/user',data,'get').then((res)=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background:#ccc;
		height:100%;
	}
		.humanmsg{
			margin-top: 20upx;
			width:100%;
			height:455upx;
			background:#FFF;
			padding-left: 36upx;
			padding-right: 40upx;
			display: flex;
		    flex-direction: column;
			>view{
				border-bottom: 1px solid #ccc;
				line-height: 80upx;
				display: flex;
				justify-content: space-between;
				font-size: 30upx;
				color:#333;
			    font-weight: bold;
				.imgchos{
					width:114upx;
					height:114upx;
				    margin-top:8upx;
					border: 1px solid #ccc;
					border-radius: 50%;
					image{
						width:100%;
						height:100%;
						border-radius: 50%;
					}
				}
				>input{
					height:100%;
					color:#ccc;
				}
			}
			>view:nth-of-type(1){
				line-height: 130upx;
						
			}
		}
		.cu-btn{
			width:706upx;
			margin: 0 auto;
			margin-top: 162upx;
			background:#004381;
			color:#FFFFFF;
		}
		
</style>
