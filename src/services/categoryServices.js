import db from "../models";

const getAllorOneCategory = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
    //   console.log("categoryId", categoryId);
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

    //   console.log("categories", categories)
      resolve(categories);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllorOneCategory: getAllorOneCategory,
};
