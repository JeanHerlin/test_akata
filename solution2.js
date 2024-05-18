
function mostExperiencedDev(tab_exp_dev,isMostExperienced){
    
    let exp1=tab_exp_dev[0],exp1_i = 0;
    let exp2=tab_exp_dev[2],exp2_i=1;

    // for most experienced and less
    for(let i=0; i<tab_exp_dev.length; i++){

        //verification for mostExperienced
        if(isMostExperienced){
            exp1 = max_number(tab_exp_dev)
            if(tab_exp_dev[i]===exp1){
                exp1_i=i
            }
        }else{
            exp1 = min_number(tab_exp_dev)
            if(tab_exp_dev[i]===exp1){
                exp1_i=i
            }
        }
    }

        // for most experienced and less
        for(let i=0; i<tab_exp_dev.length; i++){

            //verification for mostExperienced
            if(isMostExperienced){
                if((tab_exp_dev[i] <= exp1 && tab_exp_dev[i] > exp2) && i!=exp1_i){
                    exp2 = tab_exp_dev[i];
                    exp2_i = i
                }
            }else{
                if((tab_exp_dev[i] >= exp1 && tab_exp_dev[i] < exp2) && i!=exp1_i){
                    exp2 = tab_exp_dev[i];
                    exp2_i = i
                }
            }
        }

    return [exp2_i,exp1_i]
}

const max_number = (tab_number)=>{
    let max= tab_number[0]
    for(let i=0;i<tab_number.length;i++){
        if(max<tab_number[i]) max =tab_number[i]
    }

    return max
}

const min_number = (tab_number)=>{
    let max= tab_number[0]
    for(let i=0;i<tab_number.length;i++){
        if(max>tab_number[i]) max =tab_number[i]
    }

    return max
}

const test = mostExperiencedDev([0,3,1,6,8,3],false)
console.log(test)