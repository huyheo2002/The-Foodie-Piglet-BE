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
    let id = req.body.id; 
    let users = await userServices.getAllUsers(id);
    console.log("users", users)
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        users: users
    })
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
}