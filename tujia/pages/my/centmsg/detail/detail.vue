<template>
	<view>
		<cnav title="保修详情"></cnav>
		<view class="allmsg">
			<allmsg   :list="list"></allmsg>
			
		</view>
		<view class="imgbox"><image :src="Base_Url+list.imgurl"></image>
		  <view @tap="handlechange">确认上门</view>
		</view>
	</view>
</template>

<script>
	import cnav from 'pages/cnav/cnav'
	import allmsg from '../../../../component/allmsg/allmsg.vue'
	import {getstatic,Base_Url} from '../../../../common/getstatic.js'
	export default {
		components:{
			cnav,
			allmsg
		},
		data() {
			return {
				list:{},
				Base_Url:Base_Url,
				id:''
			}
		},
		onLoad(option){
			console.log(option);
			let id1=option.id
			this.id=id1
			let id={
				id:id1
			};
			getstatic('/userinfo',id,'get').then((res)=>{
				if(res.data.code==1){
					this.list=res.data.data[0]
				}
			})
		},
		methods: {
			handlechange(){
			   let data={
				  id:this.id,
				  num:1,
			   }
				getstatic('/update',data,'get').then((res)=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// page{
	// 	background:#eee;
	// }
	.allmsg{
		margin-top: 20upx;
		background: #FFFFFF;
		
	}
	.imgbox{
		width:100%;
		height:200upx;
		display: flex;
		justify-content: space-between;
		image{
			width:400upx;
			height:100%;
			border-radius:20upx;
			margin-top: 20upx;
			margin-left: 20upx;
		}
		>view:nth-of-type(1){
			width:200upx;
			height:60upx;
			border:1px solid #007AFF;
			border-radius: 10upx;
			text-align: center;
			line-height:60upx;
			background:#007AFF;
			color:#fff;
			margin:140upx 20upx;
		}
	} ;
</style>
