
//declared variables of selected elements from HTML document to create interactive buttons
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
const operatorButton = document.getElementsByClassName('operatorButton')
const button = document.getElementsByClassName('button')
const intButton = document.getElementById('int')


//set defaults
display.innerText = ''
let operatorClicked = false
let equation = ''


//added event listener for clear button associated functions
clearButton.addEventListener('click',(e)=>{
equation = ''
display.innerText = equation
operatorClicked = false
})

//added spaces before and after operators in event listener to split on spaces, keeping in tact numbers with more than one digit
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
    }
})


//add event listeners for number buttons
zeroButton.addEventListener('click',(e)=>{
    equation += zeroButton.value
    display.innerText += zeroButton.value
    operatorClicked = false
})
oneButton.addEventListener('click',(e)=>{
    equation += oneButton.value
    display.innerText += oneButton.value
    operatorClicked = false
})
twoButton.addEventListener('click',(e)=>{
    equation += twoButton.value
    display.innerText += twoButton.value
    operatorClicked = false
})
threeButton.addEventListener('click',(e)=>{
    equation += threeButton.value
    display.innerText += threeButton.value
    operatorClicked = false
})
fourButton.addEventListener('click',(e)=>{
    equation += fourButton.value
    display.innerText += fourButton.value
    operatorClicked = false
})
fiveButton.addEventListener('click',(e)=>{
    equation += fiveButton.value
    display.innerText += fiveButton.value
    operatorClicked = false
})
sixButton.addEventListener('click',(e)=>{
    equation += sixButton.value
    display.innerText += sixButton.value
    operatorClicked = false
})
sevenButton.addEventListener('click',(e)=>{
    equation += sevenButton.value
    display.innerText += sevenButton.value
    operatorClicked = false
})
eightButton.addEventListener('click',(e)=>{
    equation += eightButton.value
    display.innerText += eightButton.value
    operatorClicked = false
})
nineButton.addEventListener('click',(e)=>{
    equation += nineButton.value
    display.innerText += nineButton.value
    operatorClicked = false
})

//event listeners for other features
decimalButton.addEventListener('click',(e)=>{
    equation += decimalButton.value
    display.innerText += decimalButton.value
    operatorClicked = false
})
percentButton.addEventListener('click',(e)=>{
    equation += ` ${percentButton.value} `
    display.innerText += percentButton.value
    operatorClicked = false
})
sqrtButton.addEventListener('click',(e)=>{
    equation += ` ${sqrtButton.value} `
    display.innerText += sqrtButton.value
    operatorClicked = false
})
expButton.addEventListener('click',(e)=>{
    equation += ` ${expButton.value} `
    display.innerText += expButton.value
    operatorClicked = false
})
subZeroButton.addEventListener('click',(e)=>{
     operatorClicked = false
     equation += subZeroButton.value
     display.innerText += subZeroButton.value
})
intButton.addEventListener('click',(e)=>{
    operatorClicked = false
    Math.round(equation)
    display.innerText = Math.round(equation)
})

//logic for equation, comprised of a function with three separate loops in order to detect order of operations 
const currentEq = (str)=>{
    let eqArr = str.split(' ')
    eqArr.reverse()
    for(let i = eqArr.length; i >= 0; i--){
        if(eqArr[i]==='^'){
            let solved = eqArr[i+1]**+eqArr[i-1]
            eqArr.splice(i-1,3,solved.toString())
            display.innerText = solved
        } else if(eqArr[i]==='√'){
            let solved = Math.sqrt(eqArr[i-1])
            eqArr.splice(i-1,3,solved)
            display.innerText = solved
        }
    }
    for(let i = eqArr.length; i >= 0; i--){
        if(eqArr[i]==='*'){
            let solved = +eqArr[i+1]*+eqArr[i-1]
            eqArr.splice(i-1,3,solved.toString())
            display.innerText = solved
        } else if(eqArr[i]==='/'){
            let solved = +eqArr[i+1]/eqArr[i-1]
            eqArr.splice(i-1,3,solved.toString())
            display.innerText = solved
        } else if(eqArr[i]==='%'){
            let solved = +eqArr[i+1]/100
            eqArr.splice(i,2,solved)
            display.innerText = solved
        }
    }
    for(let i = eqArr.length; i >= 0; i--){
        if(eqArr[i]==='+'){
            let solved = +eqArr[i+1]+(+eqArr[i-1])
            eqArr.splice(i-1,3,solved)
            display.innerText = solved
        } else if(eqArr[i]==='-'){
            let solved = +eqArr[i+1]-(+eqArr[i-1])
            eqArr.splice(i-1,3,solved)
            display.innerText = solved
        }
    }
    equation = eqArr.join('')
    return equation
}


//equal button event listener invokes the solve logic and returns the equation so it can be used for more than one operation
equalButton.addEventListener('click',(e)=>{
    currentEq(equation)
    display.innerText = equation
    operatorClicked = false
})

