import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connect from "./config/connectDB";
// import jwtAction from "./middleware/JwtAction";
import sendMail from "./sendMail";

require("./passport");
require("dotenv").config();
const cors = require('cors');
const app = express();

// config app 
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// test jwt
// jwtAction.createJwt()
// let decoded = jwtAction.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHV5IiwiYWRkcmVzcyI6ImjDoCBu4buZaSIsImlhdCI6MTY5MzMwMzk1OH0.gVIZZ9KRVxdf-kLXNHmlJX7q-zneShsNzHjYKNEfKD8")
// console.log("decoded server:", decoded)

// test send mail
sendMail();

viewEngine(app);
initWebRoutes(app);

connect();

// lấy tham số trong env sd process.env (sd thư viện dotenv)
// PORT === undefined => port = 3000 
let port = process.env.PORT || 3000;

// app.use((req, res) => {
//     return res.send("404 not found")
// })
app.listen(port, () => {
    console.log("backend nodejs is running on the port: ", port)    
});