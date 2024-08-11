import Jwt from "jsonwebtoken";
require("dotenv").config();

const createJwt = (payload) => {
  const key = process.env.JWT_SECRET;

  if (!key) {
    console.error("JWT_SECRET is not defined in environment variables.");
    return null;
  }

  try {
    const token = Jwt.sign(payload, key);
    return token;
  } catch (error) {
    console.error("Error creating JWT:", error);
    return null;
  }
};

const verifyToken = (token) => {
  if (!token) {
    console.error("No token provided for verification.");
    return null;
  }

  const key = process.env.JWT_SECRET;

  if (!key) {
    console.error("JWT_SECRET is not defined in environment variables.");
    return null;
  }

  try {
    const decoded = Jwt.verify(token, key);
    return decoded;
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return null;
  }
};

module.exports = {
  createJwt: createJwt,
  verifyToken: verifyToken
};
