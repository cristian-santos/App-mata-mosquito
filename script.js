var altura  = 0;
var largura = 0;

function ajustaTamanhoJogo() {
    altura  = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoJogo();

function posicaoRandomica() {

    // Remover o mosquito anterior
    if( document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
    }

    var posicao_x = Math.floor(Math.random() * largura) - 100;
    var posicao_y = Math.floor(Math.random() * altura) - 100;

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
    mosquito.id = 'mosquito'

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

    switch(classe) {
        case 0:
            return 'ladoA'
            
        case 1:
            return 'ladoB';
    }
}


