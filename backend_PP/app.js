const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Statikus képek kiszolgálása
app.use('/images', express.static(path.join(__dirname, 'public/images')));


// DB kapcsolat
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pandaplug1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

// Termékek lekérése
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM view1');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Hiba a termékek lekérésekor' });
  }
});

// Server indítása
const PORT = 8080;
app.listen(PORT, () => console.log(`Server fut a ${PORT} porton`));
module.exports = app;