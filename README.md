# Sistema de Gerenciamento de Usuários

O sistema foi desenvolvido usando como BackEnd Python "Flask SQLAlchemy" e como FrontEnd o React, o projeto 
contém uma pasta da API e outra Pasta do Front. Para a execução abra dois terminais um para a API e outro para 
executar o front.

# Pré - requisitos

- Instalar o Docker
- Instalar o Node.js
- Instalar o Git
- Instalar o Python

# Instalação Do Banco de Dados

Para baixar a imagem do banco de dados Postgres
- docker pull postgres

Executar e criar o container com o nosso banco de dados
- docker run -d --name postgres -p 5435:5432 -e POSTGRES_PASSWORD=123456 postgres

# Clone do projeto

Faça do clone do projeto para o seu repositório local usando o comando abaixo.
- git clone https://github.com/hamiequeiroz/user-management.git

# Configuração da API - BackEnd

Utizando o terminal entre na pasta "api" digite os seguintes comandos:

Criando o ambiente virtual do python
- python -m venv .venv
- .venv/Scripts/activate

Instalar todos os pacotes que a nossa aplicação precisa
- pip install -r requirements.txt

Fazer a migração do nosso banco de dados e criar os dados iniciais
- flask db init
- flask db migrate -m "criação do modelo User"
- flask db upgrade
- python seed.py

Executar nosso servidor backend
- flask run

Prontinho sua aplicação backend vai executar na porta 5000.

# Configuração - FrontEnd

Utizando o terminal entre na pasta "front" digite os seguintes comandos:

Instalar todos os nossos pacotes que vamos precisar na nossa aplicação
- npm install

Executar o react
- npm start

Prontinho nosso servidor está rodando na porta 3000

# Usar a aplicação

Entre no navegador e digite na url http://localhost:3000/

Para acessar a aplicação utilize algum dos usuarios abaixo

Administrador
- Usuario hamiequeiroz@hotmail.com
- Senha 123

Usuário comun
- Usuario ramoncarlos@hotmail.com
- Senha 123