import { Router } from "express";
import _ from "lodash";
import Boom from "boom";
import { VerifyToken } from "../../const";
import BotHandle from "../../Chat";
const router = Router();
router.get("/", (req, res) => {
  const params = req.query;
  if (_.isEmpty(params) || _.isEmpty(params["hub.challenge"]))
    return res.status(400).json(Boom.badRequest("Bad request").output.payload);
  else if (
    _.eq(params["hub.mode"], "subscribe") &&
    (_.eq(params["hub.verify_token"], process.env.VERIFY_TOKEN) ||
      _.eq(params["hub.verify_token"], VerifyToken))
  )
    return res.status(200).send(params["hub.challenge"]);
  return res.status(401).json(Boom.unauthorized("Wrong token").output.payload);
});

router.post("/", (req, res) => {
  const body = req.body;
  if (body.object === "page") {
    body.entry.forEach(function(entry) {
      const webhook_event = entry.messaging[0];
      const senderId = webhook_event.sender.id;
      const pageId = webhook_event.recipient.id;
      const timestamp = webhook_event.timestamp;
      if (webhook_event.message) {
        const text = webhook_event.message.text;
        BotHandle.reply(senderId, pageId, timestamp, text);
      } else if (webhook_event.postback) {
        BotHandle.handlePostback(senderId, webhook_event.postback.payload);
      }
    });
    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.status(404).json(Boom.notFound("Missing").output.payload);
  }
});

export default router;
