import db from "../models";

const getAllNewsCompact = (newsId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = "";
      if (newsId === "all") {
        news = await db.News.findAll({
          attributes: {
            exclude: [
              "des",
              "createdAt",
              "updatedAt",
              "avatar",
            ],
          },
        });
      } else if (newsId && newsId !== "all") {
        news = db.News.findOne({
          where: { id: newsId },
          attributes: {
            exclude: [
              "des",
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
      resolve(news);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllNews = (newsId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = "";
      if (newsId === "all") {
        news = await db.News.findAll({
          attributes: {
          
          },
        });
      } else if (newsId && newsId !== "all") {
        news = db.News.findOne({
          where: { id: newsId },
          attributes: {
           
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

const createNewNews = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check username is exits
      // let isExits = await checkname(data.name);
      // console.log("isExits", isExits)
      if (isExits === true) {
        resolve({
          errCode: 1,
          message:
            "Your name is already in used, Please try another name",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const editNews = (data) => {
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
      let news = await db.News.findByPk(idPrim);
      if (news) {
        await news.update({
          name: data.name,
        //   email: data.email,
          name: data.name,
          // password: hashPasswordFromBcrypt || data.password,
        //   phone: data.phone,
        //   address: data.address,
        //   gender: data.gender,
        des: data.des,
          news_typeId: data.news_typeId,
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

const deleteNews = (newsId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let news = await db.News.findOne({
        where: { id: newsId },
      });
      if (!news) {
        resolve({
          errCode: 2,
          errMsg: "The news isn't exits",
        });
      }

      await db.News.destroy({
        where: { id: newsId },
      });

      resolve({
        errCode: 0,
        message: "The news is deleted",
      });
    } catch (error) {
      reject(error);
    }
  });
};

// const userLoginGoogleSuccess = (email) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       console.log("vaiz mèm :v")
//       let user = await db.User.findOne({
//         where: { email: email },
//       });
//       if (!user) {
//         resolve({
//           errCode: 2,
//           errMsg: "The user isn't exits",
//         });
//       }      

//       resolve({
//         errCode: 0,
//         message: "Login success",
//         user: user
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

module.exports = {
  
  getAllNews: getAllNews,
  createNewNews: createNewNews,
  getAllNewsCompact: getAllNewsCompact,
  editNews: editNews,
  deleteNews: deleteNews,
 
};
