<template>
	<view>
		<cnav title="报修"></cnav>
		<view class="title">提交保修单</view>
		<!-- 上传保修信息 -->
		<view class="all">
			<view>
				<text>联系电话</text>
				<input type="text" placeholder="请输入联系电话" v-model="info.tel">
			</view>
			<view>
				<text>上门时间</text>
				<!-- <view class="uni-title uni-common-pl">日期选择器</view> -->
				        <view class="uni-list">
				            <view class="uni-list-cell">
				                <view class="uni-list-cell-db">
				                    <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				                        <view class="uni-input">{{date}}</view>
				                    </picker>
				                </view>
				            </view>
				      </view>
			</view>
			<view>
				<text>保修地址</text>
				<input type="text" placeholder="请输入地址" v-model="info.address">
			</view>
		</view>
		<view class="centertit">描述</view>
		<textarea  placeholder="请输入描述内容" v-model="info.content"></textarea>
		<view class="title1">上传图片</view>
		<view class="box">
			<view>
				<image :src="imurl" mode="aspectFill"></image>
			</view>
			<view>
				<text class="lg cuIcon-add" @tap="handleimg()"></text>
			</view>
		</view>
		<button class="cu-btn block lg" @tap="handlesave">保存</button>
	</view>
</template>

<script>
	import cnav from 'pages/cnav/cnav'
	import { Base_Url,getstatic} from '../../../../common/getstatic.js'
	export default {
		
		components:{
			cnav
		},
		data() {
			  const currentDate = this.getDate({
			            format: true
			    })
			return {
				Base_Url:Base_Url,
				title: 'picker',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
				date: currentDate,
				time: '12:01',
				imurl:'',
				info:{
					 tel:'',
					 time:'',
					 address:'',
					 content:'',
					 imgurl:'',
					 num:''
				}
			}
		},
		computed: {
		     startDate() {
		         return this.getDate('start');
		     },
		     endDate() {
		         return this.getDate('end');
		     }
		 },
		methods: {
			  bindPickerChange: function(e) {
			             console.log('picker发送选择改变，携带值为', e.target.value)
			             this.index = e.target.value
			         },
			         bindDateChange: function(e) {
			             this.date = e.target.value
			         },
			         bindTimeChange: function(e) {
			             this.time = e.target.value
			         },
			         getDate(type) {
			             const date = new Date();
			             let year = date.getFullYear();
			             let month = date.getMonth() + 1;
			             let day = date.getDate();
			 
			             if (type === 'start') {
			                 year = year - 60;
			             } else if (type === 'end') {
			                 year = year + 2;
			             }
			             month = month > 9 ? month : '0' + month;;
			             day = day > 9 ? day : '0' + day;
			             return `${year}-${month}-${day}`;
			         },
					 // 保存用户保修信息
					 handlesave(){
						 this.info.time=this.date;
						 console.log(this.info);
						 let data=this.info;
						 getstatic('/admin/baoxiu').then((res)=>{
							 console.log(res);
						 })
					 },
					// 上传照片的功能
					handleimg(){
						uni.chooseImage({
							count:1,
						    success: (res)=> {
							// console.log(res);
							let temp = res.tempFilePaths[0];
							this.imurl=temp;
							console.log(temp)
							uni.uploadFile({
							    url: this.Base_Url+'/admin/imgurl',
							    filePath: temp,
							    method:'post',
								name:'myImg',
							    success: (res1) => {
							        let data = JSON.parse(res1.data);
									this.info.imgurl=data.imgUrl;
							    }
							});
						   }
						});
					}
			     }
		}
</script>

<style lang="scss" scoped>
	page{
		background: #eee;
	}
	.title,.centertit,.title1{
		width:100%;
		margin: 20upx 0;
		padding-left: 34upx;
		color:#999;
		font-size: 24upx;
	}
	.all{
		width:100%;
		height: 244upx;
		background: #FFFFFF;
		padding: 0 34upx;
		display: flex;
		flex-direction: column;
		>view{
			line-height: 80upx;
			display: flex;
			justify-content: space-between;
			border-bottom:1px solid #ccc;
			>input{
				margin-top: 20upx;
			}
		}
	}
	textarea{
		width:100%;
		background:#FFFFFF;
		padding-left: 32upx;
		padding-top: 28upx;
	}
	.cu-btn{
		background:#004381;
		width:706upx;
		margin:0 auto;
		color:#FFFFFF;
		margin-top:76upx;
	}
	.box{
		width:100%;
		height:210upx;
		display: flex;
		>view{
			height:100%;
			width:322upx;
			margin-left: 36upx;
			>image{
				width:100%;
				height:100%;
			}
		}
		>view:nth-of-type(2){
			border:1px dashed #0081FF;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.cuIcon-add{
		color:#0081FF;
		width:60upx;
		line-height:60upx;
		text-align: center;
	}
	
</style>
