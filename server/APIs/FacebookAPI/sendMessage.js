import rp from "request-promise";
import { PageToken } from "../../const";
export default (senderId, data) => {
  rp({
    uri: "https://graph.facebook.com/v2.6/me/messages",
    qs: {
      access_token: PageToken
    },
    method: "POST",
    json: true,
    body: {
      recipient: {
        id: senderId
      },
      message: data
    }
  }).catch(err => console.log(err));
};
