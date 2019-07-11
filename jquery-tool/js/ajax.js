function ajax({
    type,
    url,
    data,
    dataType,

}){
    return new Promise(callback=>{
        var xhr=new XMLHttpRequest();
        if(type.toLowerCase()=="get"&&data!==undefined)
            url+="?"+data;
        xhr.open(type,url,true);
        xhr.onreadyStatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                     var resData=xhr.responseText;
                     if(dataType!==undefined&&dataType.toLowerCase()=="json")
                         resData=JSON.parse(resData);
                     callback(resData);

                }
            }
        }
        if(type.toLowerCase()=="post")
          xhr.setResquestHeader("Content-Type","application/x-www-form-url-urlencoded");
          xhr.send(type.toLowerCase()=="post"?data:null);
    })
}