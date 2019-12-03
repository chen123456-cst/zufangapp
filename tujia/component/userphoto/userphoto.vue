<template>
	<view>
		<view class="userphoto">
			<view>
				<view>
					<text class="cuIcon-profile"></text>
				</view>
			</view>
		</view>
		<view class="userlogin">{{title}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'用户名称'
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

<style lang="scss" scoped>
	.userphoto{
	 width:100%;	
	 height:159upx;
	 display: flex;
	 // align-items: center;
	 justify-content: center;
	 >view{
		 width:159upx;
		 height:159upx;
		 border:1px solid #DCDCDC;
		 border-radius: 50%;
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 >view{
			  width:124upx;
			  height:124upx;
			  background: #007AFF;
			  border-radius: 50%;
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  font-size: 60upx;
		 }
	 };
	}
	.userlogin{
		width:100%;
		text-align: center;
		font-size: 24upx;
		color:#4768F3;
		font-weight:500;
		// color:rgba(0,67,0,1);
		line-height:70px;
		letter-spacing: 10upx;
	}
</style>
