from flask import Flask, render_template

# Inicializando
app = Flask(__name__)

# Rotas
@app.route('/')
def home():
    titulo = "Home - I&M Studies 👩🏼‍💻🌸✨"
    funcionalidades = [
        {"nome": "To-Do List", "descricao": "Gerencie suas tarefas.", "link": "/to-do-list"},
        {"nome": "Flip Clock", "descricao": "Relógio vintage interativo.", "link": "/flip-clock"},
        {"nome": "Sobre", "descricao": "Conheça mais sobre nós.", "link": "/sobre"}
    ]
    return render_template('index.html', titulo=titulo, funcionalidades=funcionalidades)

@app.route('/to-do-list')
def to_do_list():
    return render_template('to_do_list.html')

@app.route('/flip-clock')
def flip_clock():
    return render_template('flip_clock.html')

@app.route('/sobre')
def pagina_sobre():
    resumo = "No instagram você estará por dentro da minha rotina universitária, além de dicas para maximizar sua eficiência nos estudos."
    return render_template('about.html', resumo = resumo)

# Rodando o projeto
if __name__ == '__main__':
    app.run(debug=True)