const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');




const app = express();
app.use(cors()); // minden domaint engedünk, ideiglenesen
app.use(express.json());

// DB kapcsolat
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pandaplug1'
});

// API endpoint termékekhez
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM termekek'); // tábla neve a képen
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Hiba a termékek lekérésekor' });
  }
});

// server indítása
const PORT = 5000;
app.listen(PORT, () => console.log(`Server fut a ${PORT} porton`));
