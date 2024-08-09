import userServices from "../services/userServices";
require("dotenv").config();

const handleLoginSuccess = async (req, res) => {
  const email = req.params.email;
  if (!email) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs!",
    });
  }
  let dataUser = await userServices.userLoginGoogleSuccess(email);

  res.status(200).json({
    message: dataUser.errMsg,
    errCode: dataUser.errCode,
    accessToken: dataUser.accessToken ? dataUser.accessToken : {},
  });
  res.end();
};

const handleLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }

  let dataUser = await userServices.handleUserLogin(username, password);

  return res.status(200).json({
    message: dataUser.errMsg,
    errCode: dataUser.errCode,
    accessToken: dataUser.accessToken ? dataUser.accessToken : {},
  });
};

const handleGetAllUsers = async (req, res) => {
  let id = req.query.id;
  let users = await userServices.getAllUsers(id);

  let newUsers = users ?? [];
  if (newUsers.length > 0) {
    newUsers = users.map((item) => {
      if (item.avatar == null) {
        item.avatar = item.avatar;
      } else {
        item.avatar = `${process.env.URL_SERVER}/public/avatar/${item.avatar}`;
      }

      return item;
    });
  }

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    users: newUsers,
  });
};

const handleGetAllUsersCompact = async (req, res) => {
  let id = req.query.id;
  let users = await userServices.getAllUsersCompact(id);
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    users: users,
  });
};

const handleCreateNewUser = async (req, res) => {
  let message = await userServices.createNewUser(req.body, req.file);

  return res.status(200).json(message);
};

const handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userServices.editUser(data, req.file);

  return res.status(200).json(message);
};

const handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMsg: "Missing required parameter",
    });
  }
  let message = await userServices.deleteUser(
    req.body.id,
    req.body.originatorId
  );

  return res.status(200).json(message);
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleGetAllUsersCompact: handleGetAllUsersCompact,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  handleLoginSuccess: handleLoginSuccess,
};
