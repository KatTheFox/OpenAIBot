import { curie } from "./commands/curie";

export const commands = new Map<string, typeof curie>();
commands.set(curie.data.name, curie);
