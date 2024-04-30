
from flask import Flask, request, url_for, jsonify
from app import app
from app.models import User
from app import db

@app.route('/user', methods=['GET', 'POST'])
def listUser():
    if request.method == 'GET':
        users = User.query.all()
        usuarios_json = []
        for user in users:
            usuario_dict = {
                'id': user.id,
                'nome': user.nome,
                'sobrenome': user.sobrenome,
                'email': user.email
            }
            usuarios_json.append(usuario_dict)

        return jsonify(usuarios_json)
    
@app.route('/delete/<int:id>', methods=['GET', 'POST'])
def deleteUser(id):
    if request.method == 'GET':
        user = User.query.get(id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return f'Usuário com ID {id} foi excluído com sucesso.', 200
        else:
            return f'Usuário com ID {id} não encontrado.', 404

@app.route('/getUser/<int:id>', methods=['GET', 'POST'])
def getUser(id):
    if request.method == 'GET':
        user = User.query.get(id)
        
        usuario_json = []
        usuario_dict = {
                'id': user.id,
                'nome': user.nome,
                'sobrenome': user.sobrenome,
                'email': user.email,
                'senha': user.senha,
                'nivel': user.nivel,
                'status': user.status
        }
        usuario_json.append(usuario_dict)

        return jsonify(usuario_json)

@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        
        data = request.json
        print(data)

        new_user = User(nome=data['nome'], sobrenome=data['sobrenome'],  email=data['email'], senha=data['senha'], nivel=data['nivel'],  status=data['status'] )
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Usuário cadastrado com sucesso'}), 201

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        
        data = request.json
        print(data)

        user = User.query.filter_by(email=data['email']).first()

        if user:
            if (user.email == data['email']) and (user.senha == data['senha']):
                return jsonify({'message': [True, user.nivel]}), 200
            return jsonify({'message': [False, '']}), 200
        else:
            return jsonify({'message': [False, '']}), 200

@app.route('/update/<int:id>', methods=['PUT'])
def update(id):
    if request.method == 'PUT':
        
        data = request.json
        print(data)

        user = User.query.get(id)

        user.nome = data['nome']
        user.sobrenome = data['sobrenome']
        user.email = data['email']
        user.senha = data['senha']
        user.nivel = data['nivel']
        user.status = data['status']

        db.session.commit()

        return jsonify({'message': 'Usuário atualizado com sucesso'}), 200