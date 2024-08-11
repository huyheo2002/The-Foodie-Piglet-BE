import * as permissionServices from "../services/permissionServices";

const handleGetAllPermissionGroup = async (req, res) => {
  let permissionGroup = await permissionServices.getAllPermissionGroup();
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    permissionGroup: permissionGroup,
  });
};

const handleGetAllPermission = async (req, res) => {
  let permission = await permissionServices.getAllPermission();
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    permission: permission,
  });
};

const handleCreatePermissionGroup = async (req, res) => {
  let data = req.body;
  const message = await permissionServices.createPermissionGroup(data);
  return res.status(200).json(message);
};

const handleUpdatePermissionGroup = async (req, res) => {
  let data = req.body;
  const message = await permissionServices.updatePermissionGroup(data);
  return res.status(200).json(message);
};

const handleDeletePermissionGroup = async (req, res) => {
  let id = req.body.id;
  const message = await permissionServices.deletePermissionGroup(id);
  return res.status(200).json(message);
};

const handleCreatePermission = async (req, res) => {
  let data = req.body;
  const message = await permissionServices.createPermission(data);
  return res.status(200).json(message);
};

const handleUpdatePermission = async (req, res) => {
  let data = req.body;
  const message = await permissionServices.updatePermission(data);
  return res.status(200).json(message);
};

const handleDeletePermission = async (req, res) => {
  let id = req.body.id;
  const message = await permissionServices.deletePermission(id);
  return res.status(200).json(message);
};

module.exports = {
  handleGetAllPermissionGroup: handleGetAllPermissionGroup,
  handleGetAllPermission: handleGetAllPermission,
  handleCreatePermissionGroup: handleCreatePermissionGroup,
  handleUpdatePermissionGroup: handleUpdatePermissionGroup,
  handleDeletePermissionGroup: handleDeletePermissionGroup,
  handleCreatePermission: handleCreatePermission,
  handleUpdatePermission: handleUpdatePermission,
  handleDeletePermission: handleDeletePermission,
};
