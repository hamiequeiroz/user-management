
# Instalação Do Banco de Dados

docker pull postgres
docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=123456 postgres

# Configuração da API - BackEnd

Dentro da pasta API digite os comandos:

python -m venv .venv
.venv/Scripts/activate
pip install -r .\requirements.txt

flask db init
flask db migrate -m "criação do modelo User"
flask db upgrade
python .\seed.py

flask run