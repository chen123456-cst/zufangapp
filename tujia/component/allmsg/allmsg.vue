<template>
	<view>
		<view class="head">
			<view>
				<text>{{title}}</text>
				<text>{{time}}</text>
			</view>
			<view v-if="isshow">待上门</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'社区消息'
			},
			isshow:{
				type:Boolean,
				default:false,
			}
		},
		data() {
			return {
			  time:''
			}
		},
		created(){
			// 获取当前时间
			let data=new Date();
			this.time=data.getFullYear()+'.'+(parseInt(data.getMonth())+1)+'.'+(parseInt(data.getDay())+1);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
     .head{
		 width:100%;
		 height:94upx;
		 padding: 0 34upx;
		 border-bottom:1px solid #ccc;
		 display: flex;
		 justify-content: space-between;
		 >view:nth-of-type(1){
			  line-height: 35upx;
			  display: flex;
			  flex-direction: column;
			 >text:nth-of-type(1){
			 		color:#004381;
			 		font-size: 30upx;
			 	    font-weight:bold;
					margin-bottom: 18upx;
					
			 }
			 >text:nth-of-type(2){
				 color:#ccc;
			 }
		 }
		>view:nth-of-type(2){
			width:108upx;
			height: 40upx;
			font-size: 24upx;
			margin-top: 26upx;
			background:rgba(174,148,18,1);;
			color:#fff;
			text-align: center;
		}
	 }
</style>
