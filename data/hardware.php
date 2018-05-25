<?php
	header('Content-Type:application/json;charset="utf-8"');

	$hardware=[];
	$hardware[]=["hid"=>1,"title"=>"caraok V9","src"=>"img/1.png"];
	$hardware[]=["hid"=>2,"title"=>"嗨镜H1","src"=>"img/2.jpg"];
	$hardware[]=["hid"=>3,"title"=>"shinecon千幻魔镜二代","src"=>"img/3.jpg"];
	$hardware[]=["hid"=>4,"title"=>"小宅Z3","src"=>"img/4.jpg"];
	$hardware[]=["hid"=>5,"title"=>"GLAXXES VR FAN","src"=>"img/5.jpg"];
	$hardware[]=["hid"=>6,"title"=>"魔镜小苍","src"=>"img/6.jpg"];
	$hardware[]=["hid"=>7,"title"=>"博思尼bossnel V5头戴式娱乐终端","src"=>"img/7.jpg"];
	$hardware[]=["hid"=>8,"title"=>"伏翼Pro X1一体机","src"=>"img/8.jpg"];
	$hardware[]=["hid"=>9,"title"=>"乐帆TVR","src"=>"img/9.jpg"];
	$hardware[]=["hid"=>10,"title"=>"Glaxxes X3","src"=>"img/10.jpg"];

	echo json_encode($hardware);