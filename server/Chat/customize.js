import CommandFilter from "./filters/CommandFilter";
import cache from "memory-cache";

import { Text } from "./response";
const help = new CommandFilter(
  ["help"],
  Text('Hãy nhắn 1 kí tự nào đó để bắt đầu và kết thúc lại bằng "pp" nhé')
);

export default [help];
