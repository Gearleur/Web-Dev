//window.alert('hello' + nom)

//let nom = prompt("Entrer votre nom")
//alert(`Hello' ${nom}`)

const result = document.getElementById('result')
const nomInp = document.getElementById('nom')
const goBtn = document.getElementById('go')

result.textContent = 'Ceci est un test'

let countClick = 0
goBtn.addEventListener('click', function click(ev) {
    countClick++
    result.textContent = "Clicks : " + countClick
})

