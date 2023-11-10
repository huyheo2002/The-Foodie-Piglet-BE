require("dotenv").config();
import authServices from "../services/authServices";

const handleLoginSuccess = async (req, res) => {
    const email = req.params.email;
    console.log("email", email)
    if (!email) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs!"
        })
    }
    let dataUser = await authServices.userLoginGoogleSuccess(email);

    res.status(200).json({
        message: dataUser.errMsg,
        errCode: dataUser.errCode,
        accessToken: dataUser.accessToken ? dataUser.accessToken : {}
    })
    res.end();
    // res.write(req.params.userId);
}

const handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameter!"
        })
    }

    let dataUser = await authServices.userLogin(username, password);
    // console.log("dataUser", dataUser)

    return res.status(200).json({
        message: dataUser.errMsg,
        errCode: dataUser.errCode,
        accessToken: dataUser.accessToken ? dataUser.accessToken : {}
    })
}

const handleRegister = async (req, res) => {
    let data = req.body;
    let message = await authServices.userRegister(data);

    return res.status(200).json(message);
}

const handleChangePassword = async (req, res) => {
    let data = req.body;
    let message = await authServices.changePassword(data);

    return res.status(200).json(message)
}

module.exports = {
    handleLogin: handleLogin,
    handleLoginSuccess: handleLoginSuccess,
    handleRegister: handleRegister,
    handleChangePassword: handleChangePassword
}