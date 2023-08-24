import userServices from "../services/userServices";

const handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(!username || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameter!"
        })
    }

    let dataUser = await userServices.handleUserLogin(username, password);
    // console.log("dataUser", dataUser)

    return res.status(200).json({
        message: dataUser.errMsg,
        errCode: dataUser.errCode,
        user: dataUser.user ? dataUser.user : {}
    })
}

const handleGetAllUsers = async (req, res) => {
    // id : all => getallUsers, single => getOneUser
    // post sd: req.body get sd: req.query
    let id = req.query.id; 
    let users = await userServices.getAllUsers(id);
    // console.log("users", users)
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        users: users
    })
}

const handleGetAllUsersCompact = async (req, res) => {
    let id = req.query.id; 
    let users = await userServices.getAllUsersCompact(id);
    // console.log("users", users)
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        users: users
    })
}

const handleCreateNewUser = async (req, res) => {
    let message = await userServices.createNewUser(req.body);
    // console.log(message);

    return res.status(200).json(message)
}

const handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userServices.editUser(data);

    return res.status(200).json(message)
}

const handleDeleteUser = async (req, res) => {    
    console.log("req.body", res.body)
    if(!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMsg: "Missing required parameter"
        })
    }
    let message = await userServices.deleteUser(req.body.id);

    return res.status(200).json(message)
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleGetAllUsersCompact: handleGetAllUsersCompact,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,

}