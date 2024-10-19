const express = require('express');
const app = express();
const port = 1898;

// Lista de títulos do Vasco
const titulos = [
  { id: 1, titulo: 'Campeonato Brasileiro', categoria: 'Brasileirão', ano: 1997 },
  { id: 2, titulo: 'Copa do Brasil', categoria: 'Copa do Brasil', ano: 2011 },
  { id: 3, titulo: 'Libertadores', categoria: 'Libertadores', ano: 1998 },
  { id: 4, titulo: 'Campeonato Carioca', categoria: 'Estadual', ano: 2020 },
];

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Rota para listar todos os títulos
app.get('/titulos', (req, res) => {
  res.json(titulos);  // Envia a lista de títulos em formato JSON
});

// Rota para buscar um título específico por ID
app.get('/titulos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const titulo = titulos.find(t => t.id === id);

  if (titulo) {
    res.json(titulo);  // Se o título existir, retorna o título
  } else {
    res.status(404).send('Título não encontrado');
  }
});

// inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
