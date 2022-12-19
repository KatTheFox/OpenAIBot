import {
  REST,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import { commands } from "./commands";
import { curie } from "./commands/curie";
import { tokens } from "./config.json";

const commandJson: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
for (const i of commands.values()) {
  commandJson.push(i.data.toJSON());
}
const rest = new REST({ version: "10" }).setToken(tokens.discordtoken);
const _ = (async () => {
  try {
    console.log(`Started refreshing ${commands.size} application commands`);
    const _ = await rest.put(
      Routes.applicationGuildCommands(tokens.appid, "938905066709086208"),
      {
        body: [curie.data],
      },
    );

    console.log("Succesfully refreshes commands");
  } catch (e) {
    console.error(e);
  }
})();
