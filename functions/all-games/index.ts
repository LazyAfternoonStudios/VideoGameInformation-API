import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import Game from "../models/Game.js";
import "../config/connection.js";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const limit: number = parseInt(req.query.limit as string) || 10;
    const offset: number = parseInt(req.query.page as string) * limit || 0;
    const games = await Game.find({}).limit(limit).skip(offset);
    // if games is empty, return 204
    if (games.length === 0) {
      return context.res.status(204).json();
    }
    // if there are games, return 200
    context.res.status(200).json(games);
  } catch (err) {
    console.log(err);
    context.res.status(500).json(err);
  }
};

export default httpTrigger;
