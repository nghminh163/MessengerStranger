import _ from "lodash";
import { Messenges } from "../../const";
import { PairedRoom, WaitingRoom } from "../store";
import { updateUser } from "./user";
import { FbSendMessage } from "../../APIs";

export default () => {
  const WaitingRoomId = WaitingRoom.keys();
  const u1 = WaitingRoomId[0];
  WaitingRoom.keys().forEach((v, i) => {
    if (v !== u1) {
      if (checkUser(u1, v)) {
        pair(u1, v);
      }
    }
  });
};

function checkUser(u1, u2) {
  const dataU1 = WaitingRoom.get(u1);
  const dataU2 = WaitingRoom.get(u2);
  if (_.isNull(dataU1) || _.isNull(dataU2)) return false;
  if (dataU1.favoriteGender !== "any") {
    if (dataU1.favoriteGender !== dataU2.gender) return false;
  }
  if (dataU2.favoriteGender !== "any") {
    if (dataU2.favoriteGender !== dataU1.gender) return false;
  }
  return true;
}

async function pair(u1, u2) {
  WaitingRoom.del(u1);
  WaitingRoom.del(u2);
  await updateUser(u1, { status: 2, partnerId: u2 });
  await updateUser(u2, { status: 2, partnerId: u1 });
  PairedRoom.put(u1, u2);
  PairedRoom.put(u2, u1);
  FbSendMessage(u1, Messenges.Paired);
  FbSendMessage(u2, Messenges.Paired);
}
