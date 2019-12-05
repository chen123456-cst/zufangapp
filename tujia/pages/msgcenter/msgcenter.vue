<template>
	<view>
		<cnav title="消息中心"></cnav>
		<view class="all">
			<view class="cu-item text-white cur">系统消息</view>
			<view class="cu-item text-white cur">对账单</view>
			<view class="cu-item text-white cur">保修进度</view>
		</view>
		<view class="todystore" v-for="(item,index) in listarr" :key="index">
			<view class="title">今日故事</view>
			<view class="intro">{{item.intro}}</view>
			<view class="foos">
				<text>{{time}}</text>
				<text @tap="check">查看详情</text>
			</view>
		</view>
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
				listarr:[{
					intro:'社区黄小号中大奖其70岁的父亲到成都市培华路社区办事，与社区工作人员生发口角，被社区工作人员打伤。人民网某记者对此事进行了调查',
					},
					{
					intro:'社区黄小号中大奖其70岁的父亲到成都市培华路社区办事，与社区工作人员生发口角，被社区工作人员打伤。人民网某记者对此事进行了调查',
					}
				],
				time:''
			}
		},
		onShow(){
			let data=new Date();
			let time=data.getFullYear()+'.'+parseInt(data.getMonth()+1)+'.'+parseInt(data.getDay()+1);
			this.time=time;
		},
		methods: {
			// 查看详情
			check(){
				console.log(1);
				uni.navigateTo({
					url:'../userdetail/userdetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background:#eee;
	}
	.all{
		height:100upx;
		background: #FFFFFF;
		display: flex;
		justify-content:space-around;
		align-items: center;
		>view{
			width:200upx;
			height:60upx;
			border-radius: 20upx;
			text-align: center;
			line-height: 60upx;
		}
		>view:nth-of-type(1){
			background:#FF9700;
		}
		>view:nth-of-type(2){
			background:#1CBBB4;
		}
		>view:nth-of-type(3){
			background: #2C405A;
		}
		
	}
	.todystore{
	  width:680upx !important;
	  margin:0 auto;
	  height:300upx;
	  background:#Fff;
	  margin-top:20upx;
	  box-shadow:0px 1px 9px 0px rgba(0, 0, 0, 0.16);
	  border-radius:10px;
	  padding-left:22upx;
	  display: flex;
	  flex-direction: column;
	  .title{
		  width:612upx;
		  line-height: 70upx;
		  border-bottom:1px solid #ccc;
		  color:#333;
		  font-weight: bold;
	  }
	  .intro{
		  width:612upx;
		  height:140upx;
		  padding:20upx 0upx;
		  color:#ccc;
		  font-size: 24upx;
		  border-bottom:1px solid #ccc;
	  },
	.foos{
			width:100%;
			display:flex;
			justify-content:space-between;
			text{
				color:#ccc;
			}
			>text:nth-of-type(2){
				width:120upx;
				border:1px solid rgba(0,67,129,1);
				border-radius:10px;
				font-size: 18upx;
				color:#2C405A;
				text-align: center;
				line-height: 40upx;
				margin-bottom: 10upx;
				margin-right: 25upx;
			}
		}
	}
</style>
