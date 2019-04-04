import { MongoUri } from "../../const";
import { MongoClient } from "mongodb";
import _ from "lodash";
import { FbGetUserData } from "../../APIs";
import cache from "memory-cache";
function createUser(senderId, timestamp, pageId) {
  return new Promise(async resolve => {
    const FbUserData = await FbGetUserData(senderId);
    MongoClient.connect(MongoUri, { useNewUrlParser: true }).then(conn => {
      let json = {
        _id: FbUserData.id,
        first_name: FbUserData.first_name,
        last_name: FbUserData.last_name,
        profile_pic: FbUserData.profile_pic,
        status: 0, //0 not, 1 pending, 2 paired
        partnerId: null,
        timerequest: null,
        pageIdFrom: pageId,
        timeStart: timestamp,
        gender: FbUserData.gender,
        favoriteGender: 0 //0 any, 1 male, 2 female
      };
      return conn
        .db("MessengerStranger")
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
        .db("MessengerStranger")
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
export default (senderId, timestamp, pageId) => {
  return new Promise(async resolve => {
    let dataUser = await getUser(senderId);
    if (_.isNull(dataUser)) {
      dataUser = await createUser(senderId, timestamp, pageId);
      cache.put(senderId, 0);
    } else {
      cache.put(
        senderId,
        dataUser.status !== 2 ? dataUser.status : dataUser.partnerId
      );
    }
    resolve(dataUser);
  });
};

export function updateStatus(senderId, status, timestamp) {
  return MongoClient.connect(MongoUri, { useNewUrlParser: true }).then(conn => {
    return conn
      .db("MessengerStranger")
      .collection("Users")
      .updateOne(
        {
          _id: senderId
        },
        {
          $set: {
            status: status,
            timerequest: timestamp
          }
        }
      )
      .then(() => {
        conn.close();
        cache.put(senderId, status);
      })
      .catch(err => console.log(err));
  });
}
