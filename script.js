const topScreen = document.querySelector('[data-top-screen]')
const botScreen = document.querySelector('[data-bottom-screen]')

const btnNumbers = document.querySelectorAll('[data-number]')
const btnOperators = document.querySelectorAll('[data-operator]')

btnNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        console.log(e.target)
    })
})