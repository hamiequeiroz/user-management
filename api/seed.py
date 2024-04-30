from app import app, db
from app.models import User

def create_seed_data():
    users_data = [
        {"nome": "Hamie",  "sobrenome":"Queiroz", "email" : "hamiequeiroz@hotmail.com" , "senha" : "123", "nivel" : "Administrador", "status" : "Ativo"},
        {"nome": "Miguel", "sobrenome":"Silva",   "email" : "miguelsilva@hotmail.com" ,  "senha" : "123", "nivel" : "Administrador", "status" : "Cancelado"},
        {"nome": "Ramon",  "sobrenome":"Carlos",  "email" : "ramoncarlos@hotmail.com" ,  "senha" : "123", "nivel" : "Usuario", "status" : "Ativo"},
        {"nome": "Regina",  "sobrenome":"Fonseca",  "email" : "reginafonseca@hotmail.com" ,  "senha" : "123", "nivel" : "Usuario", "status" : "Cancelado"}
    ]

    for user_data in users_data:
        user = User(**user_data)
        db.session.add(user)

    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        create_seed_data()