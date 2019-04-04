import cache from "memory-cache";
import _ from "lodash";
import GetUser, { updateStatus } from "./user";
import Pair from "./pair";
export default new class Chatible {
  contructor() {}
  async handle(senderId, pageId, timestamp, text) {
    const status = await this.handleUser(senderId, timestamp, pageId);
    if (status === 0) {
      // await updateStatus(senderId, 1, timestamp);
      // Pair();
    } else if (status === 1) {
      console.log("sended pairing");
    } else {
    }
  }
  handleUser(senderId, timestamp, pageId) {
    return new Promise(async resolve => {
      let status = cache.get(senderId);
      if (_.isNull(status)) {
        status = (await GetUser(senderId, timestamp, pageId)).status;
      }
      resolve(status);
    });
  }
}();
