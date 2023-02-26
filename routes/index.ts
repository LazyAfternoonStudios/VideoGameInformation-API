import express, { Router } from 'express';
import platformRoutes from './platforms/index.js';
import gameRoutes from './game/index.js';

const router: Router = express.Router();

router.use('/platforms', platformRoutes);
router.use('/games', gameRoutes);

export default router;
