import express from 'express';
const router = express.Router()

import platformRoutes from './platforms/index.js'

router.use('/platforms', platformRoutes);

export default router;
