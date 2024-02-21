function enviar(){
    var select = document.getElementById('selec');
    var time = select.value;
    var escudo = document.getElementById('escudo');
    var elenco = document.getElementById('elenco');
    
    if(time === 'atlgo'){
        
        elenco.innerHTML = '<br><strong>Atlético Clube Goianiense</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong> Goiânia – Goiás </p> <strong>Estádio:<br> </strong>Estádio Antonio Accioly – Atlético Clube Goianiense<p> <strong>Torcedores:</strong> 182 mil</p>'
        elenco.style.background = '#dc1212'
        escudo.src= './assets/img/atletico-go.png'
        
        

    }else if(time === 'atlmg'){
        elenco.innerHTML = '<br><strong>Clube Atlético Mineiro</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong>  Belo Horizonte – Minas Gerais </p> <strong>Estádio:<br> </strong>Arena MRV<p> <strong>Torcedores:</strong> 9.219.199 milhões</p>'
        elenco.style.background = '#231f20'
        escudo.src= './assets/img/atletico-mg.png'

    }else if(time === 'atlpr'){
        elenco.innerHTML = '<br><strong>Club Athletico Paranaense</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong>  Curitiba – PR </p> <strong>Estádio:<br> </strong> Estádio Joaquim Américo Guimarães ( Ligga Arena )<p> <strong>Torcedores:</strong> 1,3 milhão</p>'
        elenco.style.background = '#f30002'
        escudo.src= './assets/img/atletico-pr.png'

    }else if(time === 'bah'){
        elenco.innerHTML = '<br><strong>Esporte Clube Bahia</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong> Salvador – Bahia </p> <strong>Estádio:<br> </strong>Itaipava Arena Fonte Nova<p> <strong>Torcedores:</strong>  7.718.400 milhões</p>'
        elenco.style.background = '#0663aa'
        escudo.src= './assets/img/bahia.png'

    }else if(time === 'bota'){
        elenco.innerHTML = '<br><strong>Botafogo de Futebol e Regatas</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br> Rio de Janeiro – Rio de Janeiro </p> <strong>Estádio:<br> </strong> Estádio Olímpico Nilton Santos<p> <strong>Torcedores:</strong>  4.288.000 milhões</p>'
        elenco.style.background = '#282828'
        escudo.src= './assets/img/botafogo.png'
        
    }else if(time === 'brag'){
        elenco.innerHTML = '<br><strong>Red Bull Bragantino</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br> Bragança Paulista – São Paulo </p> <strong>Estádio:<br> </strong> Estádio Nabi Abi Chedid – Arena Red Bull<p> <strong>Torcedores:</strong> Sem dados  </p>'
        elenco.style.background = '#d61e3f'
        escudo.src= './assets/img/bragantino.png'
        
    }else if(time === 'cor'){
        elenco.innerHTML = '<br><strong>Sport Club Corinthians Paulista</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br> São Paulo – São Paulo </p> <strong>Estádio:<br> </strong> Neo Química Arena<p> <strong>Torcedores:</strong> <br>30.444.799 milhões</p>'
        elenco.style.background = '#303030'
        
        escudo.src= './assets/img/corinthians.png'

    }else if(time === 'cri'){
        elenco.innerHTML = '<br><strong>Criciúma Esporte Clube</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>Criciúma – Santa Catarina</p> <strong>Estádio:<br> </strong> Estádio Heriberto Hülse (Majestoso)<p> <strong>Torcedores:</strong> <br>Sem dados</p>'
        elenco.style.background = '#fdd116'
        escudo.src= './assets/img/criciumaEC.png'

    }else if(time === 'cru'){
        elenco.innerHTML = '<br><strong>Cruzeiro Esporte Clube</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br> Belo Horizonte – Minas Gerais </p> <strong>Estádio:<br> </strong> Mineirão <p> <strong>Torcedores:</strong> <br> 13.078.400 milhões</p>'
        elenco.style.background = '#065aa1'
        escudo.src= './assets/img/cruzeiro.png'

    }else if(time === 'cuia'){
        elenco.innerHTML = '<br><strong>Cuiabá Esporte Clube</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br> Cuiabá – Mato Grosso </p> <strong>Estádio:<br> </strong>  Arena Pantanal <p> <strong>Torcedores:</strong> <br> Sem dados</p>'
        elenco.style.background = '#066334'
        escudo.src= './assets/img/cuiaba.png'

    }else if(time === 'fla'){
        elenco.innerHTML = '<br><strong>Clube de Regatas do Flamengo</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>  Rio de Janeiro – Rio de Janeiro </p> <strong>Estádio:<br> </strong> Maracanã <p> <strong>Torcedores:</strong> <br> 46.953.599 milhões</p>'
        elenco.style.background = '#c22a1e'
        escudo.src= './assets/img/flamengo.png'
        
        
        

    }else if(time === 'flu'){
        elenco.innerHTML = '<br><strong>Fluminense Football Club</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>  Rio de Janeiro – Rio de Janeiro </p> <strong>Estádio:<br> </strong> Manoel Schwartz (Laranjeiras) <p> <strong>Torcedores:</strong> <br> 7.289.600 milhões</p>'
        elenco.style.background = '#9f022f'
        escudo.src= './assets/img/fluminense.png'

    }else if(time === 'for'){
        elenco.innerHTML = '<br><strong>Fortaleza Esporte Clube</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>  Fortaleza – Ceará </p> <strong>Estádio:<br> </strong> Arena Castelão <p> <strong>Torcedores:</strong> <br>  2,77 milhões</p>'
        elenco.style.background = '#0c5da7'
        escudo.src= './assets/img/fortaleza.png'

    }else if(time === 'gre'){
        elenco.innerHTML = '<br><strong>Grêmio Foot-Ball Porto Alegrense</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>Porto Alegre – Rio Grande do Sul </p> <strong>Estádio:<br> </strong> Arena do Grêmio <p> <strong>Torcedores:</strong> <br>  9.862.400 milhões</p>'
        escudo.src= './assets/img/gremio.png'
        elenco.style.background = '#2ebbff'
        

    }else if(time === 'int'){
        elenco.innerHTML = '<br><strong>Sport Club Internacional</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>Porto Alegre – Rio Grande do Sul </p> <strong>Estádio:<br> </strong> Estádio Beira-Rio <p> <strong>Torcedores:</strong> <br>  7.504.000 milhões</p>'
        elenco.style.background = '#e5050f'
        escudo.src= './assets/img/internacional.png'

    }else if(time === 'ju'){
        elenco.innerHTML = '<br><strong>Esporte Clube Juventude</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>Caxias do Sul – Rio Grande do Sul </p> <strong>Estádio:<br> </strong>Estádio Alfredo Jaconi<p> <strong>Torcedores:</strong> <br>  78 mil</p>'
        elenco.style.background = '#0c9050'
        escudo.src= './assets/img/juventude.png'

    }else if(time === 'pal'){
        elenco.innerHTML = '<br><strong>Sociedade Esportiva Palmeiras</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>São Paulo – São Paulo </p> <strong>Estádio:<br> </strong> Allianz Parque<p> <strong>Torcedores:</strong> <br>  20.225.600 milhões</p>'
        elenco.style.background = '#165016'
        escudo.src= './assets/img/palmeiras.png'

    }else if(time === 'sp'){
        elenco.innerHTML = '<br><strong>São Paulo Futebol Clube</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>São Paulo – São Paulo </p> <strong>Estádio:<br> </strong> Estádio do Morumbi <p> <strong>Torcedores:</strong> <br>   22.225.800 milhões</p>'
        elenco.style.background = '#ed3237'
        escudo.src= './assets/img/sao-paulo.png'

    }else if(time === 'vasc'){
        elenco.innerHTML = '<br><strong>Club de Regatas Vasco da Gama</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>Rio de Janeiro – Rio de Janeiro </p> <strong>Estádio:<br> </strong> São Januário <p> <strong>Torcedores:</strong> <br> 13.292.800 milhões</p>'
        
        elenco.style.background = '#282829'
        escudo.src= './assets/img/vasco.png'

    }else if(time === 'vit'){
        elenco.innerHTML = '<br><strong>Esporte Clube Vitória</strong>'
        elenco.innerHTML += '<p><strong>Cidade:</strong><br>Salvador – Bahia </p> <strong>Estádio:<br> </strong> Estádio Manoel Barradas (Barradão) <p> <strong>Torcedores:</strong> <br> 1,5 milhão</p>'
        elenco.style.background = '#fe0000'
        escudo.src= './assets/img/vitoria.png'

    }else if(time === 'opt'){
       elenco.innerHTML = '<p>Escolha</p><p>seu</p>time!'
        elenco.src= './assets/img/bola.png'
        elenco.style.background = 'green'
        escudo.src= './assets/img/times-da-serie-a-2024.png'
        
    }
}