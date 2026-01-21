const pool = require("../config/db");
var express = require('express');
var router = express.Router();
var termekController = require('../controllers/termekController');
const Termek = require("../models/termekModel");

// LAPOZÁS – /api/termekek/paged?page=1&limit=24
router.get("/paged", async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 16;

        let offset = (page - 1) * limit;

        const [rows] = await pool.query(
            "SELECT * FROM view1 LIMIT ? OFFSET ?",
            [limit, offset]
        );

        res.json(rows);

    } catch (err) {
        console.error("Paged lekérdezés hiba:", err);
        res.status(500).json({ error: "Hiba a lapozott lekérdezés során" });
    }
});




// Összes termék
router.get('/', function(req, res, next) {
    termekController.getAll(req, res);
});

// Új termék
router.post('/', function(req, res, next) {
    termekController.create(req, res);
});

// Termék frissítése
router.put('/:id', function(req, res, next) {
    termekController.updateById(req, res);
});

// Termék törlése
router.delete('/:id', function(req, res, next) {
    termekController.deleteById(req, res);
});

// KERESÉS név vagy márka alapján, lapozással
router.get('/search', async (req, res) => {
    const q = req.query.q ? req.query.q.trim().toLowerCase() : "";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 16;
    const offset = (page - 1) * limit;

    if (!q) return res.json([]);

    try {
        // Keresés név vagy márka alapján
        const [rows] = await pool.query(
            `SELECT * FROM view1 WHERE LOWER(Név) LIKE ? OR LOWER(Márka) LIKE ? LIMIT ? OFFSET ?`,
            [`%${q}%`, `%${q}%`, limit, offset]
        );
        res.json(rows);
    } catch (err) {
        console.error("Keresés hiba:", err);
        res.status(500).json({ error: "Hiba a keresés során" });
    }
});

// DINAMIKUS SZŰRÉS
router.post("/filter", async (req, res) => {
    const { category, size, color, brand, priceMin, priceMax } = req.body;

    try {
        const result = await Termek.filter({
            category,
            size,
            color,
            brand,
            priceMin,
            priceMax
        });

        res.json(result);
    } catch (err) {
        console.error("Szűrési hiba:", err);
        res.status(500).json({ error: "Hiba a szűrés során" });
    }
});

/* ÚJ – SZŰRÉS */
router.get('/filter', (req, res) => termekController.filter(req, res));

// PAGINÁLT LEKÉRÉS
router.get("/paged", async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 24;
    let offset = (page - 1) * limit;

    try {
        const [rows] = await pool.query(
            "SELECT * FROM view1 LIMIT ? OFFSET ?",
            [limit, offset]
        );

        res.json(rows);

    } catch (err) {
        console.error("Paged lekérés hiba:", err);
        res.status(500).json({ error: "Hiba a paged lekérés során" });
    }
});

// Dinamikus route-ok a legvégére!
// Termék ID szerint
router.get('/:id', function(req, res, next) {
    termekController.getById(req, res);
});
// Keresés név szerint
router.get('/nev/:nev', function(req, res, next) {
    termekController.getByNev(req, res);
});
// Szűrés típus szerint
router.get('/tipus/:tipus', function(req, res, next) {
    termekController.getByTipus(req, res);
});

module.exports = router;