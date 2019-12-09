<template>
	<view>
		<cnav title="工人注册"></cnav>
		<view class="usertop"><userphoto></userphoto></view>
		<view class="form">
			<input type="text" v-model="userinfo.tel" placeholder="请输入手机号" @blur="hanlecheck()" />
			<input type="password" v-model="userinfo.password" placeholder="请输入你的密码" />
			<input type="password" v-model="twopassword" placeholder="请再次输入你的密码" />
			<button class="cu-btn block bg-purple margin-tb-sm lg" @tap="submit" :disabled="check">注册</button>
		</view>
		<view class="foot" @tap="change">已有账号,登录</view>
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
			userinfo: {
				tel: '',
				password: '',
				street: '重庆'
			},
			twopassword: ''
		};
	},
	computed: {
		// 注册按钮是否可以使用
		check() {
			if (this.userinfo.tel === '' || this.userinfo.password === '' || this.twopassword === '') {
				return true;
			} else {
				return false;
			}
		}
	},
	methods: {
		// 判断两次输入的密码是否相同；
		async submit() {
			if (this.userinfo.password !== this.twopassword) {
				uni.showToast({
					title: '输入密码不一致请重输',
					duration: 2000,
					icon: 'none'
				});
			} else {
				// 发起注册的请求
				let data = this.userinfo;
				// 返回的参数
				let res = await getstatic('/register', data);
				console.log(res);
				if (res.data.code == 1) {
					uni.showToast({
						title: '注册成功',
						icon: 'none'
					});
					setTimeout(() => {
						uni.navigateTo({
							url: '../workerregister/workerregister'
						});
					}, 1000);
				} else {
					uni.showToast({
						title: '手机号已注册请直接登录',
						icon: 'none'
					});
				}
			}
		},
		// 跳转到登录页面
		change() {
			uni.navigateTo({
				url: '../workerregister/workerregister'
			});
		},
		// 电话验证
		hanlecheck() {
			if (!/^1[3456789]\d{9}$/.test(this.userinfo.tel)) {
				uni.showToast({
					title: '请输入正确的电话',
					icon: 'none'
				});
				return false;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.usertop {
	margin-top: 88upx;
}
.form {
	width: 100%;
	margin-top: 60upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 114upx 0 119upx;
	input {
		width: 513upx;
		height: 80upx;
		border: 1px solid #dcdcdc;
		border-radius: 40px;
		margin-bottom: 30upx;
		padding-left: 46upx;
		font-size: 24upx;
		color: #999;
	}
	button {
		border-radius: 40upx;
		box-shadow: 0px 3px 4px 0px rgba(0, 67, 129, 0.48);
		color: #ccc;
		background: #004381;
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
}
</style>
