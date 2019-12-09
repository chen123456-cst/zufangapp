<template>
	<view class="content">
		<cnav title="万街商业"></cnav>
		<view class="all" v-for="(item, index) in listarr" :key="index" @tap="handle()">
			<view class="imgbox">
				<swiper class="swiper"  :autoplay="true">
					<swiper-item v-for="(items,i) in item.img" :key="i"><view class="swiper-item uni-bg-red"><image :src="items" mode="aspectFill"></image></view></swiper-item>
				</swiper>
			</view>
			<view class="title">{{item.title}}</view>
			<view class="intro">{{item.intro}}</view>
		</view>
	</view>
</template>

<script>
import cnav from '../cnav/cnav';
export default {
	components: {
		cnav
	},
	data() {
		return {
			listarr: [{ img: ['../../static/img/3.jpg', '../../static/img/4.jpg'] ,
			title:'浙、皖二省交界',
			intro:'全市总面积2038.7平方公里,人口106万,下设14......'}, { img: ['../../static/img/5.jpg', '../../static/img/6.jpg'],
			 title:'社区故事',intro:'全市总面积2038.7平方公里,人口106万,下设14......'},
			 ]
		};
	},
	onLoad() {},
	methods: {
		handle(){
			uni.navigateTo({
				url:'../msgcenter/msgcenter'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #eee;
}
.all {
	width: 680upx;
	height: 462upx;
	background: #fff;
	margin: 0 auto;
	margin-top: 34upx;
	border-radius: 10upx;
	display: flex;
	flex-direction: column;
	.imgbox {
		width: 100%;
		height: 340upx;
		.swiper,.swiper-item{
			width:100%;
			height:100%;
			.swiper-item{
				border-radius: 10upx;
				image{
					border-radius: 10upx;
				}
			}
		}
	}
	.title{
		width:100%;
		padding:0 30upx;
		// height:60upx;
		border-bottom: 1px solid #eee;
		line-height: 60upx;
		font-size: 30upx;
		color:#333;
		font-weight: bold;
	}
	.intro{
		width:100%;
		line-height: 60upx;
		font-size: 24upx;
		padding:0 30upx;
		color:#ccc;
	}
}
</style>
