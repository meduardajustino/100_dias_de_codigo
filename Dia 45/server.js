//arquivo do servidor
const express = require('express');
const cors = require('cors');
const axios = require('axios');


// api criada no the cat api: live_Uj3YoB1ErU0LTxZ4agTRnarnsVD0m4uLHpI3zaeYHq4DFFGPLzgWIA9nI4psCX5e

const api_key = 'live_Uj3YoB1ErU0LTxZ4agTRnarnsVD0m4uLHpI3zaeYHq4DFFGPLzgWIA9nI4psCX5e';

const app = express();
app.use(cors());
app.use(express.json());

// criando rota para obter os dados da API
app.get('/random-cats', async (req, res) => {
    // consome a api com axios
    const response = await axios.get('https://api.thecatapi.com/v1/imagens/search?limit=7', {
        headers : {
            "x-api-key": api_key
        }, // 7 fotos de gatos aleatórios
    });
    // exibindo a resposta da requisição
    res.json(response.data);
});

// criando o servidor
const port = 2121;
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})