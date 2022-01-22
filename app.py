from flask import Flask, request, json, jsonify, send_from_directory, send_file
from flask.helpers import make_response
from flask_cors import CORS  # comment this on deployment
from google.cloud import firestore
import os

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)  # comment this on deployment

credential_path = 'service_key.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

db = firestore.Client(project='BoilerMake-WhatsInMyFridge')

@app.route('/', methods=['GET'])
def home():
    return 'Hello'

@app.route('/test')
def test():
    doc_ref = db.collection(u'users').document(u'alovelace')
    doc_ref.set({
        u'first': u'Ada',
        u'last': u'Lovelace',
        u'born': 1815
    })   
if __name__ == '__main__':
    app.run(debug=True)
