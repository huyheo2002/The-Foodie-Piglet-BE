import db from "../models";

const getAllorOneCategory = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = "";
      if (categoryId === "all") {
        categories = await db.Category.findAll({
          attributes: {},
        });
      } else if (categoryId && categoryId !== "all") {
        categories = db.Category.findOne({
          where: { id: categoryId },
          attributes: {},
        });
      }

      resolve(categories);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllorOneCategory: getAllorOneCategory,
};
