const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

function contarLetras()
{
    const texto = textarea.value;
    const textoLength = textarea.value.length;

    count.innerText = `${textoLength}`;
}