<template>
	<view>
		<cnav title="我的报修"></cnav>
		<view class="title">
			<view v-for="(item, index) in list" :key="index" @tap="handle(index)" :class="i == index ? 'active' : ''">{{ item }}</view>
		</view>
		<gbaoxiu v-for="(item,index) in datalist" :key="index" :list="item"></gbaoxiu>
	</view>
</template>

<script>
import cnav from '../../cnav/cnav.vue';
import gbaoxiu from '../../../component/gbaoxiu/index.vue';
import { Base_Url, getstatic } from '../../../common/getstatic.js';
export default {
	components: {
		cnav,
		gbaoxiu
	},
	data() {
		return {
			i: 0,
			list: ['当前保修', '保修记录', '我要报修'],
			userlist: [],
			tel: ''
		};
	},
	computed:{
		datalist(){
			if(this.i==0){
				return this.userlist.filter((obj)=>{
					return obj.num==0||obj.num==1
				})
			}
			if(this.i==1){
				return this.userlist.filter((obj)=>{
					return obj.num==2
				})
			}
		}
	},
	onLoad() {
		// 获取登录用户信息
		this.gett();
	},
	onShow(){
		this.gett();
	},
	methods: {
		// 跳转页面
		handle(index) {
			this.i = index;
			if (this.i == 2) {
				uni.navigateTo({
					url: 'mybaoxiu/mybaoxiu'
				});
			}
		},
		// 请求保修数据
		gett(){
			let tel=''
			uni.getStorage({
				key: 'dsaddsad',
				success: (res) => {
				tel = res.data.tel;
				}
			});
			let data = {
				tel:tel
			};
			getstatic('/users/userinfos', data, 'get').then(res => {
				if (res.data.code == 1) {
				this.userlist = res.data.data;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background: #eee;
}
.title {
	width: 100%;
	line-height: 80upx;
	background: #ffffff;
	color: #333;
	display: flex;
	justify-content: space-around;
	font-size: 30upx;
	font-weight: bold;
	view {
		height: 100%;
		width: 130upx;
	}
	> view:nth-of-type(3) {
		margin-top: 10upx;
		border: 1px solid #007aff;
		border-radius: 10upx;
		text-align: center;
		line-height: 60upx;
	}
	.active {
		height: 100%;
		width: 130upx;
		border-bottom: 1px solid #0081ff;
		color: #007aff;
	}
}
</style>
