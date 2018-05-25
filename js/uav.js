$('#top').load('data/header.php',function(){
    $('.top_list>li').eq(4).addClass('science');
});
$('#footer').load('data/footer.php');

$('.tabs').on('mouseenter','li',function(){
    var id=$(this).children().attr('href');
    $(this).addClass('hover').siblings('.hover').removeClass('hover');
    var left=0;
    id == "#tc10"?left=0:
                id == "#tc20"?left=-1120:
                id == "#tc30"?left=-2240:0;
    $('.part6_toggle>div').stop(true).animate({
        left:left+ "px"
    },500)
 })
$('.tabs').on('click','a',function(e){
    e.preventDefault();
})
$('.introduce>.list:lt(4):not(:first)').on('mouseenter','a',function(){
    var id=$(this).attr('toggle');
    var left=0;
    id == "#show1"?left=0:
                id == "#show2"?left=-1120:
                id == "#show3"?left=-2240:0;
    $('.list_nav').stop(true).animate({
        left:left+ "px"
    },500)
 })


$('.arrow_right').click(function () {
    var char = $(this).parent().children().children().eq(0);
    var chars = $(this).parent().children().children().children().length;
    var left = parseInt($(char).css('left'));
    if (isNaN(left)) {
        left = 0;
    }
    if (left < -280 * (chars - 5)) {
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



window.onscroll = function () {
    var jl = document.body.scrollTop;
    if (jl == 0) {
        jl = $('html,body').scrollTop();
    }
    if (window.innerWidth > 768) {
        if (jl > 10) {
            $('#top').css('background', "#000");
        }
        if (jl < 10) {
            $('#top').css('background', "");
        }
        if (jl >=500) {
            console.log('ch');
            $('#top').hide();
            $('#to_top').show();
            $('.introduce').addClass('introTop');
        } else {
            $('#top').show();
            $('#to_top').hide();
            $('.introduce').removeClass('introTop');
        }

    }


}


$('#top .select input').focus(function () {
    $(this).css('background', '#fff');
})
$('#top .select input').focusout(function () {
    $(this).css('background', '');
})
$('.marque').mouseenter(function () {
    $('a[class^=arrow]').show();
})
$('.marque').mouseleave(function () {
    $('a[class^=arrow]').hide();
})

$(window).resize(function(){
    if(window.innerWidth>768) {
        $('#top').on('mouseenter', '.top_list>li', function () {
            $(this).children('div').slideDown(100);
        })
        $('#top').on('mouseleave', '.top_list>li', function () {
            $(this).children('div').slideUp(100);
        })
    }
})
$('#top').on('click', 'a#load', function (e) {
    e.preventDefault();
    $('#model_load').show();
})
$('#top').on('click','.model_close',function (){
    $(this).parent().parent().hide();
})

/*搜索�?*/
$('#top').on('focusin','#search',function (){
    $(this).children('button').css('z-index','5');
    $(this).children('input').css({'cursor':'text','background':'rgba(255,255,255,.5)'});
})
$('#top').on('focusout','#search',function (){
    $(this).children('button').css('z-index','0');
    $(this).children('input').css({'cursor':'pointer','background':'transparent'});
})

/*返回顶部*/
$('#footer').on('click','#to_top',function () {
    $('body,html').animate({
        'scrollTop': 0
    }, 300)
})


var moveForce = 30;
var rotateForce = 20;

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    var rotateY = (e.pageX / docX * rotateForce*2) -rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2)-3);

    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');

    $('.popup-2')
        .css('right', moveX+'px')
        .css('bottom', moveY+'px')
        .css('transform', 'rotateX('-rotateX-'deg) rotateY('-rotateY-'deg)');
});