import db from "../models";
import bcrypt from "bcryptjs";
import jwtAction from "../middleware/JwtAction";
const fs = require("fs");
require("dotenv").config();
const salt = bcrypt.genSaltSync(10);
import generateUniqueId from "../utils/uniqueName";
import sendMail from "../sendMail";

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

const comparePassword = async (inputPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compareSync(inputPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const userLogin = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataUser = {};
      let isExits = await checkUsername(username);
      if (isExits) {
        // user already exist
        // compare password
        let user = await db.User.findOne({
          where: { username: username },
          include: [
            {
              model: db.sequelize.models.Role,
              attributes: ["name"],
            },
          ],

          // get foreign key
          // chỉ lấy các trường trong attributes
          // attributes: ["email", "username", "roleId", "password"],

          // attributes: {
          //   exclude: ["password"]
          // },
          // raw: true,
        });

        if (user) {
          if (user.dataValues.Role.name) {
            user.dataValues.roleName = user.dataValues.Role.name;
            delete user.dataValues.Role;
          }

          let permissions = await db.RolePermission.findAll({
            where: { roleId: user.roleId },
            include: [
              {
                model: db.sequelize.models.Permission,
                attributes: ["name", "permissionGroupId"],
              },
            ],
          });

          // compare password
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            dataUser.errCode = 0;
            dataUser.errMsg = "oke";
            delete user.password;

            let payload = {
              user: user,
              permissions: permissions,
              expiresIn: process.env.JWT_EXPIRES_IN,
            };
            let token = jwtAction.createJwt(payload);
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

const userLoginGoogleSuccess = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataUser = {};
      let user = await db.User.findOne({
        where: { email: email },
      });
      if (!user) {
        dataUser.errCode = 1;
        dataUser.message = "Login fail";

        resolve(dataUser);
      }

      // jwt
      let payload = {
        user: user,
        expiresIn: process.env.JWT_EXPIRES_IN,
      };
      let token = jwtAction.createJwt(payload);
      dataUser.accessToken = token;
      dataUser.errCode = 0;
      dataUser.message = "Login success";

      resolve(dataUser);
    } catch (error) {
      reject(error);
    }
  });
};

const userRegister = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check username is exits
      let isExits = await checkUsername(data.username);
      if (isExits === true) {
        resolve({
          errCode: 1,
          message:
            "Your username is already in used, Please try another username",
        });
      }

      if (data.confirmPassword !== data.password) {
        resolve({
          errCode: 2,
          message: "Your password is not duplicate, please re-enter",
        });
      }

      let hashPasswordFromBcrypt = await hashPassword(data.password);
      await db.User.create({
        name: data.username,
        email: data.email,
        username: data.username,
        password: hashPasswordFromBcrypt,
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

const changePassword = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let user = await db.User.findByPk(idPrim);

      if (user) {
        let isPasswordValid = comparePassword(data.oldPassword, user.password);
        if (isPasswordValid) {
          if (data.newPassword !== data.confirmPassword) {
            resolve({
              errCode: 3,
              message: "Password does not match, please check again",
            });
          } else {
            let hashPasswordFromBcrypt = await hashPassword(data.newPassword);
            await user.update({
              password: hashPasswordFromBcrypt || data.password,
            });

            resolve({
              errCode: 0,
              message: "Ok",
              user: user,
            });
          }
        } else {
          resolve({
            errCode: 4,
            message: "Invalid password, please re-enter",
          });
        }
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

const forgotPassword = async (data) => {
  return new Promise(async (resolve, reject) => {
    console.log("data services", data);
    try {
      if (!data) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      let checkEmail = await db.User.findOne({
        where: {
          email: data.email,
          username: data.username,
        },
      });

      console.log("checkEmail", checkEmail);

      if (checkEmail) {
        let payload = {
          infoUser: checkEmail,
          expiresIn: process.env.JWT_EXPIRES_IN,
        };
        let token = jwtAction.createJwt(payload);

        console.log("token", token);
        let emailReceive = data.email;
        let title = `Quên mật khẩu`;
        const html = `Xin vui lòng click vào đây để thay đổi mật khẩu: <a href="${process.env.URL_CLIENT}/reset-password/${token}">Click here</a>`;
        // khi muốn gửi mail refresh token + mở comment :v
        await sendMail(emailReceive, title, "", html);

        console.log("emailReceive", emailReceive);
        resolve({
          errCode: 0,
          message: "Allow reset password",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Email doesn't exist",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const resetPassword = async (data) => {
  return new Promise(async (resolve, reject) => {
    console.log("data reset Password", data);
    try {
      if (!data) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      let checkEmail = await db.User.findOne({
        where: {
          email: data.email,
          username: data.username,
        },
      });

      if (checkEmail) {
        let newPassword = generateUniqueId();
        console.log("newPassword", newPassword);
        let hashPasswordFromBcrypt = await hashPassword(newPassword);
        await checkEmail.update({
          password: hashPasswordFromBcrypt,
        });

        let emailReceive = data.email;
        let title = `Reset mật khẩu`;
        const html = `Mật khẩu mới của bạn là: ${newPassword} vui lòng vào lại trang chủ để kiểm tra lại! <a href="${process.env.URL_CLIENT}/login">Click here</a>`;
        // khi muốn gửi mail refresh token + mở comment :v
        await sendMail(emailReceive, title, "", html);

        resolve({
          errCode: 0,
          message: "Reset password success",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Email doesn't exist",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  userLogin: userLogin,
  userLoginGoogleSuccess: userLoginGoogleSuccess,
  userRegister: userRegister,
  changePassword: changePassword,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword,
};
