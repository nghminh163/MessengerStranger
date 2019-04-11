import { MongoUri, MongoDbName, Messenges, Timeout } from "../../const";
import { MongoClient } from "mongodb";
import _ from "lodash";
import { FbGetUserData, FbSendMessage } from "../../APIs";
import { PairedRoom, WaitingRoom } from "../store";
import { Text } from "../response/";
function createUser(senderId, timestamp, pageId) {
  return new Promise(async resolve => {
    const FbUserData = await FbGetUserData(senderId);
    MongoClient.connect(MongoUri, { useNewUrlParser: true }).then(conn => {
      let json = {
        _id: FbUserData.id,
        first_name: FbUserData.first_name,
        last_name: FbUserData.last_name,
        profile_pic: FbUserData.profile_pic,
        status: 0, //0 not, 1 paired
        partnerId: null,
        timerequest: null,
        pageIdFrom: pageId,
        timeStart: timestamp,
        gender: FbUserData.gender,
        favoriteGender: "any"
      };
      return conn
        .db(MongoDbName)
        .collection("Users")
        .insertOne(json)
        .then(() => {
          resolve(json);
          conn.close();
        })
        .catch(err => console.log(err));
    });
  });
}

function getUser(senderId) {
  return new Promise(resolve => {
    MongoClient.connect(MongoUri, { useNewUrlParser: true }).then(conn => {
      return conn
        .db(MongoDbName)
        .collection("Users")
        .findOne({
          _id: senderId
        })
        .then(res => {
          conn.close();
          resolve(res);
        })
        .catch(err => console.log(err));
    });
  });
}

export function updateUser(senderId, data) {
  return new Promise(resolve => {
    MongoClient.connect(MongoUri, { useNewUrlParser: true }).then(conn => {
      return conn
        .db(MongoDbName)
        .collection("Users")
        .updateOne(
          {
            _id: senderId
          },
          {
            $set: data
          }
        )
        .then(res => {
          conn.close();
          resolve(res);
        })
        .catch(err => console.log(err));
    });
  });
}

export default (senderId, timestamp, pageId) => {
  return new Promise(async resolve => {
    let dataUser = await getUser(senderId);
    if (_.isNull(dataUser)) {
      dataUser = await createUser(senderId, timestamp, pageId);
    } else {
      if (dataUser.status === 1) {
        PairedRoom(senderId, dataUser.partnerId);
        PairedRoom(dataUser.partnerId, senderId);
      }
    }
    resolve(dataUser);
  });
};

export async function Request(senderId, timestamp) {
  const userData = await getUser(senderId);
  WaitingRoom.put(
    senderId,
    {
      gender: userData.gender,
      favoriteGender: userData.favoriteGender
    },
    Timeout,
    () => {
      FbSendMessage(senderId, Text(Messenges.Timeout));
    }
  );
}
