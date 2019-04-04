import rp from "request-promise";
import { PageToken } from "../../const";
export default senderId =>
  new Promise(resolve => {
    rp({
      uri: `https://graph.facebook.com/v3.2/${senderId}`,
      qs: {
        access_token: PageToken,
        fields: "first_name,last_name,profile_pic,gender"
      },
      method: "GET",
      json: true
    })
      .then(data => resolve(data))
      .catch(err => console.log(err));
  });
