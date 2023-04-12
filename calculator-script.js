
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


//set defaults, operatorClicked is the logic which doesn't permit an operator button to be clicked more than once in a row
display.innerText = ''
let operatorClicked = false
//the equation variable is the string which clicked buttons' values are added to
//upon clicking '=', the string is input as the parameter in the solve function 'currentEq'
let equation = ''


//added event listener for clear button which resets the equation to default
//the visible text of the display element is consistently updated in sync with the value of the equation
clearButton.addEventListener('click',(e)=>{
equation = ''
display.innerText = equation
operatorClicked = false
})

//added event listeners for buttons, when clicked, the button's value is added to the equation as well as the display
//added spaces before and after operators in event listener to split on spaces, keeping in tact numbers with more than one digit
//for operator buttons, the operatorClicked logic is used to ensure that two operators won't appear next to each other in the equation
addButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${addButton.value} ` 
        display.innerText += addButton.value
        operatorClicked = true
    }
})
subButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${subButton.value} `
        display.innerText += subButton.value
        operatorClicked = true
    }
})
multButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${multButton.value} `
        display.innerText += multButton.value
        operatorClicked = true
    }
})
divButton.addEventListener('click',(e)=>{
    if(operatorClicked === false){
        equation += ` ${divButton.value} `
        display.innerText += divButton.value
        operatorClicked = true
    }
})


//added event listeners for number buttons
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

//these are event listeners for additional features, such as decimal, percent, exponent, square root, and round to int
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
//when the equals button is clicked, the currentEq function is invoked with the equation string as the parameter
//eqArr is the array version of the equation, split on the spaces which were added before and after each operator
//the array is reversed and looped through backwards, this is because the index will be changed as a result of the splice method
//the first loop checks for the exponent and square root operators, using the index before and/or after as their operands
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

    //utilizing order of operations, the second loop in the currentEq function looks for multiplication and division
    //solved is the variable containing the solution of the current matched index and its operands
    //the indexes of the operands (specifically in the case of division and subtraction) appear reversed, as the loop and array are
    //the + in front of the operand indexes is converting them to numbers, and the actual operator is used which is not a data type
    //the solved variable is then spliced back into the array replacing the two or three indexes used
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
    //the third loop checks for addition and subtraction operators
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
    //the eqArr carrying the solution is joined and assigned as the value of the equation, in order that it can be operated on
    equation = eqArr.join('')
    return equation
}


//equal button event listener invokes the solve logic and returns the equation 
equalButton.addEventListener('click',(e)=>{
    currentEq(equation)
    display.innerText = equation
    operatorClicked = false
})