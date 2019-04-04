import express from "express";
import bodyParser from "body-parser";

import { Webhook } from "./routes";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ extended: true }));

app.get("/ping", (req, res) => res.send("pong"));

app.use("/webhook", Webhook);
function runServer(port = 3000, done) {
  app.listen(port, async err => {
    if (err) throw err;
    console.log(`Listening at port ${port}`);
    if (done) done();
  });
}

export default runServer;
