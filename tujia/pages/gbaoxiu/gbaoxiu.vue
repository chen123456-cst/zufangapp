<template>
	<view>
		<view class="nav">
			<view :class="num == 1 ? 'active' : ''" @tap="handle(1)">当前报修</view>
			<view :class="num == 2 ? 'active' : ''" @tap="handle(2)">报修记录</view>
		</view>
		<view><gbaoxiu v-for="(item, index) in userlist" :key="index" :list="item"></gbaoxiu></view>
	</view>
</template>

<script>
import swiperA from '../../component/swiper/swiper.vue';
import gbaoxiu from '../../component/gbaoxiu/index.vue';
import cnav from '../cnav/cnav.vue';
import { getstatic, Base_Url } from '../../common/getstatic.js';
export default {
	data() {
		return {
			num: 1,
			Base_Url: Base_Url,
			userlist: []
		};
	},
	methods: {
		gett() {
			var street = '';
			uni.getStorage({
				key: '123456',
				success: res => {
					street = res.data.street;
				}
			});
			let data = {
				street,
			};
			getstatic('/admin/usermsg', data, 'get').then(res => {
				var datalist=res.data.data
				if(res.data.code==1){
					if(this.num==1){
						this.userlist=datalist.filter((obj)=>{
							return obj.num==0
						})
				}
				}
				if(this.num==2){
					this.userlist=datalist.filter((obj)=>{
						return  obj.num!=0
					})
				}
			});
		},
		handle(i){
			this.num=i
			this.gett();
		}
	},
	created() {
		this.gett();
	},
	components: {
		swiperA,
		gbaoxiu,
		cnav
	}
};
</script>

<style lang="scss" scoped>
.nav {
	display: flex;
	view {
		width: 50%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	view.active {
		color: #1ba3af;
		border-bottom: 2upx solid #1ba3af;
	}
}
</style>
