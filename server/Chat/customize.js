import CommandFilter from "./filters/CommandFilter";
import { Messenges } from "../const";
import { Text } from "./response";
const help = new CommandFilter(["help"], Text(Messenges.Help));
const test1 = new CommandFilter(["test1"], Text(Messenges.Test.Test1));
const test2 = new CommandFilter(["test2"], Text(Messenges.Test.Test2));
const test3 = new CommandFilter(["test3"], Text(Messenges.Test.Test3));

export default [help, test1, test2, test3];
