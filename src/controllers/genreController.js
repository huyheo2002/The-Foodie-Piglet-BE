import genreServices from "../services/genreServices";

const handleGetAllGenres = async (req, res) => {
  let genres = await genreServices.getAllGenres();
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    genres: genres,
  });
};

module.exports = {
  handleGetAllGenres: handleGetAllGenres,
};
