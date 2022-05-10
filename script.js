var altura  = 0;
var largura = 0;
var vidas   = 1;
var tempo   = 10;

function ajustaTamanhoJogo() {
    altura  = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoJogo();

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
    
}, 1000);

function posicaoRandomica() {

    // Remover o mosquito anterior
    if( document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    var posicao_x = Math.floor(Math.random() * largura) - 150;
    var posicao_y = Math.floor(Math.random() * altura) - 150;

    posicao_x = posicao_x < 0 ? 0 : posicao_x
    posicao_Y = posicao_y < 0 ? 0 : posicao_y;

    console.log(posicao_x, posicao_y);

    // Criando o elemento HTML

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className  = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicao_x + 'px';
    mosquito.style.top  = posicao_y + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
       this.remove();
    }

    document.body.appendChild(mosquito);
 
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    if(classe == 0) {
        return 'mosquito1'
    } else if(classe == 1) {
        return 'mosquito2';
    } else {
        return 'mosquito3';
    }
    // switch(classe) {
    //     case 0:
    //         return 'mosquito1'
            
    //     case 1:
    //         return 'mosquito2';

    //     case 2:
    //         return 'mosquito3';
    // }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    if(classe == 0) {
        return 'ladoA';
    } else {
        return 'ladoB';
    }
    // switch(classe) {
    //     case 0:
    //         return 'ladoA'
            
    //     case 1:
    //         return 'ladoB';
    // }
}


