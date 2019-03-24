import app from "./app";

require("@babel/polyfill");
require("dotenv").config();

app(process.env.PORT || 3000);
