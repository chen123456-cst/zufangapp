<template>
	<view>
		<cnav></cnav>
		<swiperA @tranfrom="handlesel"></swiperA>
		<view v-if="isshow">
			<view class="header" @tap="handleAddress">
				<text class="cuIcon-location" ></text>
				<text>所在地区:{{address}}</text>
			</view>
			<view>
				<canvas canvas-id="can"></canvas>
			</view>
		</view>
		<gpeople v-if="isshow1"></gpeople>
		<view class="gbaoxiu">
			<gbaoxiu v-if="isshow2"></gbaoxiu>
		</view>
	</view>
</template>

<script>
	import swiperA from '@/component/swiper/swiper.vue'
	import cnav from '../cnav/cnav.vue'
	import gpeople from '../gpeople/gpeople'
	import gbaoxiu from '../gbaoxiu/gbaoxiu'
	export default {
		data() {
			return {
				address:'',
				isshow:true,
				isshow1:false,
				isshow2:false
			}
		},
		components:{
			swiperA,
			cnav,
			gpeople,
			gbaoxiu
		},
		methods: {
			handleAddress(){
				type: 'wgs84'
				 geocode:true
				uni.getLocation({
					success:function(res){
						
						console.log(res)
					}
				})
			},
			handlesel(i){
				switch(i){
					case 1:
				        this.isshow1=true
						this.isshow=false
						this.isshow2=false
						break;
						case 2:
					    this.isshow2=true
						this.isshow=false
						this.isshow1=false
						break;
						default:
						this.isshow=true;
						this.isshow2=false
						this.isshow1=false
						break
					}
				}
			},
		onLoad(){
		uni.getStorage({
			key:'123456',
			success:(res)=>{
			 this.address=res.data.street;
			}
		})
	},
	onPullDownRefresh() {
		  uni.showLoading({
		    title:'拼命加载中'
		  })
		  // this.gett();
		   setTimeout(()=>{
				uni.stopPullDownRefresh();
				uni.hideLoading()
		   },1000)
		
	},
}
</script>

<style lang='scss' scoped>
.header{
	line-height: 60upx;
	padding-left:34upx;
	font-size:24upx;
	color:#333333;
	border-bottom:1upx solid #EEEEEE;
	border-top:20upx solid #EEEEEE;
	text:nth-of-type(2){
		margin-left:16upx;
		margin-right:16upx;
	}
}
.gbaoxiu{
	border-top:10upx solid #eee;
}
</style>
