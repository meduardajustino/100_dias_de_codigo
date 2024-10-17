const express = require('express')

const cors = require('cors')

const app = express()
app.use (express.json())
app.use(cors())

// rota utilizando http get

//rota users
app.get('/users', (request, response) => {
    return response.send('Lista de usuários')
})

// rota utilizando parâmetros

app.get('/users/:id', (request, response) => {
    const userId = request.params.id;
    return response.send(`User ID: ${userId}`)
})

app.listen(8080, () => console.log('Servidor rodando na porta 8080'))