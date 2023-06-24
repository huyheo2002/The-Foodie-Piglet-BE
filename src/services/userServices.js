import db from "../models";
import bcrypt from "bcryptjs";

const handleUserLogin = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataUser = {};
      let isExits = await checkUsername(username);
      if (isExits) {
        // user already exist
        // compare password
        let user = await db.User.findOne({
          where: { username: username },
          // get foreign key 
          attributes: ["email", "username", "roleId", "password"],
          raw: true,          
        });

        if (user) {
          // bcrypt.compareSync("B4c0/\/", hash);
          // compare password
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            dataUser.errCode = 0;
            dataUser.errMsg = "oke";

            delete user.password;
            dataUser.user = user;
          } else {
            dataUser.errCode = 3;
            dataUser.errMsg = "Wrong password";
          }
        } else {
          dataUser.errCode = 2;
          dataUser.errMsg = "User's not found";
        }
      } else {
        dataUser.errCode = 1;
        dataUser.errMsg =
          "You'r email isn't exist in your system. Pls try other email";
      }
      resolve(dataUser);
    } catch (error) {
      reject(error);
    }
  });
};

const checkUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { username: username },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};
