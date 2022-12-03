// connect to mongodb
import db from "../config/connection.js";
// use the gameData to insertMany
import gameData from "./gameData.js";
import platformData from "./platformData.js";
import { Game, Platform } from "../models/index.js";

db.once("open", async () => {
  try {
    await Game.deleteMany({});
    await Platform.deleteMany({});

    const games = await Game.insertMany(gameData);
    console.log("successfully seeded Games");
    console.log(games);

    const platforms = await Platform.insertMany(platformData);
    console.log("successfully seeded Platforms");
    console.log(platforms);

    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
});
