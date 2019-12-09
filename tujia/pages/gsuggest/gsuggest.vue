<template>
	<view>
		<cnav title="保修建议"></cnav>
		<view class="title">投诉建议</view>
		<textarea placeholder="请填写你的建议"></textarea>
		<view class="btn">保存</view>
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
.title{
	background:#fff;
	font-size:30upx;
	color:rgba(51,51,51,1);
	line-height:80upx;
	padding-left:35upx;
	height:80upx;
	border-bottom:1upx solid #EEEEEE;
}
textarea{
	height:300upx;
	width:100%;
	background:#fff;
	padding:26upx 34upx;
	font-size:24upx;
}
.btn{
	width:706upx;
	background:rgba(0,67,129,1);
	border-radius:10upx;
	margin-left:22upx;
	margin-top:256upx;
	text-align: center;
	line-height:74upx;
	height:74upx;
	color:rgba(244,244,244,1);
	font-size:30upx;
}
</style>
