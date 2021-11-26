const cells = document.getElementsByClassName('game-cell') // cells renvoie vers les cellules
                                                           // ref vers tout les éléments de cette classe dans le doc
                                                           //const pour constante , let pour variable pour
                                                           //la var la plus local prime
                                                           //class considere plusieur
                                                           // id un seul

//let player = 1

function initialiserPartie(){
    let tour = 0

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]

        cell.addEventListener('click', function click(ev) {
            ev.target.dataset.player = tour++%2 === 0 ? 1 : 2

        /*
        if (tour % 2 === 0){
            ev.target.palyer = 1
        }
        else{
            ev.target.palyer = 2
        }
        */

        checkPartie()
    },{once: true})
    }
}

function checkPartie(){
    for (let i = 0; i < 3; i++){
        const col = document.querySelectorAll(`.game-cell[data-x=${i}`)
    }
}


/*

 if (player == 1)
  {
      cell.textContent = 'X'
      player = 2
  }
  else{
      cell.textContent = 'O'
   player = 1
 }
 */



