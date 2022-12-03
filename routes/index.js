import express from 'express';
const router = express.Router()

import platformRoutes from './platforms/index.js'
import gameRoutes from './game/index.js'

router.use('/platforms', platformRoutes);
router.use('/games', gameRoutes);

export default router;
