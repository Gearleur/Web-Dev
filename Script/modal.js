const openBtn = document.getElementById('open-modal')

/*openBtn.addEventListener('click', function click(ev){
    //on créée la div modal
    const modal = document.createElement('div')
    const header = document.createElement('div')
    const close = document.createElement('button')
    const content = document.createElement('div')
    const footer = document.createElement('div')
    const cancel = document.createElement('button')
    const confirm = document.createElement('button')


    modal.appendChild(header)
    modal.appendChild(content)
    modal.appendChild(footer)
    header.appendChild(close)
    footer.appendChild(cancel)
    footer.appendChild(confirm)

    //on modifie en memoire
    modal.classList.add('modal')//on ajoute ou supprime
    header.className = "modal-header"//on ecrase
    close.setAttribute("type", "button")
    close.innerHTML = "&times;"
    content.className = "modal-content"
    content.innerHTML = "Contenu"
    footer.className = "modal-footer"
    cancel.setAttribute('type', 'button')
    cancel.innerText = "Annuler"
    confirm.setAttribute('type', 'button')
    confirm.innerText = "Confirmer"

    function closeModal(){
        close.removeEventListener('click', closeModal)
        cancel.removeEventListener('click', closeModal)
        confirm.removeEventListener('click', closeModal)
        modal.remove
    }

    close.addEventListener('click', closeModal)
    cancel.addEventListener('click', closeModal)
    confirm.addEventListener('click', closeModal)

    //on l'ajoute au document
    document.body.appendChild(modal)
})*/

/*const modal = document.getElementById('modal')
openBtn.addEventListener('click', function click(ev){
    modal.style.display = 'block'

    const close = modal.querySelector('.close')
    const cancel = modal.querySelector('.cancel')
    const confirm = modal.querySelector('.confirm')

    function closeModal(){
        close.removeEventListener('click', closeModal)
        cancel.removeEventListener('click', closeModal)
        confirm.removeEventListener('click', closeModal)
        modal.style.display = 'none'
    }

    close.addEventListener('click', closeModal)
    cancel.addEventListener('click', closeModal)
    confirm.addEventListener('click', closeModal)
})*/

const template = document.getElementById('modal-template')
openBtn.addEventListener('click', function click(ev){
    const clone = template.content.cloneNode(true)
    const modal = clone.querySelector('.modal')


    const close = modal.querySelector('.close')
    const cancel = modal.querySelector('.cancel')
    const confirm = modal.querySelector('.confirm')

    function closeModal(){
        close.removeEventListener('click', closeModal)
        cancel.removeEventListener('click', closeModal)
        confirm.removeEventListener('click', closeModal)
        modal.style.display = 'none'
    }

    close.addEventListener('click', closeModal)
    cancel.addEventListener('click', closeModal)
    confirm.addEventListener('click', closeModal)
})