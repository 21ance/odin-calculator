const solution = document.querySelector('#solution')
const result = document.querySelector('#result')
const numbers = document.querySelectorAll('.left .rows button')
const clear = document.querySelector('#clear')

let number1 = ''
let number2 = ''
let number3 = ''


function populateScreen(){
    numbers.forEach((number)=>{
        if(number.id >= 0){
            number.addEventListener('click', () =>{
                number1 += `${number.id}`
                
                result.textContent = `${number1}`
                solution.textContent = `${number1}`
            })  
        }
    })
}


let test = 0

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

function operate() {

}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            test = add(num1, num2)
            break
        case '-':
            test = subtract(num1, num2)
            break
        case '*':
            test = multiply(num1, num2)
            break
        case '/':
            test = divide(num1, num2)
            break
    }
}

operate('/', 10, 10)
populateScreen()
console.log(test)
// console.log(operate('-', 10, 10))
