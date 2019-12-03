<template>
	<view>
		<cnav></cnav>
		<!-- 我是用户 -->
		<view class="user">
			<view class="user1" >
				<view class="user2"></view>
			</view>
				<view class="userall" @tap="login()">
					<text class="cuIcon-profile"></text>
					<text>我是用户</text>
				</view>
		</view>
		<view class="user worker">
			<view class="user1 worker1" @tap="login2">
				<view class="user2 worker2"></view>
			</view>
				<view class="userall workerall">
					<text class="cuIcon-profile"></text>
					<text>我是工人</text>
				</view>
		</view>
	</view>
</template>

<script>
	// 引入头部样式
	import cnav from '../cnav/cnav.vue'
	export default {
		components:{
			cnav
		},
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				// 跳转至用户注册端
				uni.navigateTo({
					url:'../userlogin/userlogin'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
  .user{
	  width:100%;
	  height:277upx;
	  margin-top: 168upx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  // position: relative;
	  .user1{
		  width: 308upx;
		  height:246upx;
		  background:#14A4AF;
		  opacity:0.24;
		  border-radius:50%;
		  position: relative;
		  .user2{
			  position: absolute;
			  top:-10upx;
			  left:20upx;
			  width:258upx;
			  height:266upx;
			  border-radius:50%;
			  background:#14A4AF;
			  opacity:0.24;
		  }
		
	  }
	  .userall{
	  	position: absolute;
	  	left:254upx;
	  	width:240upx;
	  	height:240upx;
	  	background:#14A4AF;
	  	border-radius: 50%;	
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.cuIcon-profile{
			font-size: 80upx;
			margin-bottom: 32upx;
		
		}
		>text:nth-of-type(2){
			letter-spacing: 10upx;
			color:#FFFFFF;
		}
	  }
  }
  .worker{
	  margin-top: 188upx;
	  .worker1,.worker1.worker2{
		  background: #ED6C19;
		  opacity: 0.24;
	  }
	  .workerall{
		   background: #ED6C19;
	  }
  }
</style>
