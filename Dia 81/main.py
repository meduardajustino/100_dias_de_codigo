from flask import Flask

# Inicializando
app = Flask(__name__)

# Rotas
@app.route('/')
def shrek():
    return "Assistindo ao primeiro filme da saga Shrek (2001)"

# Rodando o projeto
app.run(debug=True)