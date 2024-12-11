from flask import Flask, jsonify, request

app = Flask(__name__)

# simulando dados
users = [
    {'id': 1, 'nome': 'Maria Eduarda', 'email': 'madujstudies@gmail.com'},
    {'id': 2, 'nome': 'Luiza Maria', 'email': 'luizas@hotmail.com'},
    {'id': 3, 'nome': 'Kaio Junior', 'email': 'kaiojk@outlook.com'}
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify(user), 200
    else:
        return jsonify({'message': 'Usuário não encontrado'}), 404
    
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = {
        'id': len(users) + 1,
        'nome': data['nome'],
        'email': data['email']
    }
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        user['nome'] = data['nome']
        user['email'] = data['email']
        return jsonify(user), 200
    else:
        return jsonify({'message': 'Usuário não encontrado'}), 404
    
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        users.remove(user)
        return jsonify({'message':'Usuário excluido com sucesso'}), 200
    else:
        return jsonify({'message': 'Usuário não encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)