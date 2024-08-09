require("dotenv").config();
import db from "./models";
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPass = await bcrypt.hashSync(password, salt);
      resolve(hashPass);
    } catch (error) {
      reject(error);
    }
  });
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log("profile", profile);
      if (profile?.id) {
        let hashPasswordFromBcrypt = await hashPassword(profile.id);
        const userData = {
          email: profile.emails && profile.emails[0]?.value,
          username: profile.emails[0]?.value,
          name: profile.displayName,
          password: hashPasswordFromBcrypt,
        };

        try {
          const [user, created] = await db.User.findOrCreate({
            where: {
              email: profile.emails[0]?.value,
            },
            defaults: userData,
          });

          if (created) {
            console.log("User created:", user.get());
          } else {
            console.log("User already exists:", user.get());
          }

          return cb(null, profile);
        } catch (error) {
          console.error("Error creating or finding user:", error);
          return cb(error, null);
        }
      }
      return cb(null, profile);
    }
  )
);
