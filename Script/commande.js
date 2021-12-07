const form = document.getElementById('form')
const subject = document.getElementById('subject')
const copie = document.getElementById('copie')
const bpody = document.getElementById('body')

form.addEventListener('submit', function submit(ev) {
    if (subject.value.length < 3) {
        ev.preventDefault();
        alert ('Le sujet doit contenir trois caractère')
    }

    if (body.value.length < 20) {
        ev.preventDefault()
        alert ('Le corps du mail doit contenir vinght caractère minimum')
    }
})