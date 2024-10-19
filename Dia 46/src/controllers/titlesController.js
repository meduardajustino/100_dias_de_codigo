const titlesModel = require('../models/titlesModel');

// Controlador para obter todos os títulos
exports.getAllTitles = (req, res) => {
  const titles = titlesModel.getTitles();
  res.json(titles);
};

// Controlador para obter títulos por categoria
exports.getTitlesByCategory = (req, res) => {
  const categoria = req.params.categoria;
  const titles = titlesModel.getTitlesByCategory(categoria);
  if (titles.length === 0) {
    return res.status(404).json({ message: 'Categoria não encontrada' });
  }
  res.json(titles);
};

// Controlador para obter títulos por ano
exports.getTitlesByYear = (req, res) => {
  const ano = parseInt(req.params.ano, 10);
  const titles = titlesModel.getTitlesByYear(ano);
  if (titles.length === 0) {
    return res.status(404).json({ message: 'Nenhum título encontrado para esse ano' });
  }
  res.json(titles);
};
