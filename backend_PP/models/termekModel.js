import pool from '../config/db.js';

const Termek = {};

Termek.getAll = async () => {
  const [rows] = await pool.query(`
    SELECT 
      t.id AS id,
      t.nev AS title,
      t.ar_usd AS price,
      tp.tipus AS cat,
      sz.szin AS color,
      m.meret AS size,
      e.statusz AS statusz
    FROM termekek t
    JOIN tipus tp ON t.tipus_id = tp.id
    JOIN szin sz ON t.szin_id = sz.id
    JOIN meret m ON t.meret_id = m.id
    JOIN elerhetoseg e ON t.elerhetoseg_id = e.id
  `);
  return rows;
};

export default Termek;
