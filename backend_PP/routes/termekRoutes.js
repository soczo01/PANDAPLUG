var express = require('express');
var router = express.Router();
var termekController = require('../controllers/termekController');

// Összes termék
router.get('/', function(req, res, next) {
    termekController.getAll(req, res);
});

// Termék ID szerint
router.get('/:id', function(req, res, next) {
    termekController.getById(req, res);
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

// Keresés név szerint
router.get('/nev/:nev', function(req, res, next) {
    termekController.getByNev(req, res);
});

// Szűrés típus szerint
router.get('/tipus/:tipus', function(req, res, next) {
    termekController.getByTipus(req, res);
});

module.exports = router;
