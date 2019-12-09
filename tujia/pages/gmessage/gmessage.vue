<template>
	<view>
		<cnav title="邀请加入"></cnav>
		<view class="tel">手机号</view>
		<input type="text" placeholder="请输入手机号码">
		<view class="nei">邀请内容</view>
		<textarea value="" placeholder="快来加入我们的街道吧,线上维修,妈妈再也不怕我找不到维修啦" />
		<view class="btn">发送</view>
	</view>
</template>

<script>
	import cnav from '../cnav/cnav.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			cnav
		}
	}
</script>

<style scoped>
page{
	background:#EEEEEE
	}
.tel{
	font-size:24Upx;
	font-family:PingFang;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:70Upx;
	padding-left:38upx;
}
input{
	padding-left:38upx;
	background:#fff;
	height:82upx;
	margin-left:3upx;
}
.nei{
	font-size:24upx;
	font-family:PingFang;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:70upx;
	padding-left:38upx;
}
textarea{
	marging-left:4upx;
	height:300upx;
	width:100%;
	background:#fff;
	padding: 21upx 35upx;
}
.btn{
	width:706upx;
	height:74upx;
	background:rgba(0,67,129,1);
	border-radius:10upx;
	font-size:30upx;
	color:rgba(244,244,244,1);
	text-align: center;
	line-height:74upx;
	margin:100upx 0 0 26upx;
}
</style>
