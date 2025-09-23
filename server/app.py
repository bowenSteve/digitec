from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from datetime import timedelta
import os

app = Flask(__name__)
CORS(app)


if __name__ == '__main__':
    app.run(debug=True)