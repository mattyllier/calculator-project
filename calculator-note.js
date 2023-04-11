'1'*0==0 ? console.log(true) : console.log(false)
'+'*0==0 ? console.log(true) : console.log(false)

//original logic section
const currentEq = (str)=>{
    const eqArr  = str.split(' ')
            for(let i = 0; i < eqArr.length; i++){
                let solved = ''
                switch(true){
                    case eqArr[i]==='^':
                        solved = eqArr[i-1]**eqArr[i+1]
                        display.innerText = solved
                        eqArr.splice(eqArr[i],3,solved,'','')
                        console.log(eqArr)
                        continue;
                    case eqArr[i]==='*':
                        solved = eqArr[i-1]*eqArr[i+1]
                        display.innerText = solved
                        eqArr.splice(eqArr[i],3,solved)
                        console.log(eqArr)
                        continue;
                    case eqArr[i]==='/':
                        solved = eqArr[i-1]/eqArr[i+1]
                        display.innerText = solved
                        eqArr.splice(eqArr[i],3,solved)
                        continue;
                    case eqArr[i]==='+':
                        solved = eqArr[i-1]+eqArr[i+1]
                        display.innerText = solved
                        eqArr.splice(eqArr[i],3,solved)
                        continue;
                    case eqArr[i]==='^':
                        solved = eqArr[i-1]**eqArr[i+1]
                        display.innerText = solved
                        eqArr.splice(eqArr[i],3,solved)
                        continue;
                    case eqArr[i]==='%':
                        solved = eqArr[i-1]/100
                        display.innerText = solved
                        eqArr.splice(eqArr[i],3,solved)
                        continue;
                        case eqArr[i]==='√':
                            solved = Math.sqrt(eqArr[i+1])
                            display.innerText = solved
                            eqArr.splice(eqArr[i],3,solved)
                            continue;
                        }
                        
                    }
                    equation = eqArr.join('')
                    return equation
                }
   
                let equation = '5+6^2'
console.log(currentEq(equation))



//Eric solution
const mathString = '4 + 10 / 2 - 10 * 2'
const calculator = (numStr)=> { 
    const numStrArray = numStr.split(' ').reverse() 
    for(let i = numStrArray.length; i >= 0; i--){ 
        let char = numStrArray[i] 
        if(char === '*'){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 * +num2).toString()) 
        } else if((char === '/')){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 / +num2).toString()) 
        } 
    } for(let i = numStrArray.length; i >= 0; i--){ 
        let char = numStrArray[i] 
        if(char === '+'){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 + +num2).toString()) 
        } else if((char === '-')){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 - +num2).toString()) 
        } 
    } console.log(numStrArray[0]) 
    return numStrArray[0] 
} 
    
    calculator(mathString)

    //adding spaces to account for index
    const myStr = '4 + 10 / 2 - 10 * 2'
const calculation = (numStr)=> { 
    const numStrArray = numStr.split(' ')
    for(let i = 0; i < numStrArray.length; i++){ 
        let char = numStrArray[i] 
        if(char === '*'){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 * +num2).toString()+' '+' ') 
        } else if((char === '/')){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 / +num2).toString()+' '+' ') 
        } 
    } for(let i = numStrArray.length; i >= 0; i--){ 
        let char = numStrArray[i] 
        if(char === '+'){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 + +num2).toString()+' ' +' ') 
        } else if((char === '-')){ 
            const num1 = numStrArray[i + 1] 
            const num2 = numStrArray[i - 1] 
            numStrArray.splice(i-1,3,(+num1 - +num2).toString()+' '+' ') 
        } 
    } console.log(numStrArray[0]) 
    return numStrArray[0] 
} 
    
calculation(myStr)