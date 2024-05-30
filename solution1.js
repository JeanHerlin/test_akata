
function isValidHtml(html){

    //turn html tag into table
    let v = replaceAll(html,["<"]," ")
    let t = v.split(' ')

    //table of html tag
     t = t.filter((v)=>v!="")

    if(t.length%2===1) return false

    // verifying if valid
    for(let i=0;i<(t.length/2);i++){

        /****
         * openTag === tag>
         * closingTag === tab>
         * t[t.length-1-i] === /tag>
         */
        const openTag = t[i]
        const closingTag = t[t.length-1-i].replace('/',"")
        if(openTag===t[t.length-1-i] || openTag!==closingTag) return false
    }
    return true
}

/***
 * str: string,
 * value: table of character
 * newVal: value to replace the chars in table
 */

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

const res = isValidHtml('<span><p><h1><small></small></h1></p></span>')
console.log(res)
