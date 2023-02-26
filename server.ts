import db from './config/connection.js';
import express, { Application } from 'express';

import routes from './routes/index.js';

const PORT: number = parseInt(process.env.PORT ?? '3001');
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
