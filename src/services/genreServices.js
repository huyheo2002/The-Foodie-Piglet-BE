import db from "../models";

const getAllGenres = (genreId) => {
  return new Promise(async (resolve, reject) => {
    try {
        console.log(genreId);
      let genres = "";      
      if (genreId === "all") {
        genres = await db.Genre.findAll({
          attributes: {},
        });
      } else if (genreId && genreId !== "all") {
        genres = db.Genre.findOne({
          where: { id: genreId },
          attributes: {},
        });
      } else {
      }
      // console.log("genres", genres)
      resolve(genres);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllGenres: getAllGenres,
};
