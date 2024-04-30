from app import db
from app import app
from flask_migrate import Migrate

migrate = Migrate(app, db)

class User(db.Model):
    id      = db.Column(db.Integer, primary_key=True)
    nome    = db.Column(db.String(40))
    sobrenome = db.Column(db.String(40))
    email   = db.Column(db.String(120))
    senha   = db.Column(db.String(100))
    nivel   = db.Column(db.String(20))
    status  = db.Column(db.String(20))