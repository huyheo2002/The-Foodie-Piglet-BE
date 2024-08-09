import Jwt from "jsonwebtoken";
require("dotenv").config();

const createJwt = (payload) => {
  let key = process.env.JWT_SECRET;
  let token = null;

  try {
    token = Jwt.sign(payload, key);
  } catch (error) {
    console.log(error);
  }

  return token;
};

const verifyToken = (token) => {
  if (!token) {
    return null;
  }

  let key = process.env.JWT_SECRET;
  let data = null;

  try {
    let decoded = Jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error);
  }

  return data;
};

module.exports = {
  createJwt: createJwt,
  verifyToken: verifyToken,
};
