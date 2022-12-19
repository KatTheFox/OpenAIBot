import {
  REST,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import { commands } from "./commands";
import { tokens } from "./config.json";

const commandJson: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
for (const i of commands.values()) {
  commandJson.push(i.data.toJSON());
}
const rest = new REST({ version: "10" }).setToken(tokens.discordtoken);

try {
  console.log(`Started refreshing ${commands.size} application commands`);
  const _ = await rest.put(Routes.applicationCommands(tokens.appid), {
    body: commands,
  });

  console.log("Succesfully refreshes commands");
} catch (e) {
  console.error(e);
}
