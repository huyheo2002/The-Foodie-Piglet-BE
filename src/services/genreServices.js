import db from "../models";

const getAllGenres = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let genres = await db.Genre.findAll();
      resolve(genres);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllGenres: getAllGenres,
};
