import db from "../models";
import bcrypt from "bcryptjs";
import jwtAction from "../middleware/JwtAction";
require("dotenv").config();
const salt = bcrypt.genSaltSync(10);

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
          // chỉ lấy các trường trong attributes
          // attributes: ["email", "username", "roleId", "password"],

          // attributes: {
          //   exclude: ["password"]
          // },
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

            // jwt
            let payload = {
              user: user,
              expiresIn: process.env.JWT_EXPIRES_IN
            }
            let token = jwtAction.createJwt(payload)
            dataUser.accessToken = token;
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

      console.log("dataUser: ", dataUser)
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

const getAllUsersCompact = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "all") {
        users = await db.User.findAll({
          attributes: {
            exclude: [
              "password",
              "address",
              "createdAt",
              "updatedAt",
              "gender",
              "phone",
              "avatar",
            ],
          },
        });
      } else if (userId && userId !== "all") {
        users = db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: [
              "password",
              "address",
              "createdAt",
              "updatedAt",
              "gender",
              "phone",
              "avatar",
            ],
          },
        });
      } else {
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "all") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      } else if (userId && userId !== "all") {
        users = db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      } else {
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

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

const createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check username is exits
      let isExits = await checkUsername(data.username);
      // console.log("isExits", isExits)
      if (isExits === true) {
        resolve({
          errCode: 1,
          message:
            "Your username is already in used, Please try another username",
        });
      }

      let hashPasswordFromBcrypt = await hashPassword(data.password);
      await db.User.create({
        name: data.name,
        email: data.email,
        username: data.username,
        password: hashPasswordFromBcrypt,
        phone: data.phone,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve({
        errCode: 0,
        message: "Ok",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // let hashPasswordFromBcrypt;
      // if (data.password) {
      //   hashPasswordFromBcrypt = await hashPassword(data.password);
      // }
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      // let user = await db.User.findOne({
      //   where: { id: data.id },
      //   raw: false,
      // });
      const idPrim = data.id;
      let user = await db.User.findByPk(idPrim);
      if (user) {
        await user.update({
          name: data.name,
          email: data.email,
          username: data.username,
          // password: hashPasswordFromBcrypt || data.password,
          phone: data.phone,
          address: data.address,
          gender: data.gender,
          roleId: data.roleId,
          avatar: data.avatar,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          user: user,
        });
      } else {
        resolve({
          errCode: 1,
          message: "User not found",
        });
      }
            
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMsg: "The user isn't exits",
        });
      }

      await db.User.destroy({
        where: { id: userId },
      });

      resolve({
        errCode: 0,
        message: "The user is deleted",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const userLoginGoogleSuccess = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("vaiz mèm :v")
      let user = await db.User.findOne({
        where: { email: email },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMsg: "The user isn't exits",
        });
      }      

      resolve({
        errCode: 0,
        message: "Login success",
        user: user
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  getAllUsersCompact: getAllUsersCompact,
  editUser: editUser,
  deleteUser: deleteUser,
  userLoginGoogleSuccess: userLoginGoogleSuccess,
};
