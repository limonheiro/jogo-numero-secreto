let listaDeNumerosSorteados = [];

let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10.');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let textoTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Voce descobriu o Número Secreto, com ${tentativas} ${textoTentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O numero Secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela('p', `O numero Secreto é maior ${chute}.`);
        }
    }
    tentativas++;
    limparTela();
}

function limparTela() {
    let input = document.querySelector('input');
    input.value = '';
}

function reiniciarJogo() {
    document.getElementById('reiniciar').setAttribute("disabled", true);
    numeroSecreto = geraNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
}

function geraNumeroAleatorio(maxNumber = 10) {
    let numeroEscolhido = parseInt(Math.random() * maxNumber + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == maxNumber) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

}