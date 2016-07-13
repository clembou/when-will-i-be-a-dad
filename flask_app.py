
from flask import Flask, request, url_for
import random
from whenwillibeadad import todays_prob

app = Flask(__name__)
app.secret_key = 'This is really unique and secret'



@app.route('/')
def hello_person():
    y = todays_prob()
    return """
        <p>Alex: there is a %.1f%% chance you will be a dad today</p>
        <p>Who do you want me to say "hello" to?</p>
        <form method="POST" action="%s"><input name="person" /><input type="submit" value="Go!" /></form>
        """ % (y,url_for('greet'),)

@app.route('/greet', methods=['POST'])
def greet():
    greeting = random.choice(["Hiya", "Hallo", "Hola", "Ola", "Salut", "Privet", "Konnichiwa", "Ni hao"])
    return """
        <p>%s, %s!</p>
        <p><a href="%s">Back to start</a></p>
        """ % (greeting, request.form["person"], url_for('hello_person'))
