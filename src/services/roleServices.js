import db from "../models";

const getAllRoles = (roleId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let roles = "";
      if (roleId === "all") {
        roles = await db.Role.findAll();
      } else if (roleId && roleId !== "all") {
        roles = db.Role.findOne({
          where: { id: roleId },
          attributes: {},
        });
      }

      resolve(roles);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllRolesWithPermission = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let roles = await db.Role.findAll();
      let listPermission = await db.RolePermission.findAll();

      roles.forEach((role) => {
        const rolePermissions = listPermission.filter(
          (permission) => permission.roleId === role.id
        );
        role.dataValues.listPermission = rolePermissions;
      });

      resolve(roles);
    } catch (error) {
      reject(error);
    }
  });
};

const createNewRole = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        let role = await db.Role.create({
          name: data.name,
        });

        if (role) {
          let permission = null;
          if (data.permission) {
            const permissionArray = data.permission.split(",").map(Number);

            for (const permissionId of permissionArray) {
              const existingRolePermission = await db.RolePermission.findOne({
                where: {
                  roleId: role.id,
                  permissionId: permissionId,
                },
              });

              if (!existingRolePermission) {
                permission = await db.RolePermission.create({
                  roleId: role.id,
                  permissionId: permissionId,
                });
              }
            }
          }

          if (permission) {
            resolve({
              errCode: 0,
              message: "Ok",
            });
          }
        } else {
          resolve({
            errCode: 1,
            message: "Create fail",
          });
        }
      } else {
        resolve({
          errCode: 2,
          message: "Missing parameter",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateRole = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let role = await db.Role.findByPk(idPrim);

      if (role) {
        await role.update({
          name: data.name,
        });

        let permission = null;
        if (data.permission) {
          await db.RolePermission.destroy({
            where: { roleId: role.id },
          });

          const permissionArray = data.permission.split(",").map(Number);

          for (const permissionId of permissionArray) {
            const existingRolePermission = await db.RolePermission.findOne({
              where: {
                roleId: role.id,
                permissionId: permissionId,
              },
            });

            if (!existingRolePermission) {
              permission = await db.RolePermission.create({
                roleId: role.id,
                permissionId: permissionId,
              });
            } else {
            }
          }
        }

        if (permission) {
          resolve({
            errCode: 0,
            message: "Ok",
          });
        }
      } else {
        resolve({
          errCode: 1,
          message: "Role not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteRole = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      } else {
        const idPrim = id;
        let role = await db.Role.findByPk(idPrim);

        await db.RolePermission.destroy({
          where: { roleId: role.id },
        });

        let destroy = await db.Role.destroy({
          where: { id: id },
        });

        if (destroy) {
          resolve({
            errCode: 0,
            message: "The Role is deleted",
          });
        } else {
          resolve({
            errCode: 1,
            message: "Delete Role fail",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllRoles: getAllRoles,
  getAllRolesWithPermission: getAllRolesWithPermission,
  createNewRole: createNewRole,
  updateRole: updateRole,
  deleteRole: deleteRole,
};
