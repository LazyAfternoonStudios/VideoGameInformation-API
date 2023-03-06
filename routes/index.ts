import express, { Router } from 'express';
import platformRoutes from './platforms/index.js';
import gameRoutes from './game/index.js';
import gameTitleRoutes from './gameTitles/index.js';

const router: Router = express.Router();

router.use('/platforms', platformRoutes);
router.use('/games', gameRoutes);
router.use('/game-titles', gameTitleRoutes);

export default router;
