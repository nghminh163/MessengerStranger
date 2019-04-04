import app from "./app";
require("@babel/polyfill");

app(process.env.PORT || 3000);
