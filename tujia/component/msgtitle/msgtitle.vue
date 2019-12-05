<template>
	<view>
		<view class="boxall">
			<view>
				<text class="title"></text>
				<view>
					
				</view>
				<text></text>
				<text></text>
			</view>
			<view>
				<text>{{title}}</text>
				<view class="titleimg">
				<image src="../../static/img/2.jpg" mode="aspectFill"></image>
				</view>
				<view class="content">
				   社区黄小号中大奖其70岁的父亲到成都市培华路社
					区办事，与社区工作人员生发口角，被社区工作人
					员打伤。人民网某记者对此事进行了调查                         
				</view>
				<view class="check" @tap="change">
					<text>查看更多</text>
					<view>
						<text></text>
						<text></text>
						<text></text>
					</view>
					<text class="lg cuIcon-right" ></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:"今日故事"
			},
			
		},
		data() {
			return {
			
			}
		},
		methods: {
			// 查看更多时间
			change(){
				console.log(1);
			}
		}
	}
</script>

<style lang="scss" scoped>
  .boxall{
		width:100%;
		padding-left:56upx;
		display: flex;
		justify-content:space-around;
		>view:nth-of-type(1){
			position: relative;
			>text{
				display: flex;
				border-radius: 50%;
			}
			>.title{
				width:40upx;
				height:40upx;
				border:3px solid rgba(102,102,102,1);
			}
			>view:nth-of-type(1){
				height:530upx;
				width:1px;
				background: #ccc;
				margin-left: 23upx;
			}
			>text:nth-of-type(2){
				width:22upx;
				height:22upx;
				border:3px solid #FF9700;
				position: absolute;
				top:146upx;
				left:7upx;
				background:#fff;
			}
			>text:nth-of-type(3){
				width:22upx;
				height:22upx;
				border:3px solid #ccc;
				position: absolute;
				top:348upx;
				left:7upx;
				background:#fff;
			}
		}
		>view:nth-of-type(2){
			overflow: hidden;
			display: flex;
			flex-direction: column;
			width:496upx;
			>text:nth-of-type(1){
				font-weight:bold;
				font-size: 24upx;
				color:#333;
			}
			.titleimg{
				width:100%;
				height:250upx;
				margin-top: 39upx;
				image{
					width: 100%;
					height:100%;
					border-radius:10upx;
				}
			}
			.content{
				width:100%;
				// height:140upx;
				background:rgba(255,255,255,1);
				box-shadow:0px 0px 13px 0px rgba(0, 0, 0, 0.17);
				border-radius:10px;
				margin-top: 38upx;
				font-size: 24upx;
				padding: 30upx;
				color:#ccc;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.check{
				margin-top: 34upx;
				width:100%;
				line-height:24upx;
				text-align: center;
				>view{
					display: inline-block;
					margin-left: 12upx;
					>text{
						display:inline-block;
						margin-left: 2upx;
						width:6px;
						height:6px;
						border-radius: 50%;
						background:#C0C0C0;
					}
				}
				.cuIcon-right{
					font-size: 30upx;
				}
			}
		}
		
	}
	
</style>
