<template>
	<view>
		<cnav title="客服中心"></cnav>
		<view class="footer">
			<text class="lg text-gray cuIcon-new"></text>
			<text>在线咨询</text>
		</view>
	</view>
</template>

<script>
	import cnav from '../cnav/cnav'
	export default {
		components:{
			cnav
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.footer{
		width:100%;
		height:98upx;
		background:rgba(255,255,255,1);
		box-shadow:0upx -1upx 3upx 0upx rgba(109,109,109,0.45);
		text-align: center;
		line-height: 98upx;
		position: fixed;
		bottom:100upx;
		text{
			color:#2C405A;
			font-size: 32upx;
		}
		>text:nth-of-type(1){
			margin-right: 16upx;
			font-size:34upx;
			
		}
	}
</style>
