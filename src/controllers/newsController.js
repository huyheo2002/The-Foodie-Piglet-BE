import newsServices from "../services/newsServices"
const handleGetAllNews = async (req, res) => {
    // id : all => getallNews, single => getOneNews
    // post sd: req.body get sd: req.query
    let id = req.query.id; 
    let news = await newsServices.getAllNews(id);
    // console.log("News", news)
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        news: news
    })
}

const handleGetAllNewsCompact = async (req, res) => {
    let id = req.query.id; 
    let news = await newsServices.getAllNewsCompact(id);
    // console.log("news", news)
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        news: news
    })
}

const handleCreateNewNews = async (req, res) => {
    let message = await newsServices.createNewNews(req.body);
    // console.log(message);

    return res.status(200).json(message)
}

const handleEditNews = async (req, res) => {
    let data = req.body;
    let message = await newsServices.editNews(data);

    return res.status(200).json(message)
}

const handleDeleteNews = async (req, res) => {    
    console.log("req.body", res.body)
    if(!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMsg: "Missing required parameter"
        })
    }
    let message = await newsServices.deleteNews(req.body.id);

    return res.status(200).json(message)
}

module.exports = {
    handleGetAllNews: handleGetAllNews,
    handleCreateNewNews: handleCreateNewNews,
    handleGetAllNewsCompact: handleGetAllNewsCompact,
    handleEditNews: handleEditNews,
    handleDeleteNews: handleDeleteNews,
}