$('#top').load('data/header.php',function(){
    $('.top_list>li').eq(3).addClass('science');
});
$('#footer').load('data/footer.php');

/*�ֲ�1*/
$('#pages').on('click','a',function(e){
    e.preventDefault();
    var target=e.target;
    $(target).parent().siblings().children().removeClass();
    $(target).addClass("checked");
});
/*�ֲ�yi*/
var imgs=[
    {"i":0,"img":"img/vr1.jpg"},
    {"i":1,"img":"img/vr2.jpg"},
    {"i":2,"img":"img/vr3.jpg"},
    {"i":3,"img":"img/vr4.jpg"},
    {"i":4,"img":"img/vr5.jpg"}
];
$('.Lplay ul').css('transform','rotatex(0deg)');
var Lplay={
    ANGLE:72,
    SANGLE:0,
    DURATION:1000,
    STEPS:200,
    interval:0,
    step:0,
    moved:0,
    deg:0,
    timer:null,     //��ʱ��ֹͣ
    WAIT:3000,      //�ֲ��ȴ�ʱ��
    canAuto:true,   //��ʾ�Ƿ���������Զ��ֲ�
    now:0,
    init:function(){
        //����ÿ����ת�ĽǶ�    this.ANGLE:72��
        //���㲽Ƶ
        this.interval=this.STEPS/this.DURATION;
        this.updateView(); //����ҳ��
        $('#pages').on("mouseover","a",function(e){
            e.preventDefault();
            //nΪ��Ҫ�ƶ������Ƕ�;
            var target= e.target;
            var n=parseInt($(target).html())-parseInt($("#pages .checked").html());
            this.move(n);
        }.bind(this));
        this.autoMove();
        $('#imgs').on("mouseover",function(){this.canAuto=false}.bind(this));
        $('#imgs').on("mouseout",function(){this.canAuto=true}.bind(this));
    },
    updateView:function(){
        for(var i= 0,htmlImgs="",htmlIdxs="";i<imgs.length;i++){
            htmlImgs+='<li><img src="'+imgs[i].img+'"/></li>';
            htmlIdxs+='<li><a href="#">'+(i+1)+'</a></li>';
        }
        $('#imgs').html(htmlImgs);
        /*************************************************/
        //����ͼƬ�ܵĿ��....   360��


        $('#pages').html(htmlIdxs);
        $('#pages>li:nth-child('+(imgs[0].i+1)+')>a').addClass("checked");
    },
    move:function(n){
        //ֹͣ����,���timer--��ֹ��������
        clearInterval(this.timer);
        this.timer=null;
        if(n<0){//���ת
            $('.Lplay ul').css('transform','rotatex('+start+'deg)');
            //ɾ�������β��n��Ԫ��,ƴ�ӵ�imgs��ͷ

            /******************************/
            //��ǰ��תλ�õĽǶ��Ƕ���
            this.tu();
            //����ҳ��

            var start=this.deg+this.ANGLE*n;
            var end=0;
        }else{//��ǰת
            this.tu();
            var start=this.deg;
            var end=-this.ANGLE*n;
        }
        this.SANGLE=start-end;
        this.step=this.SANGLE/this.STEPS;
        this.timer=setInterval(this.moveStep.bind(this,n),this.interval);
    },
    moveStep:function(n){
        if(this.moved==0&&n<=0){
            this.now=this.tu();
        }else if(this.moved==0&&n>0){
            this.now=-this.tu();
        }
            this.now-=this.step;
        /***********************************/
        $('.Lplay ul').css('transform','rotatex('+this.now+'deg)');
        this.moved++;
        if(this.moved==this.STEPS){//�ƶ�����
            clearInterval(this.timer);
            this.timer=null;
            this.moved=0;
            this.now=0;
            if(n>0){
                imgs=imgs.concat(imgs.splice(0,n));
                this.updateView();
            }else{
                imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
                this.updateView();
            }
            $('#imgs').css('transform','');
            this.autoMove();
        }
    },
    autoMove:function(){
        this.timer=setInterval(function(){
            if(this.canAuto){
                this.move(1);
            }else{
                this.autoMove();
            }
        }.bind(this),this.WAIT);
    },
    tu:function(){
        var tu=imgs[0].img;
        tu=tu.slice(6,7);
        switch (tu){
            case 1: this.deg=0;break;
            case 2: this.deg=72;break;
            case 3: this.deg=144;break;
            case 4: this.deg=216;break;
            case 5: this.deg=288;break;
        }
        return this.deg;
    }
};
Lplay.init();

/*�ֲ�er*/
$('.pic').on('click','i',function(e){
    var target=e.target;
    var picleft=parseInt($('.pic .pic_box ul').css("left"));
    if($(target).data("i")=="lf"&&picleft<=-884){
        //����
        var timer=setInterval(function(){
            picleft+=5;
            $('.pic .pic_box ul').css("left",picleft+"px");
            if(picleft>=0){
                clearInterval(timer);
                timer=null;
                picleft=0;
                $('.pic i:last-child').addClass("hover");
                $('.pic i:first-child').removeClass('hover');
            }
        },10);
    }else if($(target).data("i")=="rt"&&picleft>=0){
        var timer=setInterval(function(){
            picleft-=5;
            $('.pic .pic_box ul').css("left",picleft+"px");
            if(picleft<=-884){
                clearInterval(timer);
                timer=null;
                $('.pic i:last-child').removeClass('hover');
                $('.pic i:first-child').addClass("hover");
            }
        },10);
    }
});
/*show�ĸ߶�*/
var showh=document.body.offsetWidth*.57;
$('.show').css('height',showh+"px");

/*动态生成video*/
$.getJSON('data/video.php','',function(text){
    var html="";
    for(var i=0;i<text.length;i++){
        txt=text[i];
        var n=new Date(txt.date);
        var now=new Date();
        var day=Math.floor((now-n)/1000/3600/24);
        html+=`<li>
                <dl>
                    <dt>
                        <img src="${txt.src}" alt="${txt.alt}"/>
                    </dt>
                <dd>
                    <a href="#">虚拟现实</a>
                    <a href="#">全景视频</a>
                </dd>
                <dd>
                    <a>${txt.title}</a>
                </dd>
                <dd>${txt.content}</dd>
                <dd>
                    <span>${day}天前</span>
                    <span>${txt.num}人</span>
                    <a href="#">${txt.message}</a>
                </dd>
                </dl>
            </li>`;
    }
    $('.video ul').append(html);
});

/*硬件排名*/
rank('hardware');
accordion('hardware');
/*软件排名*/
rank('software');
accordion('software');
/*游戏排名*/
rank('game');
accordion('game');
function rank(rname){
    $.getJSON('data/'+rname+'.php','',function(data){
        var html='';
        for(var i=0;i<10;i++){
            var txt=data[i];
            html+=`
            <li>
               <i>${txt.hid}</i>
               <a class="titlea titlev" href="#">${txt.title}</a>
               <div>
                   <img src="${txt.src}" alt="${txt.title}"/>
               </div>
            </li>
        `;
        }
        $('#'+rname).html(html);
        $('ul.list>li>ul>li:nth-child(1) div').addClass("elect");
    });
}
function accordion(aname){
    $('#'+aname).on('click','li',function(e){
        var target=e.target;
        if(target.nodeName!="LI"){
            target=target.parentNode;
        }
        $(target).children('div').addClass("elect");
        $(target).siblings().children('div.elect').removeClass('elect');
        return false;
    });
}
$('.vr_box1 .list').on('mouseenter','a',function(){
    $(this).removeClass('titlea');
})
$('.vr_box1 .list').on('mouseleave','a',function(){
    $(this).addClass('titlea');
})

