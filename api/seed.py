from app import app, db
from app.models import User

def create_seed_data():
    users_data = [
        {"nome": "Hamie",  "sobrenome":"Queiroz", "email" : "hamiequeiroz@hotmail.com" , "senha" : "123", "nivel" : "admin", "status" : "ativo"},
        {"nome": "Miguel", "sobrenome":"Silva",   "email" : "miguelsilva@hotmail.com" ,  "senha" : "123", "nivel" : "admin", "status" : "cancelado"},
        {"nome": "Ramon",  "sobrenome":"Carlos",  "email" : "ramoncarlos@hotmail.com" ,  "senha" : "123", "nivel" : "use", "status" : "ativo"},
        {"nome": "Regina",  "sobrenome":"Fonseca",  "email" : "reginafonseca@hotmail.com" ,  "senha" : "123", "nivel" : "user", "status" : "cancelado"}
    ]

    for user_data in users_data:
        user = User(**user_data)
        db.session.add(user)

    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        create_seed_data()