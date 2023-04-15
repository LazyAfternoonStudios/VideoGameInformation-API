import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import GameTitle from "../models/GameTitle.js"
import "../config/connection.js";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const title: string = req.params.title;

  try {
    const results = await GameTitle.findOne({title: title});

    if (!results) {
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
