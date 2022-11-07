import express from 'express';
const router = express.Router()
import {Game} from '../../models/index.js';

// add a new game
router.post('/addGame', async (req, res) => {

    try {
        const newGame = await Game.create({
            title: req.body.title,
            platforms: req.body.platforms,
            ageRatings: req.body.ageRatings,
            releaseDates: req.body.releaseDates,
            developers: req.body.developers,
            publishers: req.body.publishers,
            genres: req.body.genres,
            gameModes: req.body.gameModes,
            series: req.body.series,
            credits: req.body.credits
        });

        res.status(200).json(newGame);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

export default router;