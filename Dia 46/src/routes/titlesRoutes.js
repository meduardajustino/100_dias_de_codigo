const express = require('express');
const router = express.Router();
const titlesController = require('../controllers/titlesController');

// Rota para listar todos os títulos
router.get('/', titlesController.getAllTitles);

// Rota para buscar títulos por categoria
router.get('/categoria/:categoria', titlesController.getTitlesByCategory);

// Rota para buscar títulos por ano
router.get('/ano/:ano', titlesController.getTitlesByYear);

module.exports = router;
