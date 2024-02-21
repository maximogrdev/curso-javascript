function atualizar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minut0 = Number(agora.getMinutes())
    var corFundo = document.querySelector('.corfundo') 
    var horario = document.querySelector('.hora')
    var imagem = document.querySelector('.img')


    horario.innerHTML = `Agora são ${hora}:${minut0} !`

    if(hora >= 6 && hora < 12){
        horario.innerHTML += '<br>Bom dia!'
        imagem.src= './img/manha.png'
        document.body.style.background = '#5C56DB'
        corFundo.style.background = '#456BD6'

    } else if(hora >= 12 && hora < 18){
        horario.innerHTML += '<br>Boa tarde!'
        imagem.src= './img/tarde.png'
        corFundo.style.background = '#ffb04b'
        document.body.style.background = '#ff9a19'

    } else if(hora >= 18 && hora < 24){
        horario.innerHTML += '<br>Boa noite!'
        imagem.src= './img/noite.png'
        corFundo.style.background = '#140E1E'
        document.body.style.background = '#0C0014'


    } else if(hora >= 0 && hora < 6){
        horario.innerHTML += '<br>Boa madrugada!'
        imagem.src= './img/madrugada.png'
        corFundo.style.background = '#12536a'
        document.body.style.background = '#0e3441'
    }else{
        horario.innerHTML = 'Nossa sistema está fora do ar!'
    }
}