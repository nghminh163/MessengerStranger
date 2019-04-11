import cache from "memory-cache";
import _ from "lodash";
import GetUser, { Request, getPartnerId, endPairing, endChat } from "./user";
import Pair from "./pair";
import { checkUserCache } from "../store";
import { FbSendMessage } from "../../APIs";
import { Messenges } from "../../const";
export default new class Chatible {
  async handle(senderId, pageId, timestamp, text) {
    const status = await this.handleUser(senderId, timestamp, pageId);
    if (status === 0) {
      await Request(senderId, timestamp);
      FbSendMessage(senderId, Messenges.Request);
      Pair();
    } else if (status === 1) {
      if (text.toLowerCase() === "pp") return endPairing(senderId);
      else return FbSendMessage(senderId, Messenges.Requested);
    } else {
      if (text.toLowerCase() === "pp") return endChat(senderId);
      else return FbSendMessage(getPartnerId(senderId), Text(text));
    }
  }
  handleUser(senderId, timestamp, pageId) {
    return new Promise(async resolve => {
      let status = checkUserCache(senderId);
      if (status === 0) {
        status = (await GetUser(senderId, timestamp, pageId)).status;
      }
      resolve(status);
    });
  }
}();
