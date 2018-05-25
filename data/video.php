<?php
  header('Content-Type:application/json;charset=UTF8');
  $arr=[];
  $arr[]=["src"=>"img/v1.jpg","alt"=>"VR","title"=>"VR","content"=>"VR,体验VR,神奇的感觉,火爆VR产业",
  "date"=>"2016/1/23 12:23:45","num"=>"230","message"=>"2"];
  $arr[]=["src"=>"img/v2.jpg","alt"=>"VR","title"=>"VR技术引领未来",
  "content"=>"VR让你与世界近距离接触","date"=>"2016/8/23 12:23:45","num"=>"1000","message"=>"10"];
  $arr[]=["src"=>"img/v4.jpg","alt"=>"VR","title"=>"火爆VR产业",
  "content"=>"VR时代,VR体验","date"=>"2016/4/23 12:23:45","num"=>"500","message"=>"5"];
  $arr[]=["src"=>"img/v5.jpg","alt"=>"VR","title"=>"体验VR的视觉效果",
  "content"=>"体验VR,神奇的感觉","date"=>"2016/6/23 12:23:45","num"=>"230","message"=>"4"];
  echo json_encode($arr);
?>