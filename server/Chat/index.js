import customize from "./customize";
import { FbSendMessage } from "../APIs/";
import _ from "lodash";
import Chatible from "./Chatible";
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
}();
