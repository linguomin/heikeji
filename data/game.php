<?php
	header('Content-Type:application/json;charset="utf-8"');

	$hardware=[];
	$hardware[]=["hid"=>1,"title"=>"Out of Ammo","src"=>"img/21.jpg"];
	$hardware[]=["hid"=>2,"title"=>"雷霆战机（SOLRAVEN）","src"=>"img/22.jpg"];
	$hardware[]=["hid"=>3,"title"=>"僵尸入侵（Household Heroes）","src"=>"img/23.jpg"];
	$hardware[]=["hid"=>4,"title"=>"分歧者3：忠诚世界VR（The Divergent Series Allegiant VR）","src"=>"img/24.jpg"];
	$hardware[]=["hid"=>5,"title"=>"饥饿游戏（The Hunger Games）","src"=>"img/25.jpg"];
	$hardware[]=["hid"=>6,"title"=>"方舟：生存进化(ARK: Survival Evolved)","src"=>"img/26.jpg"];
	$hardware[]=["hid"=>7,"title"=>"Audioshield","src"=>"img/27.jpg"];
	$hardware[]=["hid"=>8,"title"=>"VR俄罗斯方块（Vetris）","src"=>"img/28.jpg"];
	$hardware[]=["hid"=>9,"title"=>"回到恐龙岛2（Back to Dinosaur Island Part 2）","src"=>"img/29.jpg"];
	$hardware[]=["hid"=>10,"title"=>"Space Pirate Trainer","src"=>"img/30.jpg"];
	echo json_encode($hardware);