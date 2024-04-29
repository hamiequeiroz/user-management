
from flask import Flask, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123456@127.0.0.1/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class User(db.Model):
    id      = db.Column(db.Integer, primary_key=True)
    nome    = db.Column(db.String(40))
    sobrenome = db.Column(db.String(40))
    email   = db.Column(db.String(120))
    senha   = db.Column(db.String(100))
    nivel   = db.Column(db.String(10))

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
        print(user.id)
        print(user.nome)
        print(user.sobrenome)
        print(user.email)
        print(user.senha)
        print(user.nivel)
        usuario_json = []
        usuario_dict = {
                'id': user.id,
                'nome': user.nome,
                'sobrenome': user.sobrenome,
                'email': user.email,
                'senha': user.senha,
                'nivel': user.nivel
        }
        usuario_json.append(usuario_dict)

        return jsonify(usuario_json)
        

@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        
        data = request.json
        print(data)

        new_user = User(nome=data['nome'], sobrenome=data['sobrenome'],  email=data['email'], senha=data['senha'], nivel=data['nivel'] )
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Usuário cadastrado com sucesso'}), 201

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

        db.session.commit()

        return jsonify({'message': 'Usuário atualizado com sucesso'}), 201