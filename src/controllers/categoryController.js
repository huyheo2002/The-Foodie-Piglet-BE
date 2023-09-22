import categoryServices from "../services/categoryServices";

const handleGetAllCategory = async (req, res) => {
    let id = req.query.id;
    // console.log("req.query.id", req.query.id);
    let categories = await categoryServices.getAllorOneCategory(id);
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        categories: categories
    })
}

module.exports = {
    handleGetAllCategory: handleGetAllCategory,
}