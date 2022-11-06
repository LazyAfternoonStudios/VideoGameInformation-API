import express from 'express';
const router = express.Router()

// add a new game
router.post('/addGame', async (req, res) => {
    const gameTitle = req.body.title; // String
    const platforms = req.body.platforms; // array of strings
    const ageRatings = req.body.ageRatings; // array of objects
    const releaseDates = req.body.releaseDates; // array of objects
    const developers = req.body.developers; // array of strings
    const publishers = req.body.publishers; // array of strings
    const genres = req.body.genres; // array of strings
    const gameModes = req.body.gameModes; // array of strings
    const series = req.body.series; // String
    const credits = req.body.credits; // array of objects

    const responseMessage = `
    The game ${gameTitle} has been added to the database for the following platforms:
    ${platforms.map(element => {
        return `-${element}`;
    })}

    The game ${gameTitle} has been added to the database for the following age ratings:
    ${ageRatings.map(element => {
        return `-${element.title}: ${element.rating}`;
    })}
    The game ${gameTitle} has been added to the database for the following release dates:
    ${releaseDates.map(element => {
        return `-${element.date} - ${element.title}`;
    })}
    The game ${gameTitle} has been added to the database for the following developers:
    ${developers.map(element => {
        return `-${element}`;
    })}
    The game ${gameTitle} has been added to the database for the following publishers:
    ${publishers.map(element => {
        return `-${element}`;
    })}
    The game ${gameTitle} has been added to the database for the following genres:
    ${genres.map(element => {
        return `-${element}`;
    })}
    The game ${gameTitle} has been added to the database for the following game modes:
    ${gameModes.map(element => {
        return `-${element}`;
    })}
    The game ${gameTitle} has been added to the database in the ${series} series.
    Finally, here are the credits for the game ${gameTitle}:
    ${credits.map(element => {
        const formattedText = `
            ${element.title}
            ${element.entries.map(entry => {
                return `-${entry}`;
            })}
        `;
        return formattedText;
    })}

    `

    res.send(responseMessage);
})

export default router;