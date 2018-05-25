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
});
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
});



window.onscroll = function () {
    var jl = document.body.scrollTop;
    if (jl == 0) {
        jl = $('html,body').scrollTop();
    }
    if (window.innerWidth > 768) {
        if (jl > 10) {
            $('#top').css('background', "rgba(0,0,0,0.8)");
        }
        if (jl < 10) {
            $('#top').css('background', "");
        }

        if (jl >=500) {
            $('#top').slideUp(500);
            $('#to_top').show();
        } else {
            $('#top').show();
            $('#to_top').hide();
        }

    }


};


$('#top .select input').focus(function () {
    $(this).css('background', '#fff');
});
$('#top .select input').focusout(function () {
    $(this).css('background', '');
});
$('.marque').mouseenter(function () {
    $('a[class^=arrow]').show();
});
$('.marque').mouseleave(function () {
    $('a[class^=arrow]').hide();
});

$(window).resize(function(){
    if(window.innerWidth>768) {
        $('#top').on('mouseenter', '.top_list>li', function () {
            $(this).children('div').slideDown(100);
        })
        $('#top').on('mouseleave', '.top_list>li', function () {
            $(this).children('div').slideUp(100);
        })
    }
});
$('#top').on('click', 'a#load', function (e) {
    e.preventDefault();
    $('#model_load').show();
});
$('#top').on('click','.model_close',function (){
    $(this).parent().parent().hide();
});

/*搜索框*/
$('#top').on('focusin','#search',function (){
    $(this).children('button').css('z-index','5');
    $(this).children('input').css({'cursor':'text','background':'rgba(255,255,255,.5)'});
});
$('#top').on('focusout','#search',function (){
    $(this).children('button').css('z-index','0');
    $(this).children('input').css({'cursor':'pointer','background':'transparent'});
});

/*返回顶部*/
$('#footer').on('click','#to_top',function () {
    $('body,html').animate({
        'scrollTop': 0
    }, 300)
});