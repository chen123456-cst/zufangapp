<template>
	<view>
		<view class="nav ">{{title}}
		<text class="cuIcon-back" @tap="exit()">
		</text>
		<text class="cuIcon-newshot" v-if="isshow"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			// 导航标题
			title:{
				type:String,
				default:'社区管理'
			},
			// 控制右边消息隐藏还是显示
			isshow:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			exit(){
				// 像后面返回
		        uni.navigateBack({
		        	
		        })
			}
		}
	}
</script>

<style lang="scss">
   .nav{
	 position: relative;
	 width:100%;
	 text-align: center;
	 line-height:100upx;
	 margin-top: 50upx;
	 font-size: 34upx;
	 color:#fff;
	 background:#004381;
	 letter-spacing: 10upx;
	 overflow: hidden;
   }
   .cuIcon-back{
	   position: absolute;
	   left:37upx;
	   font-size: 34upx;
   }
   .cuIcon-newshot{
	   position: absolute;
	   right:54upx;
	   font-size: 34upx;
   }
</style>
