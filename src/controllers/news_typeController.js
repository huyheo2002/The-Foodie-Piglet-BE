
import news_typeServices from "../services/news_typeServices"

const handleGetAllNews_type = async (req, res) => {
    let id = req.query.id; 
    let news_type = await news_typeServices.GetAllNews_type(id);
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        news_type: news_type
    })
}

module.exports = {
    handleGetAllNews_type: handleGetAllNews_type,
}