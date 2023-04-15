import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import GameTitle from "../models/GameTitle.js"
import "../config/connection.js";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const platform: string = req.query.platform as string;
  const limit: number = parseInt(req.query.limit as string) || 10;
  const offset: number = (parseInt(req.query.page as string) - 1) * limit || 0;
  if (!platform) {
    return context.res.status(400).json({ message: "Search query is missing" });
  }

  const regex = new RegExp(platform, "i");

  try {
    // search for game titles that have the platform in their platforms array
    const results = await GameTitle.find({ platforms: regex })
      .limit(limit)
      .skip(offset);

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
