// connect to mongodb
import db from "../config/connection.js";
// use the gameData to insertMany
import gameData from "./gameData.js";
import { Game } from "../models/index.js";

db.once("open", async () => {
  try {
    const platforms = await Game.insertMany(gameData);
    console.log("success");
    console.log(platforms);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
});
