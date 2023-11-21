which_turn.innerHTML = "猟犬のターン";
window.open("javascript:window.addEventListener('resize', function (e) {window.resizeTo(300, 300); }, false);", "Good Luck.", "top=368, left=624, width=300, height=300");
//Area0
area0.addEventListener("click",move_to_area0);
function move_to_area0(){
    //turn が true 猟犬のターン *ここから
    if(turn == true){
        //選択
        Change_Choice(0);
        //兎がいない時
        if(rabbit[0] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[0] == false && hounds_3[0] == false){
                    //移動範囲
                    if(hounds_1[3] == true){
                        img_move(3,0);
                    }
                    if(hounds_1[4] == true){
                        img_move(4,0);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[0] == false && hounds_3[0] == false){
                    //移動範囲
                    if(hounds_2[3] == true){
                        img_move(3,0);
                    }
                    if(hounds_2[4] == true){
                        img_move(4,0);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[0] == false && hounds_2[0] == false){
                    //移動範囲
                    if(hounds_3[3] == true){
                        img_move(3,0);
                    }
                    if(hounds_3[4] == true){
                        img_move(4,0);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(0);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[0] == false && hounds_2[0] == false && hounds_3[0] == false){
                //移動範囲
                if(rabbit[3] == true){
                    img_move(3,0);
                }
                if(rabbit[4] == true){
                    img_move(4,0);
                }
                if(rabbit[5] == true){
                    img_move(5,0);
                }
                if(rabbit[1] == true){
                    img_move(1,0);
                }
            }
        }
    }// *ここまで
}
  

//Area1
area1.addEventListener("click",move_to_area1);
function move_to_area1(){
     //turn が true 猟犬のターン *ここから
     if(turn == true){
        //選択
        Change_Choice(1);
        //兎がいない時
        if(rabbit[1] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[1] == false && hounds_3[1] == false){
                    //移動範囲
                    if(hounds_1[0] == true){
                        img_move(0,1);
                        remove_shakeClass(0);
                    }
                    if(hounds_1[5] == true){
                        img_move(5,1);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[1] == false && hounds_3[1] == false){
                    //移動範囲
                    if(hounds_2[0] == true){
                        img_move(0,1);
                    }
                    if(hounds_2[5] == true){
                        img_move(5,1);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[1] == false && hounds_2[1] == false){
                    //移動範囲
                    if(hounds_3[0] == true){
                        img_move(0,1);
                    }
                    if(hounds_3[5] == true){
                        img_move(5,1);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(1);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[1] == false && hounds_2[1] == false && hounds_3[1] == false){
                //移動範囲
                if(rabbit[0] == true){
                    img_move(0,1);
                }
                if(rabbit[5] == true){
                    img_move(5,1);
                }
                if(rabbit[2] == true){
                    img_move(2,1);
                }
            }
        }
    }// *ここまで
}


//Area2
area2.addEventListener("click",move_to_area2);
function move_to_area2(){
    //turn が true 猟犬のターン *ここから
    if(turn == true){
        //選択
        Change_Choice(2);
        //兎がいない時
        if(rabbit[2] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[2] == false && hounds_3[2] == false){
                    //移動範囲
                    if(hounds_1[1] == true){
                        img_move(1,2);
                    }
                    if(hounds_1[5] == true){
                        img_move(5,2);
                    }
                    if(hounds_1[6] == true){
                        img_move(6,2);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[2] == false && hounds_3[2] == false){
                    //移動範囲
                    if(hounds_2[1] == true){
                        img_move(1,2);
                    }
                    if(hounds_2[5] == true){
                        img_move(5,2);
                    }
                    if(hounds_2[6] == true){
                        img_move(6,2);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[2] == false && hounds_2[2] == false){
                    //移動範囲
                    if(hounds_3[1] == true){
                        img_move(1,2);
                    }
                    if(hounds_3[5] == true){
                        img_move(5,2);
                    }
                    if(hounds_3[6] == true){
                        img_move(6,2);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(2);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[2] == false && hounds_2[2] == false && hounds_3[2] == false){
                //移動範囲
                if(rabbit[1] == true){
                    img_move(1,2);
                }
                if(rabbit[5] == true){
                    img_move(5,2);
                }
                if(rabbit[6] == true){
                    img_move(6,2);
                }
                if(rabbit[7] == true){
                    img_move(7,2);
                }
            }
        }
    }// *ここまで
}

//Area3
area3.addEventListener("click",move_to_area3);
function move_to_area3(){
    //turn が true 猟犬のターン *ここから
    if(turn == true){
        //選択
        Change_Choice(3);
        //兎がいない時
        if(rabbit[3] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[3] == false && hounds_3[3] == false){}
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[3] == false && hounds_3[3] == false){}
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[3] == false && hounds_2[3] == false){}
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(3);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[3] == false && hounds_2[3] == false && hounds_3[3] == false){
                //移動範囲
                if(rabbit[0] == true){
                    img_move(0,3);
                }
                if(rabbit[4] == true){
                    img_move(4,3);
                }
                if(rabbit[8] == true){
                    img_move(8,3);
                }
            }
        }
    }// *ここまで
}


//Area4
area4.addEventListener("click",move_to_area4);
function move_to_area4(){
     //turn が true 猟犬のターン *ここから
     if(turn == true){
        //選択
        Change_Choice(4);
        //兎がいない時
        if(rabbit[4] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[4] == false && hounds_3[4] == false){
                    if(hounds_1[0] == true){
                        img_move(0,4);
                    }
                    if(hounds_1[3] == true){
                        img_move(3,4);
                    }
                    if(hounds_1[8] == true){
                        img_move(8,4);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[4] == false && hounds_3[4] == false){
                    if(hounds_2[0] == true){
                        img_move(0,4);
                    }
                    if(hounds_2[3] == true){
                        console.log(hounds_1[3]);
                        img_move(3,4);
                    }
                    if(hounds_2[8] == true){
                        img_move(8,4);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[4] == false && hounds_2[4] == false){
                    if(hounds_3[0] == true){
                        img_move(0,4);
                    }
                    if(hounds_3[3] == true){
                        img_move(3,4);
                    }
                    if(hounds_3[8] == true){
                        img_move(8,4);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(4);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[4] == false && hounds_2[4] == false && hounds_3[4] == false){
                //移動範囲
                if(rabbit[0] == true){
                    img_move(0,4);
                }
                if(rabbit[3] == true){
                    img_move(3,4);
                }
                if(rabbit[8] == true){
                    img_move(8,4);
                }
                if(rabbit[5] == true){
                    img_move(5,4);
                }
            }
        }
    }// *ここまで
}


//Area5
area5.addEventListener("click",move_to_area5);
function move_to_area5(){
     //turn が true 猟犬のターン *ここから
     if(turn == true){
        //選択
        Change_Choice(5);
        //兎がいない時
        if(rabbit[5] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[5] == false && hounds_3[5] == false){
                    if(hounds_1[1] == true){
                        img_move(1,5);
                    }
                    if(hounds_1[0] == true){
                        img_move(0,5);
                    }
                    if(hounds_1[4] == true){
                        img_move(4,5);
                    }
                    if(hounds_1[8] == true){
                        img_move(8,5);
                    }
                    if(hounds_1[9] == true){
                        img_move(9,5);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[5] == false && hounds_3[5] == false){
                    if(hounds_2[1] == true){
                        img_move(1,5);
                    }
                    if(hounds_2[0] == true){
                        img_move(0,5);
                    }
                    if(hounds_2[4] == true){
                        img_move(4,5);
                    }
                    if(hounds_2[8] == true){
                        img_move(8,5);
                    }
                    if(hounds_2[9] == true){
                        img_move(9,5);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[5] == false && hounds_2[5] == false){
                    if(hounds_3[1] == true){
                        img_move(1,5);
                    }
                    if(hounds_3[0] == true){
                        img_move(0,5);
                    }
                    if(hounds_3[4] == true){
                        img_move(4,5);
                    }
                    if(hounds_3[8] == true){
                        img_move(8,5);
                    }
                    if(hounds_3[9] == true){
                        img_move(9,5);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(5);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[5] == false && hounds_2[5] == false && hounds_3[5] == false){
                //移動範囲
                if(rabbit[1] == true){
                    img_move(1,5);
                }
                if(rabbit[0] == true){
                    img_move(0,5);
                }
                if(rabbit[4] == true){
                    img_move(4,5);
                }
                if(rabbit[8] == true){
                    img_move(8,5);
                }
                if(rabbit[9] == true){
                    img_move(9,5);
                }
                if(rabbit[10] == true){
                    img_move(10,5);
                }
                if(rabbit[6] == true){
                    img_move(6,5);
                }
                if(rabbit[2] == true){
                    img_move(2,5);
                }
            }
        }
    }// *ここまで
}


//Area6
area6.addEventListener("click",move_to_area6);
function move_to_area6(){
    if(turn == true){
        //選択
        Change_Choice(6);
        //兎がいない時
        if(rabbit[6] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //area6に猟犬2,3がいない時
                if(hounds_2[6] == false && hounds_3[6] == false){
                    //猟犬1が 3 か 4 にいる時、0 に来れる
                    if(hounds_1[2] == true){
                        img_move(2,6);
                        choice_H1 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                    if(hounds_1[5] == true){
                        img_move(5,6);
                        choice_H1 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                    if(hounds_1[10] == true){
                        img_move(10,6);
                        choice_H1 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //area 0に猟犬2,3がいない時
                if(hounds_1[6] == false && hounds_3[6] == false){
                    //猟犬2が 3 か 4 にいる時、0 に来れる
                    //猟犬1が 3 か 4 にいる時、0 に来れる
                    if(hounds_2[2] == true){
                        img_move(2,6);
                        choice_H2 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                    if(hounds_2[5] == true){
                        img_move(5,6);
                        choice_H1 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                    if(hounds_2[10] == true){
                        img_move(10,6);
                        choice_H2 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //area 0に猟犬2,3がいない時
                if(hounds_3[6] == false && hounds_3[6] == false){
                    //猟犬3が 3 か 4 にいる時、0 に来れる
                    //猟犬1が 3 か 4 にいる時、0 に来れる
                    if(hounds_3[2] == true){
                        img_move(2,6);
                        choice_H3 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                    if(hounds_3[5] == true){
                        img_move(5,6);
                        choice_H3 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                    if(hounds_3[10] == true){
                        img_move(10,6);
                        choice_H3 = false;
                        click_count = true;
                        turn = false;
                        turn2 = false;
                    }
                }
            }
        }
    }
    else{
        //選択
        Change_Choice(6);
        //移動選択中で移動可能
        if(choice_R == true){
            //area 0に猟犬1,2,3がいない時
            if(hounds_1[6] == false && hounds_2[6] == false && hounds_3[6] == false){
                //兎が 1 3 4 5 にいる時、 0　に来れる
                if(rabbit[2] == true){
                    img_move(2,6);
                    console.log("aa");
                    choice_R = false;
                    click_count = true;
                    turn = true;
                    turn2 = true;
                }
                if(rabbit[5] == true){
                    img_move(5,6);
                    choice_R = false;
                    click_count = true;
                    turn = true;
                    turn2 = true;
                }
                if(rabbit[7] == true){
                    console.log("asasa");
                    img_move(7,6);
                    choice_R = false;
                    click_count = true;
                    turn = true;
                    turn2 = true;
                }
                if(rabbit[10] == true){
                    img_move(10,6);
                    choice_R = false;
                    click_count = true;
                    turn = true;
                    turn2 = true;
                }
            }
        }
    }
}


//Area7
area7.addEventListener("click",move_to_area7);
function move_to_area7(){
    //turn が true 猟犬のターン *ここから
    if(turn == true){
        //選択
        Change_Choice(7);
        //兎がいない時
        if(rabbit[7] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[7] == false && hounds_3[7] == false){
                    //移動範囲
                    if(hounds_1[2] == true){
                        img_move(2,7);
                    }
                    if(hounds_1[6] == true){
                        img_move(6,7);
                    }
                    if(hounds_1[10] == true){
                        img_move(10,7);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[7] == false && hounds_3[7] == false){
                    //移動範囲
                    if(hounds_2[2] == true){
                        img_move(2,7);
                    }
                    if(hounds_2[6] == true){
                        img_move(6,7);
                    }
                    if(hounds_2[10] == true){
                        img_move(10,7);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[2] == false && hounds_2[2] == false){
                    //移動範囲
                    if(hounds_3[2] == true){
                        img_move(2,7);
                    }
                    if(hounds_3[6] == true){
                        img_move(6,7);
                    }
                    if(hounds_3[10] == true){
                        img_move(10,7);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(7);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[7] == false && hounds_2[7] == false && hounds_3[7] == false){
                //移動範囲
                if(rabbit[2] == true){
                    img_move(2,7);
                }
                if(rabbit[6] == true){
                    img_move(6,7);
                }
                if(rabbit[10] == true){
                    img_move(10,7);
                }
            }
            judgmentRabbit_Move3(2,8,10);
        }
    }// *ここまで
}


//Area8
area8.addEventListener("click",move_to_area8);
function move_to_area8(){
     //turn が true 猟犬のターン *ここから
     if(turn == true){
        //選択
        Change_Choice(8);
        //兎がいない時
        if(rabbit[8] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[8] == false && hounds_3[8] == false){
                    //移動範囲
                    if(hounds_1[3] == true){
                        img_move(3,8);
                    }
                    if(hounds_1[4] == true){
                        img_move(4,8);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[8] == false && hounds_3[8] == false){
                    //移動範囲
                    if(hounds_2[3] == true){
                        img_move(3,8);
                    }
                    if(hounds_2[4] == true){
                        img_move(4,8);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[8] == false && hounds_2[8] == false){
                    //移動範囲
                    if(hounds_3[3] == true){
                        img_move(3,8);
                    }
                    if(hounds_3[4] == true){
                        img_move(4,8);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(8);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[8] == false && hounds_2[8] == false && hounds_3[8] == false){
                //移動範囲
                if(rabbit[3] == true){
                    img_move(3,8);
                }
                if(rabbit[4] == true){
                    img_move(4,8);
                }
                if(rabbit[5] == true){
                    img_move(5,8);
                }
                if(rabbit[9] == true){
                    img_move(9,8);
                }
            }
        }
    }// *ここまで
}


//Area9
area9.addEventListener("click",move_to_area9);
function move_to_area9(){
    //turn が true 猟犬のターン *ここから
    if(turn == true){
        //選択
        Change_Choice(9);
        //兎がいない時
        if(rabbit[9] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[9] == false && hounds_3[9] == false){
                    //移動範囲
                    if(hounds_1[8] == true){
                        img_move(8,9);
                    }
                    if(hounds_1[5] == true){
                        img_move(5,9);
                    }
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[9] == false && hounds_3[9] == false){
                    //移動範囲
                    if(hounds_2[8] == true){
                        img_move(8,9);
                    }
                    if(hounds_2[5] == true){
                        img_move(5,9);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[9] == false && hounds_2[9] == false){
                    //移動範囲
                    if(hounds_3[8] == true){
                        img_move(8,9);
                    }
                    if(hounds_3[5] == true){
                        img_move(5,9);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(9);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[9] == false && hounds_2[9] == false && hounds_3[9] == false){
                //移動範囲
                if(rabbit[8] == true){
                    img_move(8,9);
                }
                if(rabbit[5] == true){
                    img_move(5,9);
                }
                if(rabbit[10] == true){
                    img_move(10,9);
                }
            }
        }
    }// *ここまで
}


//Area10
area10.addEventListener("click",move_to_area10);
function move_to_area10(){
     //turn が true 猟犬のターン *ここから
     if(turn == true){
        //選択
        Change_Choice(10);
        //兎がいない時
        if(rabbit[10] == false){
            //猟犬1選択中
            if(choice_H1 == true){
                //猟犬2,3がいない時
                if(hounds_2[10] == false && hounds_3[10] == false){
                    //移動範囲
                    if(hounds_1[9] == true){
                        img_move(9,10);
                    }
                    if(hounds_1[5] == true){
                        img_move(5,10);
                    }
                    if(hounds_1[6] == true){
                        img_move(6,10);
                    }
                   
                }
            }
            //猟犬2選択中
            if(choice_H2 == true){
                //猟犬1,3がいない時
                if(hounds_1[10] == false && hounds_3[10] == false){
                    //移動範囲
                    if(hounds_2[9] == true){
                        img_move(9,10);
                    }
                    if(hounds_2[5] == true){
                        img_move(5,10);
                    }
                    if(hounds_2[6] == true){
                        img_move(6,10);
                    }
                }
            }
            //猟犬3選択中
            if(choice_H3 == true){
                //猟犬1,2がいない時
                if(hounds_1[10] == false && hounds_2[10] == false){
                    //移動範囲
                    if(hounds_3[9] == true){
                        img_move(9,10);
                    }
                    if(hounds_3[5] == true){
                        img_move(5,10);
                    }
                    if(hounds_3[6] == true){
                        img_move(6,10);
                    }
                }
            }
        }
    }
    //turn が false 兎のターン
    else{
        //選択
        Change_Choice(10);
        //移動選択中で移動可能
        if(choice_R == true){
            //猟犬1,2,3がいない時
            if(hounds_1[10] == false && hounds_2[10] == false && hounds_3[10] == false){
                //移動範囲
                if(rabbit[9] == true){
                    img_move(9,10);
                }
                if(rabbit[5] == true){
                    img_move(5,10);
                }
                if(rabbit[6] == true){
                    img_move(6,10);
                }
                if(rabbit[7] == true){
                    img_move(7,10);
                }
                  
            }
        }
    }// *ここまで
}

judgment_time();


