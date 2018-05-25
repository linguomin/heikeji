$('#top').load('data/header.php',function(){
    $('.top_list>li').eq(5).addClass('science');
});
$('#footer').load('data/footer.php');

var lis=$('.more_main>ul>li');
var num=0;
load(num);
$('#btn').click(function(){
    num+=5;
    load(num);
});
function load(num){
    $.getJSON('data/text.php','',function(txt){
        for( var i=num ;i<num+5;i++){
            if(i>=txt.length){
                $('#btn').attr('disabled',true);
                $('#btn').val('没有了....');
                return;
            }
            var src=txt[i].src;
            var title=txt[i].title;
            var Iimg=new Image();
            Iimg.src=src;
            Iimg.setAttribute('title',title);
            Iimg.onload=function(){
                var div=document.createElement('div');
                var a=document.createElement('a');
                var p=document.createElement('p');
                div.className="con";
                a.href="#";
                a.innerHTML=this.getAttribute('title');
                p.innerHTML="阅读全文";
                div.appendChild(this);
                div.appendChild(a);
                div.appendChild(p);
                lis[getShort()].appendChild(div);
            }
        }
    });
}
function getShort(){   ///�找到最短li
    var index=0;
    var iH=lis[index].offsetHeight;
    for(var i=0;i<lis.length;i++){
        if(lis[i].offsetHeight<iH){
            index=i;
            iH=lis[index].offsetHeight;
        }
    }
    return index;
}
