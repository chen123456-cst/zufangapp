<template>
	<view>
		<cnav title="消息详情"></cnav>
		<view class="allmsg">
			<allmsg></allmsg>
		</view>
		<view class="msgtitle">
			<msgtitle></msgtitle>
		</view>
	</view>
</template>

<script>
	// 引入头部信息
	import cnav from '../cnav/cnav'
	// 引入社区消息组件
	import msgtitle from '../../component/msgtitle/msgtitle.vue'
	import allmsg from '../../component/allmsg/allmsg.vue'
	export default {
		components:{
			cnav,
			msgtitle,
			allmsg
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
.allmsg{
	margin-top: 24upx;
}
.msgtitle{
	margin-top: 18upx;
}

</style>
