"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const commands_1 = require("./commands");
const config_json_1 = require("./config.json");
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
client.once(discord_js_1.Events.ClientReady, (c) => {
    console.log(`Logged in as ${c.user.tag}`);
});
const _ = client.login(config_json_1.tokens.discordtoken);
client.on(discord_js_1.Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }
    if (interaction.command === null) {
        return;
    }
    const command = commands_1.commands.get(interaction.commandName);
    if (command === undefined) {
        console.error(`No command matching ${interaction.commandName} found`);
        return;
    }
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({
            content: "There was an error while executing this command",
            ephemeral: true,
        });
    }
});
//# sourceMappingURL=index.js.map