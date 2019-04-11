// Butotn data
import _ from "lodash";
import { Button as BtnResp } from "../response/";
export const Button = (type, title, data) => ({
  type,
  title,
  data
});
export default class ButtonFilter {
  constructor(input, text, buttons) {
    this._input = input;
    this._text = text;
    this._buttons = buttons;
  }
  parseButtons(buttons) {
    return buttons.map(btn => this.button(btn.type, btn.title, btn.data));
  }
  isMatch(input) {
    return _.includes(this._input, input);
  }
  button(type, title, data) {
    switch (type) {
      case "web_url":
        return {
          type: title,
          url: data,
          title: title
        };
      case "postback":
        return {
          type: "postback",
          title: title,
          payload: data
        };
    }
  }
  reply(input) {
    return BtnResp(this._text, this.parseButtons(this._buttons));
  }
}
