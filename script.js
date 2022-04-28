const topScreen = document.querySelector('[data-top-screen]')
const botScreen = document.querySelector('[data-bottom-screen]')

const btnNumbers = document.querySelectorAll('[data-number]')
const btnOperators = document.querySelectorAll('[data-operator]')

const btnClear = document.querySelector('[data-clear]')
const btnEquals = document.querySelector('[data-equals]')

let n1 = ''
let n2 = ''
let op = ''

function populateDisplay() {
    btnNumbers.forEach(number => {
        number.addEventListener('click', (e) => {

            botScreen.textContent += e.target.textContent
        })
    })
}

function callOperator() {
    btnOperators.forEach(operator => {
        operator.addEventListener('click', (e) => {

            n1 = +botScreen.textContent
            op = e.target.textContent


            botScreen.textContent = ''
        })
    })
}

btnEquals.addEventListener('click', e => {

    n2 = +botScreen.textContent

    botScreen.textContent = `${operate(n1, n2, op)}`

    console.log(n1)
    console.log(n2)
    console.log(op)

    
})

function clearAll() {
    btnClear.addEventListener('click', (e) => {
        let n1 = ''
        let n2 = ''
        let op = ''
        botScreen.textContent = ''
        topScreen.textContent = ''
        console.clear()
    })
}



populateDisplay()
callOperator()
clearAll()
//basic math functions
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

//operate function that use above
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