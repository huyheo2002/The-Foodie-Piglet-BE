import newServices from "../services/newServices"
require("dotenv").config();

const handleGetAllNews = async (req, res) => {
    // id : all => getallNews, single => getOneNew
    // post sd: req.body get sd: req.query
    let id = req.query.id; 
    let news = await newServices.getAllNews(id);
    // console.log("news", Array.isArray(news))

    let newNews = news ?? [];
    if(newNews.length > 0) {
        newNews = news.map((item) => {
            item.image = `${process.env.URL_SERVER}/public/News/${item.image}`;            

            return item
        })
    }
    // console.log("news", news)
    // console.log("newNews", newNews)

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        news: newNews
    })
}

const handleGetAllNewsCompact = async (req, res) => {
    let id = req.query.id; 
    let news = await newServices.getAllNewsCompact(id);
    // console.log("news", news)
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
       news:news
    })
}

const handleCreateNewNews = async (req, res) => {
    console.log("req.body create", req.body);
    console.log("req.file create", req.file);
    let message = await newServices.createNewNews(req.body, req.file);

    return res.status(200).json(message)
}

const handleEditNew = async (req, res) => {
    console.log("req.body update", req.body);
    console.log("req.file update", req.file);
    let data = req.body;
    let message = await newServices.editNew(data, req.file);

    return res.status(200).json(message)
}

const handleDeleteNew = async (req, res) => {    
    console.log("req.body", res.body)
    if(!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMsg: "Missing required parameter"
        })
    }
    let message = await newServices.deleteNew(req.body.id);

    return res.status(200).json(message)
}

module.exports = {
 
    handleGetAllNews: handleGetAllNews,
    handleCreateNewNews: handleCreateNewNews,
    handleGetAllNewsCompact: handleGetAllNewsCompact,
    handleEditNew: handleEditNew,
    handleDeleteNew: handleDeleteNew,
}