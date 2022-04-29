const topScreen = document.querySelector('[data-top-screen]')
const botScreen = document.querySelector('[data-bottom-screen]')

const btnNumbers = document.querySelectorAll('[data-number]')
const btnOperators = document.querySelectorAll('[data-operator]')

const btnClear = document.querySelector('[data-clear]')
const btnEquals = document.querySelector('[data-equals]')

let tempResult = ''
let previousNum = ''
let currentNum = ''
let op = ''

btnNumbers.forEach(number => {
    number.addEventListener('click', e => {
        botScreen.textContent += e.target.textContent
        //continuously save the number on screen to currentNum
        currentNum = +botScreen.textContent
    })
})

btnOperators.forEach(operator => {
    operator.addEventListener('click', e => {

        if (op !== '') {
            tempResult = operate(previousNum, currentNum, op)
            currentNum = tempResult
            previousNum = ''
            console.log(`prev num: ${previousNum}`)
            console.log(`operator: ${op}`)
            console.log(`current num: ${currentNum}`)
        }


        //saves the clicked operator string
        op = e.target.textContent

        //display to screen
        topScreen.textContent = `${currentNum} ${op}`
        botScreen.textContent = ''

        //since currentNum is always overwritten when a number is inputted,
        //save its value to another variable when an operator is clicked
        previousNum = currentNum


        //to solve... during here, the values for prevNum and currentNum is always the same


    })
})

btnEquals.addEventListener('click', e => {

    tempResult = operate(previousNum, currentNum, op)
    topScreen.textContent = `${previousNum} ${op} ${currentNum}`
    botScreen.textContent = tempResult
    currentNum = tempResult

    console.log(`prev num: ${previousNum}`)
    console.log(`operator: ${op}`)
    console.log(`current num: ${currentNum}`)
    console.log(tempResult)

})

//
function add(number1, number2) {
    return number1 + number2
}
function subtract(number1, number2) {
    return number1 - number2
}
function multiply(number1, number2) {
    return number1 * number2
}
function divide(number1, number2) {
    return number1 / number2
}
function modulo(number1, number2) {
    return number1 % number2
}

//
function operate(number1, number2, operator) {
    switch (operator) {
        case '+':
            return add(number1, number2)
        case '-':
            return subtract(number1, number2)
        case 'x':
            return multiply(number1, number2)
        case '÷':
            return divide(number1, number2)
        case '%':
            return modulo(number1, number2)
    }
}

