import { Configuration, OpenAIApi } from "openai";
import { tokens } from "./config.json";

const config = new Configuration({
  organization: "org-a4H6PYCWuvbtKdsnPC48WAVG",
  apiKey: tokens.openaitoken,
});
export const openai = new OpenAIApi(config);
