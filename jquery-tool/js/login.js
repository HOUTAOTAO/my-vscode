$(()=>{
    var $form=$("form");
    $("#btn").click(()=>{
    $.post("data/user/login.php",$form.serialize())
    .then(text=>{
        if(text=="false"){
            $form[0].reset();
            alert("登陆成功！");
            if(localtion.search!==""){
                var back=localtion.search.slice(6);
                localtion=back;
            }else{
                localtion="index.html";
            }
        }
    })
});
$(window).keyup(e=>{
    if(e.keyCode==13) $("#btn").click;
})
})