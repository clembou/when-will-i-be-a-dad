
from flask import Flask, request, url_for, render_template
import random
from whenwillibeadad import todays_prob, cumulative_graph

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    y = todays_prob()
    try:
        graph = cumulative_graph()
    except:
        graph = " "
    
    return render_template('index.html',
        title="#when-will-i-be-a-dad",
        username="Alex",
        probability="%.1f%%" % y,
        graph=graph)

@app.route('/greet', methods=['POST'])
def greet():
    greeting = random.choice(["Hiya", "Hallo", "Hola", "Ola", "Salut", "Privet", "Konnichiwa", "Ni hao"])
    return """
        <p>%s, %s!</p>
        <p><a href="%s">Back to start</a></p>
        """ % (greeting, request.form["person"], url_for('index'))

if __name__ == "__main__":
    app.run()