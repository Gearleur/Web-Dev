//window.alert('hello' + nom)

//let nom = prompt("Entrer votre nom")
//alert(`Hello' ${nom}`)

const result = document.getElementById('result')
const nomInp = document.getElementById('nom')
const goBtn = document.getElementById('go')
const hello = document.getElementById('hello')

result.textContent = 'Ceci est un test'

let countClick = 0
goBtn.addEventListener('click', function click(ev) {
    countClick++
    result.textContent = "Clicks : " + countClick
})

/*Au click sur 'GO', si on a une valeur, la mettre
dans la div d'id hello
sinon, afficher une erreur dans la div d'id' hello */
goBtn.addEventListener('click', function click(ev) {
    const valeur = nomInp.value

    if (!valeur || valeur.trim() === '') {
        hello.textContent = "Saisissez une valeur"
        return
    }
    hello.innerHTML = 'Hello <b>' + valeur.trim() + '</b>'


    
})

