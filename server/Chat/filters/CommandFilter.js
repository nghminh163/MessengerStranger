// First character is #
import _ from "lodash";
export default class CommandFilter {
  constructor(input, output) {
    this._input = input;
    this._output = output;
  }
  isMatch(userInput) {
    return (
      _.startsWith(userInput, "#") &&
      _.includes(this._input, userInput.substring(1))
    );
  }
  reply(input) {
    return this._output;
  }
}
