<template>
	<view>
		<cnav title="我的报修"></cnav>
		<view class="title">
			<view v-for="(item,index) in list" :key="index" @tap="handle(index)" :class="i==index?'active':''" >{{item}}</view>
		</view>
	</view>
</template>

<script>
	import cnav from '../../cnav/cnav.vue'
	export default {
		components:{
			cnav,
		},
		data() {
			return {
				i:0,
				list:['当前保修','保修记录','我要报修']
			}
		},
		methods: {
			// 跳转页面
			handle(index){
			this.i=index;
			if(this.i==2){
			    uni.navigateTo({
					url:'mybaoxiu/mybaoxiu'
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
page{
		background:#ffe;
	}
.title{
	width:100%;
	line-height: 80upx;
	background:#FFFFFF;
	color:#333;
	display: flex;
	justify-content:space-around;
	font-size: 30upx;
	font-weight: bold;
	view{
		height:100%;
		width:130upx;
	}
	>view:nth-of-type(3){
		margin-top: 10upx;
		border:1px solid #007AFF;
		border-radius:10upx;
		text-align: center;
		line-height: 60upx;
	}
	.active{
		height:100%;
		width:130upx;
		border-bottom:1px solid #0081FF;
		color:#007AFF;
	}
}
</style>
