// variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// eventos
btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)


// callback
function handleTryClick(event) {

    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        document.querySelector('#attempts').innerText = `Acertou em ${xAttempts} vezes`
        screen2.classList.remove("hide")
    }
    
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    window.location.reload()
}


