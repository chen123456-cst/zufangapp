<template>
	<view>
		<cnav title="保修详情"></cnav>
		<view class="allmsg">
			<allmsg title="水管维修" :isshow="true"></allmsg>
		</view>
	</view>
</template>

<script>
	import cnav from 'pages/cnav/cnav'
	import allmsg from '../../../../component/allmsg/allmsg.vue'
	export default {
		
		components:{
			cnav,
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
	page{
		background:#eee;
	}
	.allmsg{
		margin-top: 20upx;
		background: #FFFFFF;
	}
</style>
