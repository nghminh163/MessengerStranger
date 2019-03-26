import CommandFilter from "./filters/CommandFilter";
import { Text } from "./response";
const help = new CommandFilter(["help"], Text("Bạn cần giúp gì vậy ?"));

export default [help];
