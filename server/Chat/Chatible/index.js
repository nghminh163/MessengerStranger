import cache from "memory-cache";
import _ from "lodash";
import GetUser, { Request } from "./user";
import Pair from "./pair";
import { PairedRoom, checkUserCache } from "../store";
import { FbSendMessage } from "../../APIs";
import { Text } from "../response/";
import { Messenges } from "../../const";
export default new class Chatible {
  async handle(senderId, pageId, timestamp, text) {
    const status = await this.handleUser(senderId, timestamp, pageId);
    if (status === 0) {
      await Request(senderId, timestamp);
      FbSendMessage(senderId, Text(Messenges.Request));
      Pair();
    } else if (status === 1) {
      FbSendMessage(senderId, Text(Messenges.Requested));
    } else {
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
