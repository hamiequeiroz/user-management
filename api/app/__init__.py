
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

        redirect('/')
        return id

@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        
        data = request.json

        print(data)

        # Cria um novo usuário
        #new_user = User(nome=data['nome'], email=data['email'])
        #db.session.add(new_user)
        #db.session.commit()

        return jsonify({'message': 'Usuário cadastrado com sucesso'}), 201