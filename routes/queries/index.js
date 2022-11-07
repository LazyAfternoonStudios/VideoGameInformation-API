import express from 'express';
const router = express.Router()

import platformRoutes from './platforms.js';

router.use('/platforms', platformRoutes);

export default router;