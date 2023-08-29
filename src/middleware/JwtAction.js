import Jwt from "jsonwebtoken";
require("dotenv").config();

const createJwt = (payload) => {
  // let payload = { name: "huy", address: "hà nội" };
  let key = process.env.JWT_SECRET;
  let token = null;

  try {
    token = Jwt.sign(payload, key);
    console.log("token:", token);
  } catch (error) {
    console.log(error);
  }

  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let data = null;

  try {
    let decoded = Jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error)
  }
  return data;
};

module.exports = {
  createJwt: createJwt,
  verifyToken: verifyToken
};
