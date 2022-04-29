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
        //continuously save the bottom number of screen to currentNum
        currentNum = +botScreen.textContent
    })
})

btnOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        //do nothing if no user input yet
        if (currentNum == '') return
        //12 + 7 - 5 * 3 = should yield 42
        if (previousNum !== '') {
            tempResult = operate(previousNum, currentNum, op)
            currentNum = tempResult
        }
        //saves the clicked operator string
        op = e.target.textContent

        //display to screen
        topScreen.textContent = `${currentNum} ${op}`
        botScreen.textContent = ''

        //since currentNum is always overwritten when a number is inputted,
        //save its value to another variable when an operator is clicked
        previousNum = currentNum
    })
})

btnEquals.addEventListener('click', e => {
    if (previousNum == '') return
    tempResult = operate(previousNum, currentNum, op)
    topScreen.textContent = `${previousNum} ${op} ${currentNum}`
    botScreen.textContent = tempResult
    currentNum = tempResult
    previousNum = ''
})

btnClear.addEventListener('click', e => {
    tempResult = ''
    previousNum = ''
    currentNum = ''
    op = ''
    topScreen.textContent = ''
    botScreen.textContent = ''
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
    if (number2 == 0) {
        botScreen.textContent = 'haha'
        return
    }
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

