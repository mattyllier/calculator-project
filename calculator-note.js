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

let valA = 5
let currentOperator = '/'
let valB = 2
let operatorClicked = false
let equation = `${valA}${currentOperator}${valB}`

oneButton.addEventListener('click',(e)=>{
    operatorClicked === false ? valA += oneButton.value : valB += oneButton.value
})

addButton.addEventListener('click',(e)=>{
    currentOperator = addButton.value
    operatorClicked = true
})


const currentEq = ()=>{
    switch(true){
        case currentOperator==='+':
            valA += valB
            return valA
        case currentOperator==='-':
            valA -= valB
            return valA
        case currentOperator==='*':
            valA *= valB
            return valA
        case currentOperator==='/':
            valA /= valB
            return valA
        default:
            return valA
}
}
console.log(currentEq())