from flask import Flask, render_template

# Inicializando
app = Flask(__name__)

# Rotas
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/to-do-list')
def to_do_list():
    return render_template('to_do_list.html')

@app.route('/flip-clock')
def flip_clock():
    return render_template('flip_clock.html')

@app.route('/sobre')
def pagina_sobre():
    return render_template('about.html')

# Rodando o projeto
if __name__ == '__main__':
    app.run(debug=True)