const topScreen = document.querySelector('[data-top-screen]')
const botScreen = document.querySelector('[data-bottom-screen]')

const btnNumbers = document.querySelectorAll('[data-number]')
const btnOperators = document.querySelectorAll('[data-operator]')

const btnClear = document.querySelector('[data-clear]')
const btnDelete = document.querySelector('[data-delete]')
const btnNegate = document.querySelector('[data-negate]')
const btnEquals = document.querySelector('[data-equals]')

const btnDecimal = document.querySelector('#decimal')

let tempResult = ''
let previousNum = ''
let currentNum = ''
let op = ''

btnNumbers.forEach(number => {
    number.addEventListener('click', e => {
        //tempResult is used on equals eventListier
        //this if statement just prevents concatenating the result
        if (tempResult != '') {
            tempResult = ''
            botScreen.textContent = ''
        }
        //continuously save the bottom number of screen to currentNum
        botScreen.textContent += e.target.textContent
        //disable decimal button if decimal is already clicked
        if (botScreen.textContent.includes('.')) {
            btnDecimal.disabled = true
            if (botScreen.textContent[0] == '.') {
                botScreen.textContent = '0.'
            }
        }
        currentNum = botScreen.textContent
    })
})

btnOperators.forEach(operator => {
    operator.addEventListener('click', e => {
        //do nothing if no user input yet
        //also stop chaining operations when currentNum is empty
        if (currentNum == '') {
            op = e.target.textContent
            topScreen.textContent = `${previousNum} ${op}`
            return
        }
        //12 + 7 - 5 * 3 = should yield 42
        zeroCatcher()
        if (previousNum !== '') {
            currentNum = operate(previousNum, currentNum, op).toFixed(2).replace(/(\.0+|0+)$/, '')
        }
        op = e.target.textContent

        //display to screen
        topScreen.textContent = `${currentNum} ${op}`
        botScreen.textContent = ''

        //transfer the value of currentNum to previousNum then reset it
        previousNum = currentNum
        currentNum = ''
    })
})

btnEquals.addEventListener('click', () => {
    zeroCatcher()
    if (previousNum == '' || currentNum == '') return
    tempResult = operate(previousNum, currentNum, op).toFixed(2).replace(/(\.0+|0+)$/, '')
    topScreen.textContent = `${previousNum} ${op} ${currentNum}`
    botScreen.textContent = tempResult
    currentNum = tempResult
    previousNum = ''
})

btnClear.addEventListener('click', () => clearAll())

btnDelete.addEventListener('click', () => {
    botScreen.textContent = botScreen.textContent.slice(0, -1)
    currentNum = botScreen.textContent
})

btnNegate.addEventListener('click', () => {
    if (currentNum == 0) return
    botScreen.textContent *= -1
    currentNum = botScreen.textContent
})
//display the thing if divided by 0, or modulo by 0, also resets everything
function zeroCatcher() {
    btnDecimal.disabled = false
    if ((op == '%' || op == '÷') && currentNum == 0) {
        clearAll()
        topScreen.textContent = '(╯°□°）╯︵ ┻━┻'
    }
}

function clearAll() {
    tempResult = ''
    previousNum = ''
    currentNum = ''
    op = ''
    topScreen.textContent = ''
    botScreen.textContent = ''
    btnDecimal.disabled = false
}

function add(number1, number2) {
    return +number1 + +number2
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