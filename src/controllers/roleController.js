import roleServices from "../services/roleServices";

const handleGetAllRoles = async (req, res) => {
    let id = req.query.id; 
    let roles = await roleServices.getAllRoles(id);
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        roles: roles
    })
}

module.exports = {
    handleGetAllRoles: handleGetAllRoles,
}