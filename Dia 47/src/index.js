const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1998;

app.set('view engine', 'hjs');
app.set('views', './views');

// Middleware para processar dados enviados via POST (formulários)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware global que será aplicado a todas as rotas
app.use((req, res, next) => {
  console.log("foi lançado um middleware");
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

// títulos do Vasco
const titulos = require('./src/data/titles.json');
const carregarTitulos = () => {
  const data = fs.readFileSync('./src/data/titles.json', 'utf8');
  return JSON.parse(data);
};

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/titulos', (req, res) => {
  res.json(titulos); 
});

// Rota para buscar um título específico por ID
app.get('/titulos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const titulo = titulos.find(t => t.id === id);

  if (titulo) {
    res.json(titulo); 
  } else {
    res.status(404).send('Título não encontrado');
  }
});

// Rota para adicionar um novo título via formulário
app.post('/titulos', (req, res) => {
  const novoTitulo = {
    id: titulos.length + 1, 
    titulo: req.body.titulo,
    categoria: req.body.categoria,
    ano: parseInt(req.body.ano),
  };

  titulos.push(novoTitulo);
  res.status(201).json(novoTitulo); 
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
