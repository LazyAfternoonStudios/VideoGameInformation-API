import express from 'express';
const router = express.Router()

import platformRoutes from './platforms/index.js'

// TODO: Make routes semantic like /games, /platforms, /companies, etc.
// Currently routes are divided into queries and mutations

router.use('/platforms', platformRoutes);

export default router;
