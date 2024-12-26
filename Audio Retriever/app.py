from flask import Flask, request, render_template, jsonify
import assemblyai as aai
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from.env file.

aai.settings.api_key = os.environ.get('ASSEMBLYAI_API_KEY')
transcriber = aai.Transcriber()

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/upload', methods=['POST'])
def upload():
    audio_file = request.files['audio']
    transcript = transcriber.transcribe(audio_file)
    return jsonify({"transcript" : transcript.text})

if __name__ == '__main__':
    app.run(debug=True)