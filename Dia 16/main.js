const slides = document.querySelectorAll('#imagens-carrossel img');
const botoes = document.querySelectorAll('.btn-carrossel');
let slideAtual = 0;
let intervaloCarrossel;

// trocar o slide ativo
const trocarSlide = (indice) => {
    slides.forEach(slide => slide.classList.remove('ativo'));
    botoes.forEach(botao => botao.classList.remove('ativo'));

    slides[indice].classList.add('ativo'); // slide atual
    botoes[indice].classList.add('ativo'); // botão correspondente 
  
    document.getElementById('imagens-carrossel').style.transform = `translateX(-${indice * 600}px)`;
}

const repetir = () => {
    intervaloCarrossel = setTimeout(() => {
        slideAtual++;
        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }
        trocarSlide(slideAtual);
        repetir();
    }, 2000); // coloquei intervalo de 2 segundos
}

repetir();

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        clearTimeout(intervaloCarrossel);
        slideAtual = indice;
        trocarSlide(indice);
        repetir(); // reinicia o carrossel
    });
});
