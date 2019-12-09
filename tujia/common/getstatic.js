// 基础线上请求路径
const Base_Url="http://106.13.74.16:3000";
function  getstatic(url,data={},method='post'){
	return new Promise((reslove,reject)=>{
		uni.request({
			url:Base_Url+url,
			method:method,
			data:data,				
			success:(res)=>{
				reslove(res);
			},
			fail:(err)=>{
				reject(err);
			}
		})
	})
}
//promise请求;
export{
	getstatic,
	Base_Url,
}