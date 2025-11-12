// routes/termekRoutes.js
import express from 'express';
import termekController from '../controllers/termekController.js';

const router = express.Router();

router.get('/', termekController.getAll);

export default router;
