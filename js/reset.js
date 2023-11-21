var r = document.getElementsByClassName("Reset")[0];
r.addEventListener("click",ReSet);
function ReSet(){
    //ターン初期化
    which_turn.innerHTML = "猟犬のターン";
    turn = true;
    turn2 = true;
    //選択初期化
    choice_R = false;
    choice_H1 = false;
    choice_H2 = false;
    choice_H3 = false;
    click_count = true;

    //画像配置初期化
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


    //兎の初期化
    rabbit[0] = false;
    rabbit[1] = false;
    rabbit[2] = false;
    rabbit[3] = false;
    rabbit[4] = false;
    rabbit[5] = false;
    rabbit[6] = false;
    rabbit[7] = true;
    rabbit[8] = false;
    rabbit[9] = false;
    rabbit[10] = false;

    //猟犬1
    hounds_1[0] = true;
    hounds_1[1] = false;
    hounds_1[2] = false;
    hounds_1[3] = false;
    hounds_1[4] = false;
    hounds_1[5] = false;
    hounds_1[6] = false;
    hounds_1[7] = false;
    hounds_1[8] = false;
    hounds_1[9] = false;
    hounds_1[10] = false;

    //猟犬2
    hounds_2[0] = false;
    hounds_2[1] = false;
    hounds_2[2] = false;
    hounds_2[3] = true;
    hounds_2[4] = false;
    hounds_2[5] = false;
    hounds_2[6] = false;
    hounds_2[7] = false;
    hounds_2[8] = false;
    hounds_2[9] = false;
    hounds_2[10] = false;

    //猟犬3
    hounds_3[0] = false;
    hounds_3[1] = false;
    hounds_3[2] = false;
    hounds_3[3] = false;
    hounds_3[4] = false;
    hounds_3[5] = false;
    hounds_3[6] = false;
    hounds_3[7] = false;
    hounds_3[8] = true;
    hounds_3[9] = false;
    hounds_3[10] = false;

}
