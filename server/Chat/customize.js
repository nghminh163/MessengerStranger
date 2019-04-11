import CommandFilter from "./filters/CommandFilter";
import { Messenges } from "../const";
import { Text } from "./response";
const help = new CommandFilter(["help"], Messenges.Help);
const test1 = new CommandFilter(["test1"], Messenges.Test.Test1);
const test2 = new CommandFilter(["test2"], Messenges.Test.Test2);
const test3 = new CommandFilter(["test3"], Messenges.Test.Test3);

export default [help, test1, test2, test3];
