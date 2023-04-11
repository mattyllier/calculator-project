
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
const sqrtButton = document.getElementById('sqrt')
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
    equation += ` ${percentButton.value} `
    display.innerText += percentButton.value
    operatorClicked = false
    console.log(equation)
})
sqrtButton.addEventListener('click',(e)=>{
    equation += ` ${sqrtButton.value} `
    display.innerText += sqrtButton.value
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


const solveExp = ()=>{
    let eqArr = equation.split(' ')
    eqArr.reverse()
    for(let i = eqArr.length; i > 0; i--){
        if(eqArr[i]==='^'){
            let solved = eqArr[i-1]**eqArr[i+1]
            display.innerText = solved
            eqArr.splice([i-1],3,solved)
            eqArr.reverse()
            console.log(eqArr)
        }
    }
    equation = eqArr.join('')
    return equation
}


const solveMultDiv = ()=>{
    let eqArr = equation.split(' ')
    eqArr.reverse()
    for(let i = eqArr.length-1; i >= 0; i--){
        if(eqArr[i]==='*'){
            let solved = eqArr[i-1]*eqArr[i+1]
            display.innerText = solved
            eqArr.splice([i-1],3,solved)
            console.log(eqArr)
        } else if(eqArr[i]==='/'){
            let solved = eqArr[i-1]/eqArr[i+1]
            display.innerText = solved
            eqArr.splice([i-1],3,solved)
            console.log(eqArr)
        }
    }
    equation = eqArr.join('')
    return equation
}



const solveAddSub = ()=>{
    let eqArr = equation.split(' ')
    eqArr.reverse()
    for(let i = eqArr.length; i > 0; i--){
        if(eqArr[i]==='+'){
            let solved = parseFloat(eqArr[i-1])+parseFloat(eqArr[i+1])
            display.innerText = solved
            eqArr.splice([i-1],3,solved)
            eqArr.reverse()
            console.log(eqArr)
        } else if(eqArr[i]==='-'){
            let solved = eqArr[i-1]-eqArr[i+1]
            display.innerText = solved
            eqArr.splice([i-1],3,solved)
            eqArr.reverse()
            console.log(eqArr)
        } else if(eqArr[i]==='%'){
            let solved = eqArr[i-1]/100
            display.innerText = solved
            eqArr.splice([i-1],3,solved)
            eqArr.reverse()
            console.log(eqArr)
        } else if(eqArr[i]==='√'){
            let solved = Math.sqrt(eqArr[i+1])
            display.innerText = solved
            eqArr.splice([i],2,solved)
            eqArr.reverse()
            console.log(eqArr)
        }
    }
    equation = eqArr.join('')
    return equation
}

const currentEq = ()=>{
    solveExp()
    solveMultDiv()
    solveAddSub()
}

equalButton.addEventListener('click',(e)=>{
    currentEq()
    display.innerText = equation
    operatorClicked = false
})

