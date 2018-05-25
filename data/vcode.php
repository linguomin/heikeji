<?php 
// 1:创建画布
$img=imagecreatetruecolor(80,35);
// 2:设置颜色
$gray=imagecolorallocate($img,200,200, 200);
$red=imagecolorallocate($img,255,0,0);
$green=imagecolorallocate($img,0,255,0);
$color=imagecolorallocate($img,rand(0,20),rand(0,20),rand(0,20));
imagefill($img,0,0, $gray);
// 3:绘制图像
// 绘制干扰点
for ($i=0; $i < 50; $i++) { 
	imagesetpixel($img,rand(0,100),rand(0,35), $red);
}
// 绘制干扰线
for ($m=0; $m < 10; $m++) { 
	imageline($img,rand(0,100),rand(0,35),rand(0,80),rand(0,35),$green);
}
// 绘制文字
$str="0123456789ABCDEFGHIKLMNOPQRSTUYVWXYZabcdefghijklmnopqrtsvyvxyz";
$strs=str_shuffle($str);
$newstr=substr($strs,0,5);
// imagestring($img,5,30,15,$newstr, $color);
for ($j=0; $j < 4; $j++) { 
	$color=imagecolorallocate($img,rand(0,150),rand(0,155),rand(0,155));
	imagettftext($img,20,rand(-20,35),($j*20+5),25, $color,"arial.ttf", $newstr[$j]);
}
// 4：设置格式，生成图像
header("content-type:image/jpeg,text/plain;charset=utf-8");
imagejpeg($img);
// 5:释放资源，销毁内存中的图像
imagedestroy($img);
echo $newstr;