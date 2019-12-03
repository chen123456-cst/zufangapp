<template>
	<view>
		<view class="nav cuIcon-back">{{title}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			// 导航标题
			title:{
				type:String,
				default:'社区管理'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
   .nav{
	 text-align: center;
	 line-height:100upx;
	 margin-top: 50upx;
	 font-size: 34upx;
	 color:#fff;
	 background:#004381;
	 letter-spacing: 10upx;
   }
</style>
