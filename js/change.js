function img_move(x,y){
        //移動前
        switch(x){
            case 0:
                area0.src = "img/A.png";
                break;
            case 1:
                area1.src ="img/A.png";
                break;
            case 2:
                area2.src ="img/A.png";
                break;
            case 3:
                area3.src ="img/A.png";
                break;
            case 4:
                area4.src ="img/A.png";
                break;
            case 5:
                area5.src ="img/A.png";
                break;
            case 6:
                 area6.src ="img/A.png";
                break;
            case 7:
                area7.src ="img/A.png";
                break;
            case 8:
                area8.src ="img/A.png";
                break;
            case 9:
                area9.src ="img/A.png";
                break;
            case 10:
                area10.src ="img/A.png";
                break;
            }

        //移動先
        switch(y){
            case 0:
                if(choice_R == true){
                    area0.src = "img/rabbit.png";
                }
                else{
                    area0.src = "img/hounds.png"
                }
                break;

            case 1:
                if(choice_R == true){
                    area1.src = "img/rabbit.png";
                }
                else{
                    area1.src = "img/hounds.png"
                }
                break;

            case 2:
                if(choice_R == true){
                    area2.src = "img/rabbit.png";
                }
                else{
                    area2.src = "img/hounds.png"
                }
                 break;

            case 3:
                if(choice_R == true){
                    area3.src = "img/rabbit.png";
                }
                else{
                    area3.src = "img/hounds.png"
                }
                break;

            case 4:
                if(choice_R == true){
                    area4.src = "img/rabbit.png";
                }
                else{
                    area4.src = "img/hounds.png"
                }
                break;
            case 5:
                if(choice_R == true){
                    area5.src = "img/rabbit.png";
                }
                else{
                    area5.src = "img/hounds.png"
                }
                break;
            case 6:
                if(choice_R == true){
                    area6.src = "img/rabbit.png";
                }
                else{
                    area6.src = "img/hounds.png"
                }
                break;
            case 7:
                if(choice_R == true){
                    area7.src = "img/rabbit.png";
                }
                else{
                    area7.src = "img/hounds.png"
                }
                break;
            case 8:
                if(choice_R == true){
                    area8.src = "img/rabbit.png";
                }
                else{
                    area8.src = "img/hounds.png"
                }
                break;
            case 9:
                if(choice_R == true){
                    area9.src = "img/rabbit.png";
                }
                else{
                    area9.src = "img/hounds.png"
                }
                break;
            case 10:
                if(choice_R == true){
                    area10.src = "img/rabbit.png";
                }
                else{
                    area10.src = "img/hounds.png"
                }
                break;
            }
            

            if(choice_H1 == true){
                hounds_1[x] = false;
                hounds_1[y] = true;
                choice_H1 = false;
                click_count = true;
                turn = false;
                turn2 = false;
                which_turn.innerHTML = "兎のターン";
            }
            if(choice_H2 == true){
                hounds_2[x] = false;
                hounds_2[y] = true;
                choice_H2 = false;
                click_count = true;
                turn = false;
                turn2 = false;
                which_turn.innerHTML = "兎のターン";
            }
            if(choice_H3 == true){
                hounds_3[x] = false;
                hounds_3[y] = true;
                choice_H3 = false;
                click_count = true;
                turn = false;
                turn2 = false;
                which_turn.innerHTML = "兎のターン";
            }
            if(choice_R == true){
                rabbit[x] = false;
                rabbit[y] = true;
                choice_R = false;
                click_count = true;
                turn = true;
                turn2 = true;
                which_turn.innerHTML = "猟犬のターン";
            }
            what_Choice.innerHTML = "　";
}
