// backend/controllers/termekController.js
import Termek from '../models/termekModel.js';

const termekController = {};

termekController.getAll = async (req, res) => {
    try {
        const termekLista = await Termek.getAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(termekLista));
    } catch (error) {
        console.error('Hiba a termékek lekérésekor:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Hiba a termékek lekérésekor' }));
    }
};

export default termekController;
