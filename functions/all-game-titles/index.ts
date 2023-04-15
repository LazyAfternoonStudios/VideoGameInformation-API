import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import GameTitle from "../models/GameTitle.js"
import "../config/connection.js";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const limit: number = parseInt(req.query.limit as string) || 10;
  const offset: number = (parseInt(req.query.page as string) - 1) * limit || 0;

  try {
    const results = await GameTitle.find({}).limit(limit).skip(offset);

    if (results.length === 0) {
      return context.res.status(204).send();
    }

    return context.res.status(200).json(results);
  } catch (error) {
    console.error(error);
    context.res
      .status(500)
      .json({ message: "An error occurred while searching for game titles" });
  }
};

export default httpTrigger;
