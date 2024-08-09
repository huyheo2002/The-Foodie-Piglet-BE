import newServices from "../services/newServices";
require("dotenv").config();

const handleGetAllNews = async (req, res) => {
  let id = req.query.id;
  let news = await newServices.getAllNews(id);

  let newNews = news ?? [];
  if (newNews.length > 0) {
    newNews = news.map((item) => {
      item.image = `${process.env.URL_SERVER}/public/news/${item.image}`;

      return item;
    });
  }

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    news: newNews,
  });
};

const handleGetAllNewsCompact = async (req, res) => {
  let id = req.query.id;
  let news = await newServices.getAllNewsCompact(id);
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    news: news,
  });
};

const handleCreateNewNews = async (req, res) => {
  let message = await newServices.createNewNews(req.body, req.file);

  return res.status(200).json(message);
};

const handleEditNew = async (req, res) => {
  let data = req.body;
  let message = await newServices.editNew(data, req.file);

  return res.status(200).json(message);
};

const handleDeleteNew = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMsg: "Missing required parameter",
    });
  }
  let message = await newServices.deleteNew(req.body.id);

  return res.status(200).json(message);
};

module.exports = {
  handleGetAllNews: handleGetAllNews,
  handleCreateNewNews: handleCreateNewNews,
  handleGetAllNewsCompact: handleGetAllNewsCompact,
  handleEditNew: handleEditNew,
  handleDeleteNew: handleDeleteNew,
};
