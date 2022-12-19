import { Configuration, OpenAIApi } from "openai";
import { tokens } from "./config.json";

const config = new Configuration({
  apiKey: tokens.openaitoken,
});
export const openai = new OpenAIApi(config);
