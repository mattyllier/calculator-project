'1'*0==0 ? console.log(true) : console.log(false)
'+'*0==0 ? console.log(true) : console.log(false)

// const solveEq = (str) => {
//     let arr = str.split('')
//     const operators = ['+','-','*','/']
//     for(let i = 0; i < arr.length; i++){
//         if(operators.includes(arr[i])){
//             continue
//         } else {
//             parseInt(arr[i])
//         }
//     }
//     let value = arr.toString()
//     return value
// }


    // let value = arr.toString()
    // return value

// const myStr = '5+5'
// console.log(solveEq(myStr))

// const solveEq = (str) => {
//     let arr = str.split('')
//     arr.reduce((a,b)=>{
//         switch(true){
//             case a*0==0 && b*0==0:
//                 parseInt(`${a}${b}`)
//             case a*0==0 && b*0!=0:
//                 parseInt(a)
//             case a*0!=0 && b*0==0:
//                 parseInt(b)
//         }
//     })
//     let value = arr.toString()
//     return value
// }
// const myStr = '5+5'
// console.log(solveEq(myStr))

// const solveEq = (str) => {
//     const arr = str.split
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i]==='number'){
//             parseInt(arr[i])
//         }
//     }
//     console.log(arr)
    // arr.reduce((a,b,c)=> {
    //     switch(true){
    //         case b==='+':
    //             arr.splice([a],3,(a+c))
    //         case b==='-':
    //             arr.splice([a],3,(a-c))
    //         case b==='*':
    //             arr.splice([a],3,(a*c))
    //         case b==='/':
    //             arr.splice([a],3,(a/c))
    //     }
    // })
// }
// const myStr = '5+5*3/2'
// console.log(solveEq(myStr))

// let valA = 5
// let currentOperator = '/'
// let valB = 2
// let operatorClicked = false
// let equation = `${valA}${currentOperator}${valB}`

// oneButton.addEventListener('click',(e)=>{
//     operatorClicked === false ? valA += oneButton.value : valB += oneButton.value
// })

// addButton.addEventListener('click',(e)=>{
//     currentOperator = addButton.value
//     operatorClicked = true
// })


// const currentEq = ()=>{
//     switch(true){
//         case currentOperator==='+':
//             valA += valB
//             return valA
//         case currentOperator==='-':
//             valA -= valB
//             return valA
//         case currentOperator==='*':
//             valA *= valB
//             return valA
//         case currentOperator==='/':
//             valA /= valB
//             return valA
//         default:
//             return valA
// }
// }
// console.log(currentEq())


// const currentEq = (str)=>{
//     const eqArr = str.split(' ')
//     console.log(eqArr)
//     eqArr.reduce((a,b,c)=>{
//         let solved = ''
//         console.log(eqArr.length)
//         switch(true){
//             case b==='+':
//                 solved = parseInt(a)+parseInt(c)
//                 display.innerText = solved
//                 eqArr.splice([b],3,solved)
//                 console.log(eqArr)
//             //    continue;
//                 case b==='-':
//                     solved = a-c
//                     display.innerText = solved
//                     eqArr.splice([b],3,solved)
//                     console.log(eqArr)
//                 //    continue;
//                     case b==='*':
//                         solved = a*c
//                         display.innerText = solved
//                 eqArr.splice([b],3,solved)
//             //    continue;
//                 case b==='/':
//                     solved = a/c
//                     display.innerText = solved
//                     eqArr.splice([b],3,solved)
//                //     continue;
//                     case eqArr[i]==='^':
//                         solved = eqArr[i-1]**eqArr[i+1]
//                         display.innerText = solved
//                         eqArr.splice(eqArr[i],3,solved)
//                   //      continue;
//                         case eqArr[i]==='%':
//                             solved = eqArr[i-1]/100
//                             display.innerText = solved
//                             eqArr.splice(eqArr[i],3,solved)
//                        //     continue;
//                         }
//                     })
    
//     console.log(eqArr)
//     equation = eqArr.join('')
//     return eqArr
// }
// let equation = '4+5/4'
// currentEq(equation)


// let newEquation = '6+6*5'
// const evalu = newEquation.match(/\d+\.\d+|\d+|[^0-9]/g)
// console.log(evalu)
// const solved = ''
// for(let i = 0; i < evalu.length; i++){
//     if(i===0){
//         solved = parseInt(evalu[i])
//     } else {
//         if(!NaN(evalu)){

//         }
//     }
// }
let equation = '5+4*7'
//let solveTemplate = `${int}`
//let int = (/^-?\d*(\.\d+)?$/gm)
//let operator = (/\+\-\*\//)
//const eqArr = equation.split(' ')
//eqArr.reduce((int,operator)=>{})

const currentEq = (equation)=>{
    let add = (/(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/g)
    let sub = (/(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/g)
    let mult = (/(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/g)
    let div = (/(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/g)
    if(isNaN(equation)){
    switch(true){
        case (add.test(equation)):
            return equation.replace(add,(a,b)=>a+b)
        case (sub.test(equation)):
            return equation.replace(sub,(a,b)=>a-b)
        case (mult.test(equation)):
            return equation.replace(mult,(a,b)=>a*b)
        case (mult.test(equation)):
            return equation.replace(div,(a,b)=>a/b)
        default:
            return equation
        }
    }
        console.log(equation)
    return equation
}
console.log(currentEq())