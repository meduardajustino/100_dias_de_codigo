import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NewsList.jsx";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "e4c4835366fe4fff91761188cbbadfed";
  const apiUrl = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar notícias: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NewsPretty</h1>
        <p>Sua fonte de informação diária</p>
      </header>
      <main>
        {}
        {loading ? <p>Carregando...</p> : <NewsList news={news} />}
      </main>
    </div>
  );
}

export default App;
