<template>
	<view class="box">
		<view>
			<text>18754545</text>
			<text>待处理</text>
		</view>
		<view>
			<image src="../../static/logo.png" mode="aspectFill"></image>
			<view>
				<view>保修水管</view>
				<view>地址</view>
				<view>时间</view>
			</view>
		</view>
		<view>
			<view>查看详情</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang='scss' scoped>
	.box{
		margin:29upx 35upx 0 35upx;
		width:680upx;
		height:315upx;
		background:rgba(255,255,255,1);
		box-shadow:0upx 1upx 9upx 0upx rgba(0, 0, 0, 0.16);
		border-radius:10upx;
		>view:nth-of-type(1){
			height:60upx;
			border-bottom:1upx solid #EEEEEE;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 25upx;
			text:nth-of-type(1){
				font-size:24upx;
				color:#333;
			}
			text:nth-of-type(2){
				display: inline-block;
				width:108upx;
				height:40upx;
				background:rgba(27,163,175,1);
				font-size:24upx;
				color:#fff;
				text-align: center;
				line-height:40upx;
			}
		}
		>view:nth-of-type(3){
			position:relative;
			view{
				width:141upx;
				height:40upx;
				border:1upx solid rgba(242,19,19,1);
				border-radius:20upx;
				line-height: 40upx;
				text-align: center;
				position:absolute;
				top:10upx;
				right:24upx;
				font-size:24upx;
				color:rgba(242,19,19,1);
			}
		}
		>view:nth-of-type(2){
			display: flex;
			height:193upx;
			align-items: center;
			border-bottom:2upx solid #EEEEEE;
			image{
				width:217upx;
				height:145upx;
				margin:0 24upx;
			}
			>view{
				display: flex;
				flex-direction: column;
				align-content: space-between;
				justify-content: space-between;
				height:145upx;
				view:nth-of-type(1){
					font-size:30upx;
					font-weight:500;
					color:rgba(51,51,51,1);
				}
				view:nth-of-type(2){
					font-size:24upx;
					font-weight:500;
					color:rgba(102,102,102,1);
				}
				view:nth-of-type(3){
					ont-size:18px;
					font-weight:500;
					color:rgba(153,153,153,1);
				}
			}
		}
	}
</style>
