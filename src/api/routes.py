"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['GET'])
def get_user():
    user = User.query.all()
    user_list = list(map(lambda x: x.serialize(), user))
    return jsonify(user_list), 200

@api.route('/signup', methods=['POST'])
def create_user():
    request_body = request.get_json()
    new_user = User(email=request_body["email"], password=request_body["password"], is_active=request_body["is_active"])
    db.session.add(new_user)
    db.session.commit()
    return f"The new user {request_body['email']} was created successfully", 200