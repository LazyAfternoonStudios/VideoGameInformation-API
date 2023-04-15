import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import Game from "../models/Game.js";
import "../config/connection.js";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { title } = req.params;
  try {
    const games = await Game.findOne({ title: title });
    // if games is empty, return 204
    if (games === null) {
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
