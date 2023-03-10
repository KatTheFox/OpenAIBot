import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { openai } from "../openai";

export const curie = {
  data: new SlashCommandBuilder()
    .setName("curie")
    .setDescription("Queries the GPT-3 Curie model")
    .addStringOption((option) =>
      option
        .setName("input")
        .setRequired(true)
        .setDescription("The text to query Curie with"),
    ),
  execute: async (interaction: ChatInputCommandInteraction): Promise<void> => {
    console.log(
      `curie execute ${interaction.options.getString("input", true)}`,
    );
    await openai
      .createCompletion({
        model: "text-curie:001",
        prompt: interaction.options.getString("input", true),
        max_tokens: 10,
      })
      .then(async (reesponse) => {
        console.log("response recieved");
        const response = reesponse.data;
        const _ = await interaction.reply({ content: response.object });
      })
      .catch(async (reason) => {
        console.error(reason);
        const _ = await interaction.reply({
          content: `There was an error connecting to OpenAI servers. Error details: ${reason}`,
        });
      });
  },
};
