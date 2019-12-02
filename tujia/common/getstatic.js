// 基础线上请求路径
const Base_Url="";
function  getstatic(url,data={},method='post'){
	return new Promise(reslove,reject){
		uni.request({
			url:Base_Url+url;
			method:method,
			data:data,				
			success:(res){
				reslove(res);
			},
			fail:(res){
				reject(res);
			}
		})
	}
}
//promise请求;
export{
	getstatic;
	Base_Url;
}