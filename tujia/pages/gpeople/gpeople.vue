<template>
	<view>
		<view class="bgbox">
			<view class="header">
				<text>业主</text>
				<text></text>
				<text>{{n}}</text>
				<text @tap="invite">邀请加入街道</text>
			</view>
			<view class="box">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in i" :key="index">
						<view class="swiper-item">
							<view v-for="(item,index) in userlist" :key="index" class="imgd" @tap="handleShow(index)">
								<image :src="Base_Url+item.imgurl" mode="aspectFill"></image>
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
				<text>{{n}}</text>
			</view>
			<view class="box">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in i" :key="index">
						<view class="swiper-item">
							<view v-for="(item,index) in userlist" :key="index" class="imgd" @tap="handleShow(index)">
								<image :src="Base_Url+item.imgurl" mode="aspectFill"></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="motai" v-show='isShow' v-if="userlist.length!=0">
			<view>
			<image :src="Base_Url+userlist[j].imgurl" mode="aspectFill"></image>
			<view>昵称{{userlist[j].username}}</view>
			<view>电话{{userlist[j].tel}}</view>
			<view>地址{{userlist[j].address}}</view>
			<textarea value="" placeholder="备注信息" />
			<view>保存</view>
			<text class="cuIcon-close" @tap="isShow=false"></text>
			</view>
		</view>
	</view>
</template>

<script>
	// import swiperA from '../../component/swiper/swiper.vue'
	// import cnav from '../cnav/cnav.vue'
	import {getstatic,Base_Url} from '../../common/getstatic.js'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				isShow:false,
				Base_Url:Base_Url,
				userlist:[],
				i:0,
				j:0,
				n:0
			}
		},
		methods: {
			handleShow(index){
				this.isShow=true
				this.j=index;
			},
			invite(){
				uni.navigateTo({
					url:'../gmessage/gmessage'
				})
			},
		    gett(){
				// 获取全部用户信息
				let data={};
				 getstatic('/userslist',data,'get').then((res)=>{
					 if(res.data.code==1){
					 	this.userlist=res.data.data;
					 	this.n=this.userlist.length;
					 	this.i=Math.ceil(this.userlist.length/8)	
					 }
				 })
			}
		},
	    created(){
			this.gett()
		},
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
	height:347upx;
	>view{
		width:25%;
		display: inline-block;
	}
}
.imgd{
	width:136upx;
	height:136upx;
	// border-radius: 50%;
	// border:1upx solid #EEEEEE;
	position: relative;
	image{
		position: absolute;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
		width:136upx;
		height:136upx;
		border-radius: 50%;
	}
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
