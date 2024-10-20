import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Titulos = () => {
  const [titulos, setTitulos] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [ano, setAno] = useState('');
  const [loading, setLoading] = useState(true);

  // Função para buscar todos os títulos
  useEffect(() => {
    axios.get('http://localhost:3000/api/titulos')
      .then(response => {
        setTitulos(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Erro ao buscar títulos:', error));
  }, []);

  // Renderizar com base em condicional (verificar se está carregando)
  if (loading) {
    return <p>Carregando títulos...</p>;
  }

  return (
    <div>
      <h1>Títulos do Vasco da Gama</h1>

      <div>
        <label>Buscar por Categoria: </label>
        <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} />
        <button onClick={() => buscarPorCategoria(categoria)}>Buscar</button>
      </div>

      <div>
        <label>Buscar por Ano: </label>
        <input type="text" value={ano} onChange={e => setAno(e.target.value)} />
        <button onClick={() => buscarPorAno(ano)}>Buscar</button>
      </div>

      {/* Condicional: Renderizar títulos ou mensagem de erro */}
      <div>
        {titulos.length > 0 ? (
          <ul>
            {titulos.map(titulo => (
              <li key={titulo.id}>
                {titulo.titulo} - {titulo.categoria} ({titulo.ano})
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum título encontrado</p>
        )}
      </div>
    </div>
  );
};

const buscarPorCategoria = (categoria) => {
  axios.get(`http://localhost:3000/api/titulos/categoria/${categoria}`)
    .then(response => {
      setTitulos(response.data);
    })
    .catch(error => console.error('Erro ao buscar títulos:', error));
};

const buscarPorAno = (ano) => {
  axios.get(`http://localhost:3000/api/titulos/ano/${ano}`)
    .then(response => {
      setTitulos(response.data);
    })
    .catch(error => console.error('Erro ao buscar títulos:', error));
};

export default Titulos;
