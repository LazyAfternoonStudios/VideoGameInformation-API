import express from 'express';
const router = express.Router()

import queryRoutes from './queries/index.js';
import mutationRoutes from './mutations/index.js';

router.use('/query', queryRoutes);
router.use('/mutate', mutationRoutes);

export default router;
