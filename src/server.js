import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connect from "./config/connectDB";
require("dotenv").config();
const cors = require('cors');
let app = express();

// config app 
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);

connect();

// lấy tham số trong env sd process.env (sd thư viện dotenv)
let port = process.env.PORT || 3000;
// PORT === undefined => port = 3000 
app.listen(port, () => {
    console.log("backend nodejs is running on the port: ", port)    
});