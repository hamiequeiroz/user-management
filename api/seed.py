from app import app, db
from app.models import User

# Função para criar os dados de seed
def create_seed_data():
    # Exemplo de dados de usuário]
    users_data = [
        {"nome": "Hamie",  "sobrenome":"Queiroz", "email" : "hamiequeiroz@hotmail.com" , "senha" : "123", "nivel" : "admin"},
        {"nome": "Miguel", "sobrenome":"Silva",   "email" : "miguelsilva@hotmail.com" ,  "senha" : "123", "nivel" : "user"},
        {"nome": "Ramon",  "sobrenome":"Carlos",  "email" : "ramoncarlos@hotmail.com" ,  "senha" : "123", "nivel" : "user"}
    ]

    # Popula o banco de dados com os dados de usuário
    for user_data in users_data:
        user = User(**user_data)
        db.session.add(user)

    # Commit das mudanças
    db.session.commit()

if __name__ == '__main__':
    # Inicializa o contexto do aplicativo Flask
    with app.app_context():
        # Chama a função para criar os dados de seed
        create_seed_data()