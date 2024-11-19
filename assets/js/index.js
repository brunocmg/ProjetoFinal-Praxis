const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

const imagems = document.querySelectorAll('.container img');

let indexAtual = 0;

function mostrarImagem(index) {
    imagems.forEach((img, indiceImagem) => {
        img.classList.remove('imagemAtiva'); 
        if (indiceImagem === index) {
            img.classList.add('imagemAtiva'); 
        }
    });
}

setaEsquerda.addEventListener('click', () => {
    indexAtual = (indexAtual - 1 + imagems.length) % imagems.length;
    mostrarImagem(indexAtual);
});

setaDireita.addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % imagems.length; 
    mostrarImagem(indexAtual);
});

mostrarImagem(indexAtual);