require("dotenv").config();
export const VerifyToken = process.env.verify_token || "VerifyToken";
export const PageToken = process.env.page_token || "";
export const MongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/MessengerStranger";
