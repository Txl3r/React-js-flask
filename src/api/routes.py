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
    new_user = User(email=request_body["email"], password=request_body["password"], first_name=request_body["first_name"], last_name=request_body["last_name"], dob=request_body["dob"])
    db.session.add(new_user)
    db.session.commit()
    return f"The new user {request_body['email']} was created successfully", 200

@api.route('/signup/<int:signup_id>', methods=['DELETE'])
def delete_user():
    user = user.get.query(user_id)
    if user is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(user)
    db.session.commit()
    return f"The user was deleted successfully", 200



@api.route('/login', methods=['POST'])
def create_login():
    request_body = request.get_json()
    new_login = Login(email=request_body["email"], password=request_body["password"])
    db.session.add(new_login)
    db.session.commit()
    return f"the new login {request_body['email']} was created successfully", 200

@api.route('/private', methods=['GET'])
def get_private():
    private = Private.query.all()
    private_list = list(map(lambda i: i.serialize(), private))
    return jsonify(private_list), 200
