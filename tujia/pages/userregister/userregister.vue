<template>
	<view>
		<cnav title="用户登录"></cnav>
		<view class="usertop"><userphoto></userphoto></view>
		<view class="form">
			<input type="text" v-model="userinfo.tel" placeholder="请输入手机号" />
			<text class="lg  cuIcon-myfill"></text>
			<text class="lg  cuIcon-backdelete" @tap="del"></text>
			<input :password="ispwd" v-model="userinfo.password" placeholder="请输入你的密码" />
			<text class="lg cuIcon-lock"></text>
			<text class="lg cuIcon-attention" @tap="hanglechage"></text>
			<button class="cu-btn block bg-purple margin-tb-sm lg" @tap="submit" :disabled="check">登录</button>
		</view>
		<view class="foot">
			<view>
				<text @tap="change">快速注册</text>
				<text>忘记密码?</text>
			</view>
		</view>
	</view>
</template>

<script>
import cnav from '../cnav/cnav';
import userphoto from '../../component/userphoto/userphoto';
import { getstatic } from '../../common/getstatic.js';
export default {
	components: {
		cnav,
		userphoto
	},
	data() {
		return {
			// 控制密码的显示和隐藏
			ispwd: true,
			userinfo: {
				username: '匿名',
				tel: '',
				password: '',
				imgurl: '',
				birth: '',
				address: '',
				street: ''
			}
		};
	},
	computed: {
		// 注册按钮是否可以使用
		check() {
			if (this.userinfo.tel === '' || this.userinfo.password === '') {
				return true;
			} else {
				return false;
			}
		}
	},
	methods: {
		async submit() {
			// 发起登录的请求
			let data = this.userinfo;
			// 返回的参数
			let res = await getstatic('/users/login', data);
			if (res.data.code == 0) {
				uni.showToast({
					title: '用户未注册',
					icon: 'none'
				});
			} else {
				this.userinfo = res.data.data;
				uni.setStorage({
					key: 'dsaddsad',
					data: this.userinfo,
					token: res.data.token,
					// token保存成功之后的回调
					success: function() {}
				});
				uni.showToast({
					title: '登录成功',
					icon: 'none'
				});
				setTimeout(()=>{
					uni.switchTab({
						url: '../index/index'
					});
				},1000)
				
			}
		},
		// 跳转到注册页面
		change() {
			uni.navigateTo({
				url: '../userlogin/userlogin'
			});
		},
		// 删除用户名输入框输入数据
		del() {
			this.userinfo.tel = '';
		},
		// 显示密码
		hanglechage() {
			this.ispwd = !this.ispwd;
		},
	}
};
</script>

<style lang="scss" scoped>
.usertop {
	margin-top: 88upx;
}
.form {
	position: relative;
	width: 100%;
	margin-top: 60upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 114upx 0 119upx;
	.cuIcon-myfill,
	.cuIcon-backdelete {
		position: absolute;
		font-size: 50upx;
		top: 18upx;
		color: #007aff;
	}
	.cuIcon-myfill {
		left: 150upx;
	}
	.cuIcon-lock,
	.cuIcon-attention {
		position: absolute;
		top: 120upx;
		font-size: 50upx;
		color: #007aff;
		left: 150upx;
	}
	.cuIcon-backdelete,
	.cuIcon-attention {
		left: 550upx;
	}

	input {
		width: 513upx;
		height: 80upx;
		border: 1px solid #dcdcdc;
		border-radius: 40px;
		margin-bottom: 30upx;
		padding-left: 98upx;
		font-size: 24upx;
		color: #999;
	}
	button {
		border-radius: 40upx;
		box-shadow: 0px 3px 4px 0px rgba(0, 67, 129, 0.48);
		background: #004381;
		color: #ccc;
	}
}
.foot {
	width: 100%;
	text-align: center;
	line-height: 70upx;
	font-size: 24upx;
	font-weight: 500;
	color: rgba(0, 67, 0, 1);

	margin-top: 76upx;
	> view {
		width: 512upx;
		display: flex;
		justify-content: space-between;
		margin-left: 123upx;
		> text:nth-of-type(2) {
			color: rgba(153, 153, 153, 1);
		}
	}
}
</style>
