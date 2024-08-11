import roleServices from "../services/roleServices";

const handleGetAllRoles = async (req, res) => {
  let id = req.query.id;
  let roles = await roleServices.getAllRoles(id);
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    roles: roles,
  });
};

const handleGetAllRolesWithPermission = async (req, res) => {
  let roles = await roleServices.getAllRolesWithPermission();
  return res.status(200).json({
    errCode: 0,
    errMsg: "OK",
    roles: roles,
  });
};

const handleCreateNewRole = async (req, res) => {
  let data = req.body;
  let message = await roleServices.createNewRole(data);

  return res.status(200).json(message);
};

const handleUpdateRole = async (req, res) => {
  let data = req.body;
  let message = await roleServices.updateRole(data);

  return res.status(200).json(message);
};

const handleDeleteRole = async (req, res) => {
  let id = req.body.id;
  let message = await roleServices.deleteRole(id);

  return res.status(200).json(message);
};

module.exports = {
  handleGetAllRoles: handleGetAllRoles,
  handleGetAllRolesWithPermission: handleGetAllRolesWithPermission,
  handleCreateNewRole: handleCreateNewRole,
  handleUpdateRole: handleUpdateRole,
  handleDeleteRole: handleDeleteRole,
};
