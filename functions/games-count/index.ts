import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import Game from "../models/Game.js";
import "../config/connection.js"

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const count = await Game.count();
    context.res.set("X-Total-Count", count.toString());
    context.res.status(200).send();
  } catch (err) {
    console.log(err);
    context.res.status(500).json(err);
  }
};

export default httpTrigger;
