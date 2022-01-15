//mon javascript a été fait dans l'ordre des points de l'exercice mais il faudrait en réalité l'ordonner un peu///



//-----La modale (Section 5)------//
// Modal: on clique sur les boutons suivant la modal et ca fadeout la modal

$('#button_modal > button').on('click', function click(){

    $('#modal').fadeOut(200);
})



//-----Ouvrir/fermer les menus du header au click-----//
// header solutions et more au click fadeout mais avec toogle permet de le faire en une ligne
// si un menu est ouvert l'autre doit etre fermé pour pas superposer les menus.
// de plus display:none de base 

$('#solutions > button').on('click', function toggle(){

    $('#header-menu-solutions').stop(true).fadeToggle()
    $('#header-menu-more').fadeOut(200);
    return false;//stop la propagation
})

$('#more > button').on('click', function toggle(){

    $('#header-menu-more').stop(true).fadeToggle()
    $('#header-menu-solutions').fadeOut(200);
    return false;//stop la propagation
})

// quand on click sur le body fadeout menu

$('body').on('click', function click(){

    $('#header-menu-more').fadeOut(200);
    $('#header-menu-solutions').fadeOut(200);
})



//-----Retirer la banner du DOM quand on clique sur close (Section 2)-----//
// banner qui s'enleve au click
$('#banner-dismiss > button').on('click', function click(){

    $('#banner').fadeOut(200);
})

//-----La vérification du formulaire (champs non vide) (Section 4)-----//
// quand on click sur save verifie si les champs sont correct ou pas
//l'affichage des erreurs n'est pas propre mais fonctionne
$('#form').on('submit', ()=> {

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;//regex trouver semble marcher
    var emailaddressVal = $("#email-address").val();

    // Check si il y a quelque chose pour le prénom
    if ($('#first-name').val()  === '') {
        alert('first-name is empty.');
        return false; //stop propagation
    }

    // Check si il y a quelque chose pour le nom
    if ($('#last-name').val()  === '') {
        alert('last-name is empty.');
        return false; //stop propagation
    }

    //check si l'adresse mail est correct
    if (emailaddressVal === '') {
        alert('email is empty.');
        return false; //stop propagation
    }

    else if(!emailReg.test(emailaddressVal)) {
        alert('Enter a valid email address.');
        return false; //stop propagation
    }

    //on peut ajouter une verification de free email en plus.

    //verification address
    if ($('#street-address').val()  === '') {
        alert('street-address is empty.');
        return false; //stop propagation
    }

    if ($('#city').val()  === '') {
        alert('city is empty.');
        return false; //stop propagation
    }

    if ($('#region').val()  === '') {
        alert('region is empty.');
        return false; //stop propagation
    }

    if ($('#postal-code').val()  === '') {
        alert('postal-code is empty.');
        return false; //stop propagation
    }

    //pour verifier les adresse correctement il faudrait une api des adresses et verifier qu'elle soit dedans.

})