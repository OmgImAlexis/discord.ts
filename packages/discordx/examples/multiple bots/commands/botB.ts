import { Bot, Discord, Slash } from "../../../src/index.js";
import { CommandInteraction } from "discord.js";

@Discord()
@Bot("botB") // A bot id is crucial
export abstract class AppDiscord {
  @Slash("hello")
  root(interaction: CommandInteraction): void {
    interaction.reply("I am bot B.");
  }
}
