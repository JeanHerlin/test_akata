
function isValidHtml(html){

    //turn html tag into table
    let v = replaceAll(html,[">","<","/"]," ")
    let t = v.split(' ')

    //table of html tag
    let t2 = t.filter((v)=>v!="")
    let isValid

    if(t2.length%2===1) return false

    // verifying if valid
    for(let i=0;i<t2.length;i++){
        
        for(let j=i+1;j<t2.length;j++){
            if(t2[j]===t2[i] && j%2!==i%2) isValid = true
            if(t2[j]===t2[i] && j%2===i%2) return false
        }
        
    }

    return isValid
}


let replaceAll = (str,value,newVal,)=>{
    let newStr = ""
    let add = false
    for(let i=0;i<str.length;i++){
        for(let j=0;j<value.length;j++){
            if(str[i]===value[j]) {
                newStr+=newVal
                add = true
            }
            
        }

        if(!add) newStr+=str[i]
        add = false
    }

    return newStr
}

const res = isValidHtml('<span><p></span>')
console.log(res)
