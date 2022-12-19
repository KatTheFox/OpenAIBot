/* eslint-disable isaacscript/complete-sentences-line-comments */
import { Client, Events, GatewayIntentBits } from "discord.js";
import { commands } from "./commands";
import { tokens } from "./config.json";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});
const _ = client.login(tokens.discordtoken);

// (async () => console.log(await (await openai.listModels()).data))();

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    console.log("interaction not command");
    return;
  }
  const command = commands.get(interaction.commandName);
  if (command === undefined) {
    console.error(`No command matching ${interaction.commandName} found`);
    return;
  }
  try {
    console.log("command try");
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command",
      ephemeral: true,
    });
  }
});
