// 基础线上请求路径
const Base_Url="";
function  getstatic(url,data={},method='post'){
	return new Promise(reslove,reject){
		uni.request({
			url:Base_Url+url;
			method,
			data,				
			success:(res)=>{
				reslove(res);
			},
			fail:(err)=>{
				reject(err);
			}
		})
	}
}
//promise请求;
export{
	getstatic;
	Base_Url;
}