import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import Platform from "../models/Platform.js";
import "../config/connection.js"

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const count = await Platform.count();
    context.res.set("X-Total-Count", count.toString());
    context.res.status(200).send();
  } catch (err) {
    console.log(err);
    context.res.status(500).json(err);
  }
};

export default httpTrigger;
