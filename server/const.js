require("dotenv").config();
export const VerifyToken = process.env.verify_token || "VerifyToken";
export const PageToken = process.env.page_token || "";
export const MongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/MessengerStranger";
export const MongoDbName =
  process.env.MONGODB_DBNAME || require("parse-mongo-url")(MongoUri).name;
export const Timeout = 300 * 10e2;
import { Text } from "./Chat/response";

export const Messenges = {
  Timeout: Text("Đã hết 5 phút rồii"),
  Help: Text(
    'Hãy nhắn 1 kí tự nào đó để bắt đầu và kết thúc lại bằng "pp" nhé'
  ),
  Paired: Text(
    "2 bạn đã được ghép đôi với nhau, hãy chào nhau để bắt đầu cuộc trò chuyện nhée"
  ),
  Request: Text(
    "Vui lòng đợi một chút để chúng mình tìm cho bạn 1 người trò chuyện phù với nhé. Sau 5 phút chúng mình sẽ hủy tìm kiếm để tránh hiện tượng bơ tin nhắn nhau nhé"
  ),
  Requested: Text(
    "Hmm đợi 1 chút nào chúng mình đã gửi yêu cầu tìm bạn của cậu rồi đấy"
  ),
  Test: {
    Test1: Text("test1"),
    Test2: Text("test2"),
    Test3: Text("test3")
  },
  EndPair: Text(
    "Chúng mình đã hủy tìm kiếm nhé. Vui lòng nhắn 1 thứ gì đó để tìm bạn nhé"
  ),
  EndChatReq: Text("Bạn đã dừng cuộc trò chuyện"),
  EndChatReqP: Text("Bạn đã bị dừng cuộc trò chuyện")
};
