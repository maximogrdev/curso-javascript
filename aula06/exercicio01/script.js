function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minut = Number(data.getMinutes())
    
    
    
    msg.innerHTML = `<strong>Agora são ${hora}:${minut}</strong>.`

    if(hora >= 6 && hora < 12){
        msg.innerHTML += '<p><strong>Bom dia!</strong></p>'
        img.src = './img/manha.png'
        document.body.style.background = '#f6e0c9'


    }else if(hora >= 12 && hora <= 18){
        msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
        img.src = './img/tarde.png'
        document.body.style.background = '#d0691a'


    }else if(hora > 18 && hora <= 24){
        msg.innerHTML += '<p><strong>Boa noite!</p>'
        img.src = './img/noite.png'
        document.body.style.background = '#0f4083'


    }else if(hora >= 0 && hora < 6){
        msg.innerHTML += '<p><strong>Boa madrugada!</strong></p>'
        img.src = './img/madrugada.png'
        document.body.style.background = '#8f6c51'

    }
    
}