let count = 0
$('div').on('click', function click(){
    if(count %2 === 0)
    {
        $(this).css({
        width: '200px',
        height: '200px',
        background: 'blue',
        })
    }
    else{
        $(this).css({
            width: '100px',
            height: '100px',
            background: 'red',
        })
    }
    count++;
})

//let show = true
$('.toggleText').on('click', function click(){
    /*if(show){
        $('.text').hide()
    }
    else{
        $('.text').show()
    }
    show = !show*/
    $('.text').toggle()
    
})


/*$('secteur') --> selection elements
addClass() --> ajout de class
.append/.appendTo --> ajout au HTML
.attr --> manipuler les attributes
.data --> manipuler datasets
.css / .one / .off --> events
.children --> noeuds HTML enfant
.find --> recherche de noeuds HTML
.hide / .show */