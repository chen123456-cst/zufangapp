<template>
	<view>
		<cnav title="账号安全"></cnav>
		<view class="box">
			<view>
				<text>手机号</text>
				<input type="text" placeholder="请输入手机号" v-model="tel">
			</view>
			<view>
				<text>旧密码</text>
				<input type="text" placeholder="请输入旧密码" v-model="oldword">
			</view>
			<view>
				<text>新密码</text>
				<input type="password" placeholder="请输入密码" v-model="password">
			</view>
			<view>
				<text>确定密码</text>
				<input type="password" placeholder="请再次输入密码" v-model="Password">
			</view>
			<view>
				<text>验证码</text>
				<input type="text" placeholder="请输入验证码" v-model="yan">
				<view @tap="change">{{yanzhengma}}</view>
			</view>
		</view>
		<view class="checkBox">
			<label  style="width:27upx;height:27upx;">
				<checkbox :checked="boo" value="cb" disabled="true"/><text>我已阅读用户协议</text>
			</label>
		</view>
		<button class='btn' @tap="handle" :disabled="cst">保存</button>
	</view>
</template>

<script>
	import cnav from '../cnav/cnav.vue'
	import {getstatic} from '../../common/getstatic.js'
	export default {
		data() {
			return {
				tel:'',
				oldword:'',
				password:'',
				Password:'',
				yan:'',
				cb:'j',
				yanzhengma:'',
				boo:true
			}
		},
		computed:{
			cst(){
				if(this.tel===''||this.oldword===''||this.password===''||this.Password===''||this.yan===''){
					return true
				}else{
					return false
				}
			}
		},
		components:{
			cnav
		},
		onLoad(){
			this.yanzheng()
			uni.getStorage({
				key:'dsaddsad',
				success:(res)=>{
					this.tel=res.data.tel
				}
			})
		},
		methods: {
			yanzheng(){
				var arr=[]
				for(var i=65;i<=90;i++){
					arr.push(String.fromCharCode(i))
				}
				for(var i=0;i<=9;i++){
					arr.push(i)
				}
				for(var i=97;i<=122;i++){
					arr.push(String.fromCharCode(i))
				}
				var str=''
				while(str.length<4){
					var r=Math.floor(Math.random()*arr.length)
					if(str.indexOf(arr[r])==-1){
						str+=arr[r]
					}
				}
				this.yanzhengma=str
			},
			change(){
				this.yanzheng()
			},
			handle(){
				if(this.password!=this.Password){
					uni.showToast({
						title:'两次密码不匹配，请确认',
						icon:'none'
					})
				}else if(this.yan.toUpperCase()!=this.yanzhengma.toUpperCase()){
					uni.showToast({
						title:'验证码错误，请重新输入',
						icon:'none'
					})
					this.yanzheng()
				}else{
					let old={
						password:this.oldword
					}
					let new1={
						tel:this.tel,
						password:this.password,
					}
					let data={
						old,
						new1
					}
					getstatic('/users/update',data).then((res)=>{
						if(res.data.code==1){
							
							setTimeout(()=>{
								uni.navigateTo({
									url:'../userregister/userregister'
								})
							},1000)
							uni.showToast({
								title:'密码修改成功',
								icon:'none'
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.checkBox{
		margin-left:35upx;
		margin-top:15upx;
		text{
			margin-left:10upx;
		}
	}
	page {
		background: #EEEEEE;
	}

	.box {
		margin-top: 25upx;
		background: #fff;

		>view {
			display: flex;
			margin: 0 31upx 0 35upx;
			height: 81upx;
			border-bottom: 1upx solid #EEEEEE;
			position: relative;

			>text,
			input {
				height: 81upx;
				line-height: 81upx;
				font-size: 30upx;
				color: #333;
			}

			>input {
				color: #999999;
				position: absolute;
				left: 210upx;
			}

			>view {
				width: 157upx;
				height: 53upx;
				line-height: 53upx;
				border-radius: 10upx;
				background: url(../../static/img/yanzheng.jpg);
				position: absolute;
				right: 0;
				top: 12upx;
				text-align: center;
				letter-spacing: 20upx;
			}
		}
	}
	.btn{
		width:706upx;
		height:74upx;
		background:rgba(0,67,129,1);
		border-radius:10upx;
		text-align: center;
		line-height: 74upx;
		color:#fff;
		margin-left:22upx;
		margin-top:161upx;
	}
</style>
