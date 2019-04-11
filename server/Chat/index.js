import customize from "./customize";
import { FbSendMessage } from "../APIs/";
import _ from "lodash";
import Chatible from "./Chatible";
import { changeFavGender } from "./Chatible/user";
export default new class BotHandle {
  checkFilter(input) {
    for (var filter of customize) {
      if (filter.isMatch(input)) {
        return filter.reply(input);
      }
    }
  }
  async reply(senderId, pageId, timestamp, text) {
    const filterReply = this.checkFilter(text);
    if (_.isUndefined(filterReply)) {
      Chatible.handle(senderId, pageId, timestamp, text);
    } else {
      FbSendMessage(senderId, filterReply);
    }
  }
  handlePostback(senderId, payload) {
    switch (payload) {
      case "FAV_MALE":
        return changeFavGender(senderId, "male");
      case "FAV_FEMALE":
        return changeFavGender(senderId, "female");
      case "FAV_ANY":
        return changeFavGender(senderId, "any");
    }
  }
}();
