import { Client, Events, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import { tokens } from "./config.json";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, (c) => {
    console.log(`Logged in as ${c.user.tag}`);
});
const _ = client.login(tokens.discordtoken);
const config = new Configuration({
    organization: "org-a4H6PYCWuvbtKdsnPC48WAVG",
    apiKey: tokens.openaitoken,
});
const openai = new OpenAIApi(config);
// eslint-disable-next-line isaacscript/no-object-any
const response = await openai.listModels();
console.log(response.data.data);
//# sourceMappingURL=index.js.map