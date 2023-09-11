import db from "../models";

const getAllNew_type = (news_typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
        console.log(news_typeId);
      let news_type = "";      
      if (news_typeId === "all") {
        news_type = await db.News_type.findAll({
          attributes: {},
        });
      } else if (news_typeId && news_typeId !== "all") {
        news_type = db.News_type.findOne({
          where: { id: news_typeId },
          attributes: {},
        });
      } else {
      }
      console.log("news_pytes", news_type)
      resolve(news_type);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllNew_type: getAllNew_type,
};
