import tableServices from "../services/tableServices";

const handleGetAllTables = async (req, res) => {
    let id = req.query.id; 
    let tables = await tableServices.getAllTables(id);
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        tables: tables
    })
}

module.exports = {
    handleGetAllTables: handleGetAllTables,
}