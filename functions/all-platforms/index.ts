import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import Platform from "../models/Platform.js";
import "../config/connection.js"

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const platforms = await Platform.find({});
    // if platforms is empty, return 204
    if (platforms.length === 0) {
      return context.res.status(204).json();
    }
    // if there are platforms, return 200
    context.res.status(200).json(platforms);
  } catch (err) {
    console.log(err);
    context.res.status(500).json(err);
  }
};

export default httpTrigger;
