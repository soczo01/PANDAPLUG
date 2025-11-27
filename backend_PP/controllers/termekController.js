const Termek = require('../models/termekModel');

const termekController = {};

termekController.getAll = async (req, res) => {
    try {
        const termekek = await Termek.getAll();
        res.json(termekek);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

termekController.getById = async (req, res) => {
    try {
        const termek = await Termek.getById(req.params.id);
        if (!termek) return res.status(404).json({ message: 'Termék nem található' });
        res.json(termek);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

termekController.create = async (req, res) => {
    try {
        const result = await Termek.create(req.body);
        res.json({ message: 'Termék sikeresen létrehozva', insertId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

termekController.updateById = async (req, res) => {
    try {
        const result = await Termek.updateById(req.params.id, req.body);
        res.json({ message: 'Termék frissítve', result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

termekController.deleteById = async (req, res) => {
    try {
        const result = await Termek.deleteById(req.params.id);
        res.json({ message: 'Termék törölve', result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Keresés név alapján
termekController.getByNev = async (req, res) => {
    try {
        const termekek = await Termek.getByName(req.params.nev);
        res.json(termekek);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Szűrés kategória/típus szerint
termekController.getByTipus = async (req, res) => {
    try {
        const termekek = await Termek.getByCategory(req.params.tipus);
        res.json(termekek);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

termekController.filter = async (req, res) => {
    try {
        const { tipus, meret, szin, marka, minAr, maxAr } = req.query;

        const termekek = await Termek.filter({
            tipus,
            meret,
            szin,
            marka,
            minAr,
            maxAr
        });

        res.json(termekek);

    } catch (error) {
        console.error("Hiba szűréskor:", error);
        res.status(500).json({ error: "Hiba a szűrés közben" });
    }
};

module.exports = termekController;
