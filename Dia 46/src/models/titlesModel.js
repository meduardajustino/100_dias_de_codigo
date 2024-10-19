const titlesData = require('../data/titles.json');

// Função para obter todos os títulos
exports.getTitles = () => {
  return titlesData;
};

// Função para obter títulos por categoria
exports.getTitlesByCategory = (category) => {
  return titlesData.filter(title => title.categoria.toLowerCase() === category.toLowerCase());
};

// Função para obter títulos por ano
exports.getTitlesByYear = (year) => {
  return titlesData.filter(title => title.ano === year);
};
