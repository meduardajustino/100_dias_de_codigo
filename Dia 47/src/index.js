const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); 
const titlesRoutes = require('./routes/titlesRoutes');
const app = express();
const port = 1998;

app.set('view engine', 'hjs');
app.set('views', './views');

// Middleware para processar dados enviados via POST (formulários)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configura o middleware de sessão
app.use(session({
  secret: 'gigantedacolina',
  resave: false,
  saveUninitialized: true,
}));

// Middleware global que será aplicado a todas as rotas
app.use((req, res, next) => {
  console.log("foi lançado um middleware");
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next(); 
});

// Middleware para verificar se o usuário está logado
const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

app.use(authRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

// rotas protegidas - Somente usuários logados podem acessar
app.use('/titulos', requireLogin, titlesRoutes);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
