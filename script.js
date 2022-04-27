const solution = document.querySelector('#solution')
const result = document.querySelector('#result')
const btnNum = document.querySelectorAll('button')
const btnOp = document.querySelectorAll('.number-operators .right button')
const clear = document.querySelector('#clear')
const btnEquals = document.querySelector('#equals')

let screenNumber = ''
let number1 = 0
let number2 = 0
let number3 = 0
let op = ''

function populateScreen() {
    btnNum.forEach((number) => {
        if (number.id >= 0) {
            number.addEventListener('click', () => {

                screenNumber += `${number.id}`

                result.textContent = `${screenNumber}`
            })
        }
    })
}

function saveNumbers() {
    btnOp.forEach((operator) => {
        operator.addEventListener('click', () => {

            switch (operator.id) {
                case '+':
                    number1 = +screenNumber
                    op = operator.id
                    console.log(number1)
                    solution.textContent = `${number1} ${operator.id}`
                    result.textContent = number2
                    screenNumber = ''
            }
        })
    })
}
saveNumbers()

function equals() {
    btnEquals.addEventListener('click', () => {
        number2 = +screenNumber
        number3 = operate(op, number1, number2)
        solution.textContent = `${number1} ${op} ${number2}`
        result.textContent = `${number3}`
    })
}
equals()

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}

populateScreen()
// console.log(operate('-', 10, 10))
