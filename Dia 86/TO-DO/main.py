from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, template_folder="templates")

tarefas = []

@app.route("/")
def index():
    return render_template("index.html", tarefas=tarefas)

@app.route("/add", methods=["POST"])
def add():
    tarefa = request.form['tarefa']
    tarefas.append({"tarefa": tarefa, "concluido": False})
    return redirect(url_for("index"))

@app.route("/edit/<int:index>", methods=["GET", "POST"])
def edit(index):
    tarefa = tarefas[index]
    if request.method == "POST":
        tarefa['tarefa'] = request.form['tarefa']
        return redirect(url_for("index"))
    else:
        return render_template("edit.html", tarefa=tarefa, index=index)

@app.route('/check/<int:index>')
def check(index):
    tarefas[index]['concluido'] = not tarefas[index]['concluido']
    return redirect(url_for("index"))

@app.route('/delete/<int:index>')
def delete(index):
    del tarefas[index]
    return redirect(url_for("index"))

if __name__ == '__main__':
    app.run(debug=True)