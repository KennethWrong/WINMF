from flask import Flask, request, json, jsonify, send_from_directory, send_file
from flask.helpers import make_response
from flask_cors import CORS  # comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)  # comment this on deployment

@app.route('/', methods=['GET'])
def home():
    return 'Hello'

if __name__ == '__main__':
    app.run(debug=True)
