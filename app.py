from flask import Flask, request, json, jsonify, send_from_directory, send_file
from flask.helpers import make_response
from flask_cors import CORS  # comment this on deployment
import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("service_key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)  # comment this on deployment


@app.route('/', methods=['GET'])
def home():
    return 'Hello'

@app.route('/test')
def test():
    doc_ref = db.collection(u'users').document(u'aturing')
    doc_ref.set({
        u'first': u'Alan',
        u'middle': u'Mathison',
        u'last': u'Turing',
        u'born': 1912
    })

    return 'success'

if __name__ == '__main__':
    app.run(debug=True)
