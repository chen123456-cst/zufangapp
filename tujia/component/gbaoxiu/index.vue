<template>
	<view class="box">
		<view>
			<text>{{ list.tel }}</text>
			<text :class="classNa">{{ text }}</text>
		</view>
		<view>
			<image :src="Base_Url + list.imgurl" mode="aspectFill"></image>
			<view>
				<view>{{ list.content }}</view>
				<view>{{ list.address }}</view>
				<view>{{ list.time }}</view>
			</view>
		</view>
		<view>
			<view v-if="sisShow" @tap="hanglecheck">确定完成</view>
			<view v-if="cisShow" @tap="handle">查看详情</view>
		</view>
	</view>
</template>

<script>
import { getstatic, Base_Url } from '../../common/getstatic.js';
export default {
	props: ['list'],
	data() {
		return {
			text: '',
			sisShow: true,
			cisShow: true,
			// 测试用
			num: this.list.num,
			classNa: '',
			Base_Url: Base_Url
		};
	},
	methods: {
		handle() {
			let id = `id=${this.list._id}`;
			uni.navigateTo({
				url: '/pages/my/centmsg/detail/detail?' + id
			});
		},
		// 确定完成之后的状态
		hanglecheck() {
			console.log(1);
			let data = {
				id: this.list._id,
				num: 2
			};
			getstatic('/update', data, 'get').then(res => {
				console.log(res);
			});
		},
		check() {
			if (Number(this.num) === 0) {
				this.text = '待处理';
				this.sisShow = false;
				this.classNa = 'blue';
			} else if (Number(this.num) === 1) {
				this.text = '待上门';
				this.classNa = 'orange';
			} else {
				this.text = '已完成';
				this.sisShow = false;
				this.cisShow = false;
				this.classNa = 'hui';
			}
		}
	},
	created() {
		this.check();
	}
};
</script>

<style lang="scss" scoped>
.box {
	margin: 29upx 35upx 0 35upx;
	width: 680upx;
	height: 315upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0upx 1upx 9upx 0upx rgba(0, 0, 0, 0.16);
	border-radius: 10upx;
	> view:nth-of-type(1) {
		height: 60upx;
		border-bottom: 1upx solid #eeeeee;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 25upx;
		text:nth-of-type(1) {
			font-size: 24upx;
			color: #333;
		}
		text:nth-of-type(2) {
			display: inline-block;
			width: 108upx;
			height: 40upx;

			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 40upx;
		}
	}
	> view:nth-of-type(3) {
		position: relative;
		view {
			width: 141upx;
			height: 40upx;
			border: 1upx solid rgba(242, 19, 19, 1);
			border-radius: 20upx;
			line-height: 40upx;
			text-align: center;
			position: absolute;
			top: 10upx;
			right: 24upx;
			font-size: 24upx;
			color: rgba(242, 19, 19, 1);
		}
		> view:nth-of-type(2) {
			right: 185upx;
			border: 1upx solid #004381;
			color: #004381;
		}
	}
	> view:nth-of-type(2) {
		display: flex;
		height: 193upx;
		align-items: center;
		border-bottom: 2upx solid #eeeeee;
		image {
			width: 217upx;
			height: 145upx;
			margin: 0 24upx;
		}
		> view {
			display: flex;
			flex-direction: column;
			align-content: space-between;
			justify-content: space-between;
			height: 145upx;
			view:nth-of-type(1) {
				font-size: 30upx;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			view:nth-of-type(2) {
				font-size: 24upx;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
			view:nth-of-type(3) {
				ont-size: 18px;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
}
.hui {
	background: #999999;
}
.blue {
	background: #1ba3af;
}
.orange {
	background: #ec6c19;
}
</style>
