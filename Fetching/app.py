from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html') 

@app.route('/submit', methods=['POST', "GET"])
def submit():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    age = data.get('age')
    print(f"Name: {name} Email: {email}")
    if request.method == 'POST':
        return jsonify({"message": "Data received", "name": name, "email": email, "age": age})
    else:
        return jsonify({"message": "Data received", "name": name, "email": email, "age": age})

if __name__ == '__main__':
    app.run(debug=True)