from flask import Flask, render_template, request
from nearparking import find_nearest_parking

app = Flask(__name__)

# Define route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Define route for processing form submission
@app.route('/submit', methods=['POST'])
def submit():
    # Get latitude and longitude from the form submission
    latitude = float(request.form['latitude'])
    longitude = float(request.form['longitude'])

    # Find nearest parking
    nearest_parking = find_nearest_parking(latitude, longitude)

    # Pass the result to the template
    return render_template('nearparking.html', nearest_parking=nearest_parking)

if __name__ == '__main__':
    app.run(debug=True)
