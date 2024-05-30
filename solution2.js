
function mostExperiencedDev(tab_exp_dev,isMostExperienced){
    
    let res 

    if(tab_exp_dev.length===1){
        return [0,0]
    }
     
    if(isMostExperienced){
        // for most experienced dev
        res = mostExperienced(tab_exp_dev)
    }else{
        // for less experienced dev
        res = lessExperienced(tab_exp_dev)
    }

    return res
}

const mostExperienced = (tab_dev)=>{
    let exp1=tab_dev[0], exp1_i=0
    let exp2=tab_dev[1], exp2_i=1
    let L = tab_dev.length

    for(let i=0;i<L;i++){
        if(tab_dev[i]>exp1){
            exp1=tab_dev[i]
            exp1_i=i
        }

        if((tab_dev[L-1-i]>exp2 && exp1>=tab_dev[L-1-i]) && exp1_i!=L-1-i){
            exp2 = tab_dev[L-1-i]
            exp2_i = L-1-i
        }
    }

    return [Math.min(exp1_i,exp2_i),Math.max(exp1_i,exp2_i)]
}


const lessExperienced = (tab_dev)=>{
    let exp1=tab_dev[0], exp1_i=0
    let exp2=tab_dev[1], exp2_i=1
    let L = tab_dev.length

    for(let i=0;i<tab_dev.length;i++){
        if(tab_dev[i]<exp1){
            exp1=tab_dev[i]
            exp1_i=i
        }

        if((tab_dev[L-1-i]<exp2 && exp2>=exp1) && exp1_i!=L-1-i){
            exp2 = tab_dev[L-1-i]
            exp2_i = L-1-i
        }
    }

    return [Math.min(exp1_i,exp2_i),Math.max(exp1_i,exp2_i)]
}


const test = mostExperiencedDev([9,3,6,9,1,3],true)
console.log(test)