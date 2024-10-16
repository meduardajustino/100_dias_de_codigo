const express = require('express')

const cors = require('cors')

const app = express()
app.use (express.json())
app.use(cors())

app.listen(8080, () => console.log('Servidor rodando na porta 8080'))