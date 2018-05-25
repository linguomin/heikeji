<?php
	header('Content-Type:application/json;charset="utf-8"');

	$hardware=[];
	$hardware[]=["hid"=>1,"title"=>"Look Around","src"=>"img/010.jpg"];
	$hardware[]=["hid"=>2,"title"=>"VR Galaxy","src"=>"img/11.jpg"];
	$hardware[]=["hid"=>3,"title"=>"KinoVR（KinoVR 3D Virtual Reality Streamer）","src"=>"img/12.jpg"];
	$hardware[]=["hid"=>4,"title"=>"临境全景","src"=>"img/13.jpg"];
	$hardware[]=["hid"=>5,"title"=>"VR Player","src"=>"img/14.jpg"];
	$hardware[]=["hid"=>6,"title"=>"大开眼界","src"=>"img/15.jpg"];
	$hardware[]=["hid"=>7,"title"=>"UtoVR(安卓)","src"=>"img/16.jpg"];
	$hardware[]=["hid"=>8,"title"=>"DODOcase VR App Store (beta)","src"=>"img/17.jpg"];
	$hardware[]=["hid"=>9,"title"=>"VR播放器合集","src"=>"img/18.jpg"];
	$hardware[]=["hid"=>10,"title"=>"Oculus Runtime 1.3.0","src"=>"img/19.jpg"];

	echo json_encode($hardware);