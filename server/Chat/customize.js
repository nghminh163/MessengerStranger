import CommandFilter from "./filters/CommandFilter";
import ButtonFilter, { Button } from "./filters/ButtonFilter";
import { Messenges } from "../const";
const help = new CommandFilter(["help"], Messenges.Help);
const test1 = new CommandFilter(["test1"], Messenges.Test.Test1);
const test2 = new CommandFilter(["test2"], Messenges.Test.Test2);
const test3 = new CommandFilter(["test3"], Messenges.Test.Test3);

const favChange = new ButtonFilter(["changefav"], Messenges.ChangeFav.Ask, [
  Button("postback", Messenges.ChangeFav.Male, "FAV_MALE"),
  Button("postback", Messenges.ChangeFav.Female, "FAV_FEMALE"),
  Button("postback", Messenges.ChangeFav.Any, "FAV_ANY")
]);
export default [help, test1, test2, test3, favChange];
