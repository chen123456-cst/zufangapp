<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	uni-checkbox .uni-checkbox-input {
	        border-radius: 50% !important;
	        color: #ffffff !important;
			width:27upx;
			height:27upx;
	    }
	    
	    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
	        color: #fff;
	        border-color: rgb(0, 122, 255);
	        background:rgb(0, 122, 255);
	    }
	    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:after{
	        font-size: 10upx;
	    }
</style>
