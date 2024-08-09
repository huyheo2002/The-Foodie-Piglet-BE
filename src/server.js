import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connect from "./config/connectDB";
import * as socket from "./socket/socketManager";

require("./passport");
require("dotenv").config();
const cors = require("cors");
const app = express();

// config app
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

// connect to DB
connect();

let port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("backend nodejs server listen is running on the port: ", port);
});

socket.initSocket(server);
