$('.register').focusin(function(){
    $(this).children().last().show();
})
$('.register').focusout(function(){
    var val=$(this).children('input').val();
    if(val==""){
        var li=$(this)
        $(this).children().last().fadeOut(300);
        $('#phone').next().html('<span>请填写您的真实手机号，以验证完成注册</span>');
        $('#user').next().html('<span>6-16位字符（字母、数字、下划线）或3-8个中文</span>')
    }
})
$('#user').focusout(function(){
    var userA=/^(?![A-Za-z]+$)[a-zA-Z0-9_]{6,16}$/;
    var userB=/^[\u4e00-\u9fa5]{3,8}$/;
    var user=$('#user').val();
    if(userA.test(user)){
        $('#user').next().html('输入正确');
    }else if(userB.test(user)){
        $('#user').next().html('输入正确');
    }else{
        $('#user').next().html('请输入正确用户名');
    }
})
$('#phone').focusout(function(){
    if($(this).val().length!=11){
        $(this).next().html('请输入正确手机号');
    }else{
        $(this).next().html('输入正确');
    }
})
$('#pwd').focusout(function () {
    var pwd=/^(?![A-Za-z]+$)[0-9A-Za-z]{8,16}$/;
    if(($(this).val())!="") {
        if (pwd.test($(this).val())) {
            $(this).next().html('输入正确');
        } else {
            $(this).next().html('请输入正确密码');
        }
    }
})
$('#confirm').focusout(function(){
    if($(this).val()!="") {
        if ($(this).val() != $('#pwd').val()) {
            $(this).next().html('两次输入的密码不一致,请重新输入');
        } else {
            $(this).next().html('输入正确');
        }
    }
})

/*随机验证码*/
function change(e){
    $(e).children().attr('src','data/vcode.php?a'+Math.random());
}