from flask import Flask, render_template

# Inicializando
app = Flask(__name__)

# Rotas
@app.route('/')
def home():
    return """
        <h1>Bem-vindo ao I&M Studies 💗🕰️</h1>
        <p>📌๋࣭ ⭑📜. Acesse as diferentes seções usando os links abaixo:</p>
        <ul>
            <li><a href="/to-do-list">To-Do List com Playlist de Piano</a></li>
            <li><a href="/flip-clock">Flip Clock Vintage</a></li>
            <li><a href="/sobre">Sobre</a></li>
        </ul>
    """

@app.route('/to-do-list')
def to_do_list():
    return """
        <h1>𓍢ִ໋🌸🎻🪞 To-Do List com Playlist de Piano</h1>
        <iframe src="https://to-do-list-ten-rouge.vercel.app/" width="100%" height="600px"></iframe>
        <p>🧸𓍢ִ໋🌷͙֒🕰️  Utilize o método Pomodoro: 50 minutos de foco e 10 minutos de pausa.</p>
    """

@app.route('/flip-clock')
def flip_clock():
    return """
        <h1>🧸𓍢ִ໋🌷͙֒🕰️ Flip Clock Vintage</h1>
        <iframe src="https://flip-clock-vintage.vercel.app/" width="100%" height="600px"></iframe>
        <p>Relógio vintage com um toque estético rosa, simulando os clássicos relógios mecânicos.</p>
    """

@app.route('/sobre')
def pagina_sobre():
    return """
        <strong>🍪 Seguidor I&M Studies </strong>: siga nosso
        <a href="https://www.instagram.com/iemstudies"> instagram </a>
    """

# Rodando o projeto
if __name__ == '__main__':
    app.run(debug=True)
