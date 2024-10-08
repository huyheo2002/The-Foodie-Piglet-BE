import db from "../models";
const fs = require("fs");
require("dotenv").config();
import generateUniqueId from "../utils/uniqueName";

const getAllNewsCompact = (newId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = "";
      if (newId === "all") {
        news = await db.New.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
      } else if (newId && newId !== "all") {
        news = db.New.findOne({
          where: { id: newId },
          attributes: {
            exclude: ["name", "desc", "image", "createdAt", "updatedAt"],
          },
        });
      } else {
      }
      resolve(news);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllNews = (newId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = "";
      if (newId === "all") {
        news = await db.New.findAll({
          include: [
            {
              model: db.sequelize.models.Genre,
              attributes: ["name"],
            },
          ],
        });
      } else if (newId && newId !== "all") {
        news = db.New.findOne({
          where: { id: newId },
          attributes: {
            exclude: ["name", "desc", "image", "createdAt", "updatedAt"],
            include: [
              {
                model: db.sequelize.models.Genre,
                attributes: ["name"],
              },
            ],
          },
        });
      }
      resolve(news);
    } catch (error) {
      reject(error);
    }
  });
};

const createNewNews = (data, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      let nameImage = null;
      if (image) {
        let binaryData = image.buffer;
        nameImage = generateUniqueId() + image.originalname || "data.bin";
        let filePath = `src/public/images/news/${nameImage}`;
        fs.writeFile(filePath, binaryData, "binary", (err) => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log("File saved successfully:", filePath);
          }
        });
      }

      await db.New.create({
        name: data.name,
        desc: data.desc,
        genreId: data.genreId,
        image: nameImage,
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

const editNew = (data, newImage) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let news = await db.New.findByPk(idPrim);

      if (news) {
        console.log("new tồn tại");
        let oldImage = news.image;
        let nameImage = null;
        if (newImage) {
          if (news.image) {
            let filePathOld = `src/public/images/news/${news.image}`;
            fs.unlink(filePathOld, (err) => {
              if (err) {
                console.error(err);
              }
            });
          }

          let binaryData = newImage.buffer;
          nameImage = generateUniqueId() + newImage.originalname || "data.bin";
          let filePathNew = `src/public/images/news/${nameImage}`;
          fs.writeFile(filePathNew, binaryData, "binary", (err) => {
            if (err) {
              console.error("Error writing file:", err);
            } else {
              console.log("File saved successfully:", filePathNew);
            }
          });
        }

        await news.update({
          name: data.name,
          desc: data.desc,
          genreId: data.genreId,
          image: nameImage ?? oldImage,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          news: news,
        });
      } else {
        resolve({
          errCode: 1,
          message: "New not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteNew = (newId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = await db.New.findOne({
        where: { id: newId },
      });
      if (!news) {
        resolve({
          errCode: 2,
          errMsg: "The news isn't exits",
        });
      }

      if (news.image) {
        let filePathOld = `src/public/images/news/${news.image}`;
        fs.unlink(filePathOld, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }

      await db.New.destroy({
        where: { id: newId },
      });

      resolve({
        errCode: 0,
        message: "The new is deleted",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllNews: getAllNews,
  createNewNews: createNewNews,
  getAllNewsCompact: getAllNewsCompact,
  editNew: editNew,
  deleteNew: deleteNew,
};
