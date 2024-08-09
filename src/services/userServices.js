import db from "../models";
import bcrypt from "bcryptjs";
const fs = require("fs");
require("dotenv").config();
const salt = bcrypt.genSaltSync(10);
import generateUniqueId from "../utils/uniqueName";

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
          include: [
            {
              model: db.sequelize.models.Role,
              attributes: ["name"],
            },
          ],
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
          include: [
            {
              model: db.sequelize.models.Role,
              attributes: ["name"],
            },
          ],
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
          include: [
            {
              model: db.sequelize.models.Role,
              attributes: ["name"],
            },
          ],
        });
      } else if (userId && userId !== "all") {
        users = db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
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

const createNewUser = (data, avatar) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isExits = await checkUsername(data.username);
      if (isExits === true) {
        resolve({
          errCode: 1,
          message:
            "Your username is already in used, Please try another username",
        });
      }

      let nameImage = null;
      if (avatar) {
        let binaryData = avatar.buffer;
        nameImage = generateUniqueId() + avatar.originalname || "data.bin";
        let filePath = `src/public/images/avatar/${nameImage}`;
        fs.writeFile(filePath, binaryData, "binary", (err) => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log("File saved successfully:", filePath);
          }
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
        avatar: nameImage,
      });

      // notify
      if (data.originatorId) {
        let userNotify = await db.User.findByPk(data.originatorId);

        if (userNotify) {
          let getRole = await db.Role.findOne({
            where: {
              id: userNotify.roleId,
            },
          });

          await db.Notification.create({
            title: "Tạo tài khoản mới",
            message: `${userNotify.name || userNotify.username} (${
              getRole ? getRole.name : ""
            }) đã tạo tài khoản mới với username: ${data.username}.`,
            userId: data?.originatorId,
          });
        }
      }

      resolve({
        errCode: 0,
        message: "Ok",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const editUser = (data, newAvatar) => {
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
        let oldImage = user.avatar;
        let nameImage = null;
        if (newAvatar) {
          if (user.avatar) {
            let filePathOld = `src/public/images/avatar/${user.avatar}`;
            fs.unlink(filePathOld, (err) => {
              if (err) {
                console.error(err);
              }
            });
          }

          let binaryData = newAvatar.buffer;
          nameImage = generateUniqueId() + newAvatar.originalname || "data.bin";
          let filePathNew = `src/public/images/avatar/${nameImage}`;
          fs.writeFile(filePathNew, binaryData, "binary", (err) => {
            if (err) {
              console.error("Error writing file:", err);
            } else {
              console.log("File saved successfully:", filePathNew);
            }
          });
        }

        await user.update({
          name: data.name,
          email: data.email,
          username: data.username,
          phone: data.phone,
          address: data.address,
          gender: data.gender,
          roleId: data.roleId,
          avatar: nameImage ?? oldImage,
        });

        if (data.originatorId) {
          let userNotify = await db.User.findByPk(data.originatorId);

          if (userNotify) {
            let getRole = await db.Role.findOne({
              where: {
                id: userNotify.roleId,
              },
            });

            await db.Notification.create({
              title: "Cập nhật thông tin tải khoản",
              message: `${userNotify.name || userNotify.username} (${
                getRole ? getRole.name : ""
              }) đã thay đổi thông tin tài khoản username: ${data.username}.`,
              userId: data?.originatorId,
            });
          }
        }

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

const deleteUser = (userId, originatorId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });

      if (originatorId) {
        let userNotify = await db.User.findByPk(originatorId);
        if (userNotify) {
          let getRole = await db.Role.findOne({
            where: {
              id: userNotify.roleId,
            },
          });

          await db.Notification.create({
            title: "Xóa tài Khoản",
            message: `${userNotify.name || userNotify.username} (${
              getRole ? getRole.name : ""
            }) đã xóa tài khoản username: ${user.username}.`,
            userId: originatorId,
          });
        }
      }

      if (!user) {
        resolve({
          errCode: 2,
          errMsg: "The user isn't exits",
        });
      }

      if (user.avatar) {
        let filePathOld = `src/public/images/avatar/${user.avatar}`;
        fs.unlink(filePathOld, (err) => {
          if (err) {
            console.error(err);
          }
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

module.exports = {
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  getAllUsersCompact: getAllUsersCompact,
  editUser: editUser,
  deleteUser: deleteUser,
};
