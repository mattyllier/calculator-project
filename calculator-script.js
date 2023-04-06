
//declared variables of selected elements from HTML document
const calculator = document.getElementById('calculator')
const display = document.getElementById('display')
const addButton = document.getElementById('add')
const subButton = document.getElementById('subtract')
const multButton = document.getElementById('multiply')
const divButton = document.getElementById('divide')

const zeroButton = document.getElementById('0')
const oneButton = document.getElementById('1')
const twoButton = document.getElementById('2')
const threeButton = document.getElementById('3')
const fourButton = document.getElementById('4')
const fiveButton = document.getElementById('5')
const sixButton = document.getElementById('6')
const sevenButton = document.getElementById('7')
const eightButton = document.getElementById('8')
const nineButton = document.getElementById('9')
const decimalButton = document.getElementById('dec')
const percentButton = document.getElementById('%')
const expButton = document.getElementById('^')
const subZeroButton = document.getElementById('subZero')

const equalButton = document.getElementById('=')
const clearButton = document.getElementById('clear')

//set value attributes to each variable
// addButton.value = '+'
// subButton.value = '-'
// multButton.value = '*'
// divButton.value = '/'
    
// zeroButton.value = '0'
// oneButton.value = 1
// twoButton.value = 2
// threeButton.value = '3'
// fourButton.value = '4'
// fiveButton.value = '5'
// sixButton.value = '6'
// sevenButton.value = '7'
// eightButton.value = '8'
// nineButton.value = '9'
    
// equalButton.value = '='
// clearButton.value = ''

//set equation to an empty string at default
// let equation = ''
// display.innerText = equation


//added event listeners for number buttons, to add their values when clicked to the equation and display
// const button = getElementByClass('button')
// button.addEventListener('click',(e)=>{
    //     display.innerText = e.target.value
    // })
    
    
//set default variables
       //let currentVal = '0'
// let valA = 0
// let currentOperator = ''
// let valB = 0
       //let currentEquation = [valA,currentOperator,valB]
display.innerText = ''
let operatorClicked = false
let equation = ''
const operatorButton = document.getElementsByClassName('operatorButton')
const button = document.getElementsByClassName('button')


//added event listener for clear button associated functions
clearButton.addEventListener('click',(e)=>{
equation = ''
display.innerText = equation
operatorClicked = false
})

// button.addEventListener('click',(e)=>{
//     equation += e.target.value
//     display.innerText = e.target.value
// })
// operator.addEventListener('click',(e)=>{
//     equation += e.target.value
//     display.innerText = e.target.value
// })

addButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${addButton.value} `
        display.innerText += addButton.value
        operatorClicked = true
        console.log(equation)
    }
})
subButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${subButton.value} `
        display.innerText += subButton.value
    operatorClicked = true
    console.log(equation)
}
})
multButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${multButton.value} `
        display.innerText += multButton.value
        operatorClicked = true
        console.log(equation)
    }
})
divButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${divButton.value} `
        display.innerText += divButton.value
        operatorClicked = true
        console.log(equation)
    }
})

//add event listeners for number buttons
zeroButton.addEventListener('click',(e)=>{
    equation += zeroButton.value
    display.innerText += zeroButton.value
    operatorClicked = false
    console.log(equation)
})
oneButton.addEventListener('click',(e)=>{
    // operatorClicked === false ? valA += oneButton.value : valB += oneButton.value
    equation += oneButton.value
    display.innerText += oneButton.value
    operatorClicked = false
    console.log(equation)
})
twoButton.addEventListener('click',(e)=>{
    equation += twoButton.value
    display.innerText += twoButton.value
    operatorClicked = false
    console.log(equation)
})
threeButton.addEventListener('click',(e)=>{
    equation += threeButton.value
    display.innerText += threeButton.value
    operatorClicked = false
    console.log(equation)
})
fourButton.addEventListener('click',(e)=>{
    equation += fourButton.value
    display.innerText += fourButton.value
    operatorClicked = false
    console.log(equation)
})
fiveButton.addEventListener('click',(e)=>{
    equation += fiveButton.value
    display.innerText += fiveButton.value
    operatorClicked = false
    console.log(equation)
})
sixButton.addEventListener('click',(e)=>{
    equation += sixButton.value
    display.innerText += sixButton.value
    operatorClicked = false
    console.log(equation)
})
sevenButton.addEventListener('click',(e)=>{
    equation += sevenButton.value
    display.innerText += sevenButton.value
    operatorClicked = false
    console.log(equation)
})
eightButton.addEventListener('click',(e)=>{
    equation += eightButton.value
    display.innerText += eightButton.value
    operatorClicked = false
    console.log(equation)
})
nineButton.addEventListener('click',(e)=>{
    equation += nineButton.value
    display.innerText += nineButton.value
    operatorClicked = false
    console.log(equation)
})
decimalButton.addEventListener('click',(e)=>{
    equation += decimalButton.value
    display.innerText += decimalButton.value
    operatorClicked = false
    console.log(equation)
})
percentButton.addEventListener('click',(e)=>{
    //to decimal function
    equation += percentButton.value
    display.innerText += percentButton.value
    operatorClicked = false
    console.log(equation)
})
expButton.addEventListener('click',(e)=>{
    //to exp function
    equation += ` ${expButton.value} `
    display.innerText += expButton.value
    operatorClicked = false
    console.log(equation)
})
subZeroButton.addEventListener('click',(e)=>{
     operatorClicked = false
     equation += subZeroButton.value
     display.innerText += subZeroButton.value
     console.log(equation)
})

    //currentEquation 
    const currentEq = (str)=>{
        const eqArr = str.split(' ')
        console.log(eqArr)
        for(let i = 0; i < str.length; i++){
            // if(eqArr[i]!=='+'||eqArr[i]!=='-'||eqArr[i]!=='*'||eqArr[i]!=='/'){
            //     parseInt(eqArr[i])
            // }
            switch(true){
                case eqArr[i]==='+':
                    display.innerText = parseInt(eqArr[i-1])+parseInt(eqArr[i+1])
                    eqArr.splice(eqArr[i],3,parseInt(eqArr[i-1])+parseInt(eqArr[i+1]))
                    console.log(eqArr)
                    continue;
                case eqArr[i]==='-':
                    display.innerText = eqArr[i-1]-eqArr[i+1]
                    eqArr.splice(eqArr[i],3,eqArr[i-1]-eqArr[i+1])
                    console.log(eqArr)
                    continue;
                case eqArr[i]==='*':
                    display.innerText = eqArr[i-1]*eqArr[i+1]
                    eqArr.splice(eqArr[i],3,eqArr[i-1]*eqArr[i+1])
                    continue;
                case eqArr[i]==='/':
                    display.innerText = eqArr[i-1]/eqArr[i+1]
                    eqArr.splice(eqArr[i],3,eqArr[i-1]/eqArr[i+1])
                    continue;
                case eqArr[i]==='^':
                    display.innerText = eqArr[i-1]**eqArr[i+1]
                    eqArr.splice(eqArr[i],3,eqArr[i-1]**eqArr[i+1])
                    continue;
            }
        
            // if(typeof parseInt(str[i])==='number' && parseInt(str[i+1]==='number')){
                //     str[i].concat
                //     eqArr.push(str[i])
                //     eqArr.reduce((a,b)=>{
                    //         typeof a==='number'&& typeof b==='number' ? parseInt(a.concat(b)) : parseInt(a)
            //     })
            // }
            // console.log(eqArr)
            //     switch(true){
                //        case str[i]==='+':
                //            str[i-1]+str[i+1]
                //        case str[i]==='-':
                //            str
                // case currentOperator==='*':
                //     valA *= valB
                //     return valA
                // case currentOperator==='/':
                //     valA /= valB
                //     return valA
                // default:
                //     return valA
                // }
                // }
            }
            console.log(eqArr)
            equation = eqArr
            return equation
        }

equalButton.addEventListener('click',(e)=>{
    currentEq(equation)
    display.innerText = equation
    operatorClicked = false
})


//equals button outputs the value of the equation
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

    //set return value and display to screen


    // const addition = (num1,num2)=>{
        //     return num1+num2
        // }
    // oneButton.addEventListener('click',(e)=>{
        //     addButton.addEventListener('click',(e)=>{
            //         equation += 1
            //         display.innerText = equation
            //     })
        //     button.addEventListener('click',(e)=>{
            //         let currentNumber = 1
            //         currentNumber.toString().concat(button.value)
//         display.innerText = equation +=currentNumber
//     })
// })
// twoButton.addEventListener('click',(e)=>{
//     equation += 2
//     display.innerText = equation
// })

// addButton.addEventListener('click',addition)
//     oneButton.addEventListener('click',(e)=>{
//         display.innerText = 1
//         equation += 1
//     twoButton.addEventListener('click',(e)=>{
//         display.innerText = 2
//         equation +=2
//     })
// })