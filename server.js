import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}: http://localhost:${PORT}`);
});