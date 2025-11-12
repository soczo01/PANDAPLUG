from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL kapcsolat beállításai
DB_CONFIG = {
    'host': 'localhost',  # vagy a szerver címe
    'user': 'root',       # felhasználónév
    'password': 'root',   # jelszó
    'database': 'pandaplug1',
    'charset': 'utf8mb4'
}

@app.route('/api/products')
def get_products():
    conn = mysql.connector.connect(**DB_CONFIG)
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, nev, ar_usd, tipus_id, kep_id FROM termekek")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    # Átalakítás frontend igényeihez
    def map_cat(tipus_id):
        return {1: 'tshirt', 2: 'denim', 3: 'shorts', 4: 'sweater'}.get(tipus_id, 'tshirt')
    products = [
        {
            'id': row['id'],
            'title': row['nev'],
            'price': row['ar_usd'],
            'cat': map_cat(row['tipus_id']),
            'image': row['kep_id']
        }
        for row in rows
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
