import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Default from "./default.js";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = 9000;
Connection(username, password);
app.listen(PORT, () => {
  console.log("server running");
});
Default();
