function judgment_time(){
    if(rabbit[0] == true){
        judgmentRabbit_Move4(1,3,4,5);
    }
    if(rabbit[1] == true){
        judgmentRabbit_Move3(0,2,5);
    }
    if(rabbit[2] == true){
        judgmentRabbit_Move4(1,5,6,7);
    }
    if(rabbit[3] == true){
        judgmentRabbit_Move3(0,4,8);
    }
    if(rabbit[4] == true){
        judgmentRabbit_Move4(0,3,8,5);
    }
    if(rabbit[5] == true){
        judgmentRabbit_Move8(0,1,2,4,6,8,9,10);
    }
    if(rabbit[6] == true){
        judgmentRabbit_Move4(2,5,10,7);
    }
    if(rabbit[7] == true){
        judgmentRabbit_Move3(2,6,10);
    }
    if(rabbit[8] == true){
        judgmentRabbit_Move4(3,4,5,9);
    }
    if(rabbit[9] == true){
        judgmentRabbit_Move3(8,5,10);
    }
    if(rabbit[10] == true){
        judgmentRabbit_Move4(9,5,6,7);
    }

}

function judgmentHounds(x){
    //猟犬のターンの時
        //猟犬より後ろに兎が存在する場合
        if(rabbit[x-1] == true){
            alert("兎の勝ち");
        }
}
//移動先が3つ
function judgmentRabbit_Move3(a,b,c){
    //移動先引数場所に猟犬がいるかどうか
    if( hounds_1[a] == ture || hounds_2[a] == true || hounds_3[a] == true &&
        hounds_1[b] == ture || hounds_2[b] == true || hounds_3[b] == true &&
        hounds_1[c] == ture || hounds_2[c] == true || hounds_3[c] == true ){
            alert("猟犬の勝ち");
        }
}
//移動先が4つ
function judgmentRabbit_Move4(a,b,c,d){
    //移動先引数場所に猟犬がいるかどうか
    if( hounds_1[a] == ture || hounds_2[a] == true || hounds_3[a] == true &&
        hounds_1[b] == ture || hounds_2[b] == true || hounds_3[b] == true &&
        hounds_1[c] == ture || hounds_2[c] == true || hounds_3[c] == true &&
        hounds_1[d] == ture || hounds_2[d] == true || hounds_3[d] == true ){
            alert("猟犬の勝ち");
        }
}
//Area 5の場合
function judgmentRabbit_Move8(a,b,c,d,e,f,g,h){
    //移動先引数場所に猟犬がいるかどうか
    if( hounds_1[a] == ture || hounds_2[a] == true || hounds_3[a] == true &&
        hounds_1[b] == ture || hounds_2[b] == true || hounds_3[b] == true &&
        hounds_1[c] == ture || hounds_2[c] == true || hounds_3[c] == true &&
        hounds_1[d] == ture || hounds_2[d] == true || hounds_3[d] == true &&
        hounds_1[e] == ture || hounds_2[e] == true || hounds_3[e] == true &&
        hounds_1[f] == ture || hounds_2[f] == true || hounds_3[f] == true &&
        hounds_1[g] == ture || hounds_2[g] == true || hounds_3[g] == true &&
        hounds_1[h] == ture || hounds_2[h] == true || hounds_3[h] == true  ){
            alert("猟犬の勝ち");
        }
}

function judgment(){
        if(hounds_1[0] == true||hounds_2[0] == true||hounds_3[0] == true){
            judgmentHounds(0);
        }
        if(hounds_1[1] == true||hounds_2[1] == true||hounds_3[1] == true){
            judgmentHounds(1);
        }
        if(hounds_1[2] == true||hounds_2[2] == true||hounds_3[2] == true){
            judgmentHounds(2);
        }
        if(hounds_1[3] == true||hounds_2[3] == true||hounds_3[3] == true){
            judgmentHounds(3);
        }
        if(hounds_1[4] == true||hounds_2[4] == true||hounds_3[4] == true){
            judgmentHounds(4);
        }
        if(hounds_1[5] == true||hounds_2[5] == true||hounds_3[5] == true){
            judgmentHounds(5);
        }
        if(hounds_1[6] == true||hounds_2[6] == true||hounds_3[6] == true){
            judgmentHounds(6);
        }
        if(hounds_1[7] == true||hounds_2[7] == true||hounds_3[7] == true){
            judgmentHounds(7);
        }
        if(hounds_1[8] == true||hounds_2[8] == true||hounds_3[8] == true){
            judgmentHounds(8);
        }
        if(hounds_1[9] == true||hounds_2[9] == true||hounds_3[9] == true){
            judgmentHounds(9);
        }
        if(hounds_1[10] == true||hounds_2[10] == true||hounds_3[10] == true){
            judgmentHounds(10);
    }

        if(rabbit[0] == true){
            judgmentRabbit_Move4(1,5,4,3);
        }
        if(rabbit[1] == true){
            judgmentRabbit_Move3(0,5,2);
        }
        if(rabbit[2] == true){
            judgmentRabbit_Move4(1,5,8,7);
        }
        if(rabbit[3] == true){
            judgmentRabbit_Move3(0,4,8);
        }
        if(rabbit[4] == true){
            judgmentRabbit_Move4(0,3,8,5);
        }
        if(rabbit[5] == ture){
            judgmentRabbit_Move8(0,1,2,4,6,8,9,10);
        }
        if(rabbit[6] == true){
            judgmentRabbit_Move4(2,5,10,7);
        }
        if(rabbit[7] == true){
            judgmentRabbit_Move3(2,6,10);
        }
        if(rabbit[8] == true){
            judgmentRabbit_Move4(8,5,4,7);
        }
        if(rabbit[9] == true){
            judgmentRabbit_Move3(8,5,10);
        }
        if(rabbit[10] == true){
            judgmentRabbit_Move4(7,8,5,9);

    }
}