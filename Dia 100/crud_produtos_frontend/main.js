const apiUrl = 'http://localhost:5000/api/products';

// função para consumir API e listar produtos
async function consumirAPI() {
  const produtosContainer = document.getElementById('produtos_container');
  produtosContainer.innerHTML = ''; // limpa os produtos anteriores

  try {
    const response = await fetch(apiUrl);
    const produtos = await response.json();

    produtos.forEach(produto => {
      const card = document.createElement('div'); //cria um novo elemento
      card.classList.add('produto-card');
      card.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Quantidade: ${produto.quantidade}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Fabricante: ${produto.fabricante}</p>
      `;
      produtosContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao consumir API:', error);
  }
}

// cadastrar novo produto
document.getElementById('produto_form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const novoProduto = {
    nome: document.getElementById('nome').value,
    preco: parseFloat(document.getElementById('preco').value),
    quantidade: parseInt(document.getElementById('quantidade').value),
    categoria: document.getElementById('categoria').value,
    fabricante: document.getElementById('fabricante').value,
  };

  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoProduto),
    });
    consumirAPI();
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
  }
});

window.onload = consumirAPI; //atualizar a página sempre que for carregada
