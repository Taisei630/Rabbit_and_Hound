var area0 = document.getElementById("Area0");
var area1 = document.getElementById("Area1");
var area2 = document.getElementById("Area2");
var area3 = document.getElementById("Area3");
var area4 = document.getElementById("Area4");
var area5 = document.getElementById("Area5");
var area6 = document.getElementById("Area6");
var area7 = document.getElementById("Area7");
var area8 = document.getElementById("Area8");
var area9 = document.getElementById("Area9");
var area10 = document.getElementById("Area10");
var what_Choice = document.getElementsByClassName("What_Choice")[0];
var which_turn = document.getElementsByClassName("which_turn")[0];

area0.src = "img/hounds.png";
area1.src = "img/A.png";
area2.src = "img/A.png";
area3.src = "img/hounds.png";
area4.src = "img/A.png";
area5.src = "img/A.png";
area6.src = "img/A.png";
area7.src = "img/rabbit.png";
area8.src = "img/hounds.png";
area9.src = "img/A.png";
area10.src = "img/A.png";

//最初だけ
var FirstRock = true;
//ターン
var turn = true;
var turn2 = true;
//選択
var choice_R = false;
var choice_H1 = false;
var choice_H2 = false;
var choice_H3 = false;
var click_count = true;

//兎の位置
var rabbit = [
    false,//0
    false,//1
    false,//2
    false,//3
    false,//4
    false,//5
    false,//6
    true,//7
    false,//8
    false,//9
    false//10
];

//猟犬1の位置
var hounds_1 = [
    true,//0
    false,//1
    false,//2
    false,//3
    false,//4
    false,//5
    false,//6
    false,//7
    false,//8
    false,//9
    false//10
];

//猟犬2の位置
var hounds_2 = [
    false,//0
    false,//1
    false,//2
    true,//3
    false,//4
    false,//5
    false,//6
    false,//7
    false,//8
    false,//9
    false//10
];

//猟犬3の位置
var hounds_3 = [
    false,//0
    false,//1
    false,//2
    false,//3
    false,//4
    false,//5
    false,//6
    false,//7
    true,//8
    false,//9
    false//10
];
