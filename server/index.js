import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Default from "./default.js";
const app = express();
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = 9000;
Connection(username, password);
app.listen(PORT, () => {
  console.log("server running");
});
Default();
