// 专门负责发送ajax请求的函数
//type请求方法  请求的类型有get或post
// url要请求的服务器接口地址 
function ajax(type,url){
    return new Promise(resolve=>{
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                var result=JSON.parse(xhr.responseText);
                resolve(result);
            }
        }
        xhr.open(type,url,true);
        xhr.send();
    });
}