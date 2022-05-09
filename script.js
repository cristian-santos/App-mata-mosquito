var altura  = 0;
var largura = 0;

function ajustaTamanhoJogo() {
    altura  = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoJogo();

function posicaoRandomica() {
    var posicao_x = Math.floor(Math.random() * largura) - 90;
    var posicao_y = Math.floor(Math.random() * altura) - 90;

    posicao_x = posicao_x < 0 ? 0 : posicao_x
    posicao_Y = posicao_y < 0 ? 0 : posicao_y;

    console.log(posicao_x, posicao_y);

    // Criando o elemento HTML

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className  = 'mosquito1';
    mosquito.style.left = posicao_x + 'px';
    mosquito.style.top  = posicao_y + 'px';
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);
}



