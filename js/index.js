$('#top').load('data/header.php',function(){
    $('.top_list>li').eq(0).addClass('science');
});
$('#footer').load('data/footer.php');


$('.arrow_right').click(function () {
    var char = $(this).parent().children().children().eq(0);
    var chars = $(this).parent().children().children().children().length;
    var left = parseInt($(char).css('left'));
    if (isNaN(left)) {
        left = 0;
    }
    if (left < -280 * (chars - 5)){
        left = 280;
    }
    $(char).animate({
        left: left - 280 + "px"
    }, 300);
})
$('.arrow_left').click(function () {
    var char = $(this).parent().children().children().eq(0);
    var chars = $(this).parent().children().children().children().length;
    var left = parseInt($(char).css('left'));
    if (isNaN(left)) {
        left = 0;
    }
    if (left > -280) {
        left = -280;
    }
    $(char).animate({
        left: left + 280 + "px"
    }, 300);
})
/*返回顶部*/
$('#footer').on('click','#to_top',function () {
    $('body,html').animate({
        'scrollTop': 0
    }, 300)
});

/*搜索框*/
$('#top').on('focusin','#search',function (){
    $(this).children('button').css('z-index','5');
    $(this).children('input').css({'cursor':'text','background':'rgba(255,255,255,.5)'});
})
$('#top').on('focusout','#search',function (){
    $(this).children('button').css('z-index','0');
    $(this).children('input').css({'cursor':'pointer','background':'transparent'});
})

$(window).resize(function(){
    var winWidth=window.innerWidth;
    if(winWidth<768){
        $('#top>div.clear>a').hide();
        $('#top').css('background', "#fff");
    }
});

$('#focus').css("height", window.innerHeight + "px");
window.onresize = function () {
    $('#focus').css("height", window.innerHeight + "px");
}
var move = window.innerHeight + 100 + $('#move')[0].offsetTop;
var ai = window.innerHeight + 100 + $('#ai')[0].offsetTop;
var vr = window.innerHeight + 100 + $('#vr')[0].offsetTop;
var uav = window.innerHeight + 100 + $('#uav')[0].offsetTop;

window.onscroll = function () {
    var jl = document.body.scrollTop;
    if (jl == 0) {
        jl = $('html,body').scrollTop();
    }
    var winHei = window.innerHeight;
    //console.log(jl);
    if (window.innerWidth > 768) {
        if (jl > 10) {
            $('#top').css('background', "rgba(0,0,0,.8)");
            $('#top>div.clear>a').show();
            $('.htmleaf-container').show();
        }
        if (jl < 10) {
            $('#top').css('background', "transparent");
            $('#top>div.clear>a').hide();
        }

        if (jl >= winHei) {
            $('#top').slideUp(500);
            $('#to_top').show();
        } else {
            $('#top').show();
            $('#to_top').hide();
        }
    }else{
        $('#top>div.clear>a').hide();

    }

    $(function topshow(){
        if(window.innerWidth>768) {
            $('#top').on('mouseenter', '.top_list>li', function () {
                $(this).children('div').slideDown(100);
            })
            $('#top').on('mouseleave', '.top_list>li', function () {
                $(this).children('div').slideUp(100);
            })
            if (window.innerWidth <= 768) {
                $('#top').hide();
            }
        }
    });


    if (jl > uav && jl < uav + 600) {
        $('#banner li').eq(3).addClass('active').siblings('.active').removeClass('active');
    } else if (jl > vr && jl < uav) {
        $('#banner li').eq(2).addClass('active').siblings('.active').removeClass('active');
    } else if (jl > ai && jl < vr) {
        $('#banner li').eq(1).addClass('active').siblings('.active').removeClass('active');
    }
    else if (jl > move && jl < ai) {
        $('#banner li').eq(0).addClass('active').siblings('.active').removeClass('active');
        $('#banner').css('left', "0px");
    }
    if (jl < move | jl > uav + 600) {
        $('#banner li').removeClass('active');
        $('#banner').css('left', "-100px");
    } else {
        $('#banner').css('left', "0px");
    }
}

$('#banner li').click(function () {
    var navgeter = $(this).attr('target');
    $('html,body').animate({
        'scrollTop': window.innerHeight + $('#nav').height() + $('#' + navgeter)[0].offsetTop
    }, 300)
})
$('#top_btn').click(function () {
    $('#top').slideToggle(300);
    $('#top_btn').toggleClass('top_colse');
})


$('.focus_start').click(function () {
    $('html,body').animate({
        'scrollTop': window.innerHeight
    }, 500)
})
$('#top .select input').focus(function () {
    $(this).css('background', '#fff');
})
$('#top .select input').focusout(function () {
    $(this).css('background', '');
})


//图片列表切换
$('.marque').mouseenter(function () {
    $('a[class^=arrow]').show();
})
$('.marque').mouseleave(function () {
    $('a[class^=arrow]').hide();
})

//登录按钮
$('#top').on('click', 'a#load', function (e) {
    e.preventDefault();
    $('#model_load').show();
    $('html').css('overflow-y','hidden');
})
$('#top').on('click','.model_close',function (){
    $(this).parent().parent().hide();
    $('html').css('overflow-y','auto');
})
$('#top').on('click','#model_load',function (){
    var a=$(this);
    console.log(a);
})
$('#model_load:not(.model_load_top)');


/*随机验证码*/
function change(obj){
    $(obj).prev().attr('src',"data/vcode.php?a"+Math.random());
    $.get('data/vcode.php',function(e){
        var length=e.length-4;
        var str=e.substr(length)
        console.log(str);
    })
}
/*登录框*/
$('#top').on('focus','#user',function (){
    $(this).css('background','url(images/abc.png) no-repeat -8px -664px');
})
$('#top').on('focusout','#user',function (){
    $(this).css('background','url(images/abc.png) no-repeat -8px -624px');
})

$('#top').on('focus','#pwd',function (){
    $(this).css('background','url(images/abc.png) no-repeat -8px -743px');
})
$('#top').on('focusout','#pwd',function (){
    $(this).css('background','url(images/abc.png) no-repeat -8px -703px');
})


//封装函数 - 在提交表单调用
$('#top').on('submit','form',(function(){
    //判断用户是否勾选了记住密码
    var isrem=$("#isrem")[0];
    var user=$("#user").val();
    var pwd=$("#pwd").val();
    if(user==""){
        $('.model_load_body>p').html('请填写手机/邮箱/用户名！');
        return false;
    }
    if(pwd==""){
        $('.model_load_body>p').html('请输入密码');
        return false;
    }
    if(isrem.checked){
        var json={
            "user":user,
            "pwd":pwd
        }
        json=JSON.stringify(json);
        if(user!=""&user!=null) {
            window.localStorage.setItem(json.user,json);
            console.log(json);
        }
        if(user){
            var json=JSON.parse(user);
            var userEle=document;
        }
        return false;
    }
})
)


setTimeout(function(){
    $('#loader-wrapper').remove();

},5000);


if(window.innerWidth>768){
    $('#top').css('background', "transparent");
}


/*导航轮播图*/
var focus_id = 1;
var focus_time = 0;
var focus_bg = "";
var focus_begin = true;
var focus_interval;
var focus_url = "";
var focus_count = $(".focus_img").length;

function func_focus() {
    if (focus_id > focus_count) {
        focus_id = 1;
    }
    if (!focus_begin) {
        clearInterval(focus_interval);
    }
    focus_interval = setInterval("focus_show(" + focus_id + ")", 50);
}
function focus_show(id) {
    if (focus_time < 20 && focus_bg != "") {
        var v = 100 / 10;
        $("#focus_show")[0].style.opacity = v * focus_time / 100;
        focus_time++;
    } else if (focus_count > 0) {
        if (!focus_begin) {
            $("#focus_bg").html("<img src='" + focus_bg + "' />");
            focus_time = 0;
            clearInterval(focus_interval);
        }
        var val = $("#focus_" + focus_id).html();
        var arr = val.split("|");
        $("#focus_show")[0].style.opacity = 0;
        $("#focus_show").html("<a href='" + focus_url + "' target='_blank'" + "'><img src='" + arr[0] + "' /></a>");
        focus_url = arr[1];
        if (focus_count > 1) {
            focus_id++;
        }
        if (!focus_begin) {
            focus_interval = setInterval("func_focus()", 3000);
        }
        else {
            focus_begin = false;
        }
        focus_bg = arr[0];
    }
}
func_focus();

/*页脚链接*/
$(document).ready(function (ev) {
    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;
    $('#ss_toggle').on('click', function (ev) {
        rot = parseInt($(this).data('rot')) - 180;
        menu.css('transform', 'rotate(' + rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
        if (rot / 180 % 2 == 0) {
            toggle.parent().addClass('ss_active');
            toggle.addClass('close');
        } else {
            toggle.parent().removeClass('ss_active');
            toggle.removeClass('close');
        }
        $(this).data('rot', rot);
    });
    menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (rot / 180 % 2 == 0) {
            $('#ss_menu div i').addClass('ss_animate');
        } else {
            $('#ss_menu div i').removeClass('ss_animate');
        }
    });
});