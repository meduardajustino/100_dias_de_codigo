const slider = document.getElementById('slider');
const tamanhoSenha = document.getElementById('tamanho-senha');
const botaoGerar = document.getElementById('gerar-senha');
const campoSenha = document.getElementById('senha-gerada');
const botaoCopiar = document.getElementById('copiar-senha');

const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

// definindo o tamanho da senha
slider.oninput = function() {
    tamanhoSenha.textContent = this.value;
}

function gerarSenha() {
    let senha = '';
    for (let i = 0; i < slider.value; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }
    campoSenha.textContent = senha;
}

function copiarSenha() {
    const senha = campoSenha.textContent;
    navigator.clipboard.writeText(senha).then(() => {
        alert('Senha copiada com sucesso!');
    });
}

botaoGerar.addEventListener('click', gerarSenha);
botaoCopiar.addEventListener('click', copiarSenha);
