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
        currentNum = +botScreen.textContent



    })
})

btnOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        op = e.target.textContent


        previousNum = currentNum

        topScreen.textContent = `${previousNum} ${op}`
        botScreen.textContent = ''



    })
})

btnEquals.addEventListener('click', e => {

    // previousNum = currentNum

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