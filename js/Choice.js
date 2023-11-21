function Change_Choice(x){
   //クリック1回目
    if(click_count == true){
        //猟犬限定 turn2 が true
        if(turn2 == true){
            if(hounds_1[x] == true){
                console.log("猟犬1を選択中");
                what_Choice.innerHTML = "猟犬1を選択中....";
                //猟犬1を選択
                choice_H1 = true;
                //クリック2回目へ
                click_count =false;
            }
            if(hounds_2[x] == true){
                console.log("猟犬2を選択中");
                what_Choice.innerHTML = "猟犬2を選択中....";
                //猟犬2を選択
                choice_H2 = true;
                //クリック2回目へ
                click_count =false;
            }
            if(hounds_3[x] == true){
                console.log("猟犬3を選択中");
                what_Choice.innerHTML = "猟犬3を選択中....";
                //猟犬3を選択
                choice_H3 = true;
                //クリック2回目へ
                click_count =false;
            }
        }
        //兎限定 turn2 が false
        else{
            which_turn.innerHTML = "兎のターン";
            if(rabbit[x] == true){
                console.log("兎を選択中");
                what_Choice.innerHTML = "兎を選択中....";
                //兎を選択
                choice_R = true;
                //クリック2回目へ
                click_count = false;
            }   
        }
    }
    //クリック2回目
    else{
        //猟犬限定　選択を解除
            if(hounds_1[x] == true){
                console.log("選択を解除");
                what_Choice.innerHTML = " ";
                if(choice_H1 == true){
                    //猟犬1の選択を解除
                    choice_H1 = false;
                }
            }
            if(hounds_2[x] == true){
                console.log("選択を解除");
                what_Choice.innerHTML = " ";
                if(choice_H2 == true){
                    //猟犬2の選択を解除
                    choice_H2 = false;
                }
            }
            if(hounds_3[x] == true){
                console.log("選択を解除");
                what_Choice.innerHTML = " ";
                if(choice_H3 == true){
                    //猟犬3の選択を解除
                    choice_H3 = false;
                }
            }
        
        //兎限定　選択を解除
        if(rabbit[x] == true){
            console.log("兎の選択を解除");
            what_Choice.innerHTML = " ";
            if(choice_R == true){
                //兎の選択を解除
                choice_R = false;

            }
        }
       
       //クリック1回目へ
        click_count =true;
    }
}

