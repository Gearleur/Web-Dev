let tour = 0
$('.game-cell').on('click', function click(){
    ev.target.dataset.palyer = tour++ %2 === 0 ? 1 : 2
    checkPartie(tour)
})

function checkPartie(tour){
    //on verifie chauqe ligne chaque colonne
    for (let i = 0; i < 3; i++) {
        getWinner($(`.game-cell[data-x="${i}"]`))
        getWinner($(`.game-cell[data-y="${i}"]`))
    }

    getWinner($(`.game-cell[data-diag1]`))
    getWinner($(`.game-cell[data-diag2]`))

    if( tour === 9) {
        alert(`Egalité`)
        document.location.reload()
    }
}

function getWinner($item) {
    const players = []
    $item.each(function each() {
        //on ajoute le player au tableau
        players.push($(this).data('palyer'))
    })

    if (players.some((p) => p === "none"))
        return
   if (players.every((p) => p === "palyer[0]")){
       alert(`le joueur ${players[0]} a gagné`)
       document.location.reload()
   } 
}