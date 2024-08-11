import db from "../models";
import makeKeyword from "../utils/makeKeyword";

const getAllPermissionGroup = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let permissionGroup = await db.PermissionGroup.findAll();
      resolve(permissionGroup);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllPermission = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let permission = await db.Permission.findAll({
        include: [
          {
            model: db.sequelize.models.PermissionGroup,
            attributes: ["name"],
          },
        ],
      });
      resolve(permission);
    } catch (error) {
      reject(error);
    }
  });
};

const createPermissionGroup = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        let keyword = "";
        if (data.name) {
          keyword = makeKeyword(data.name);
        }

        let permissionGroup = await db.PermissionGroup.create({
          keyword: keyword,
          name: data.name,
        });

        if (permissionGroup) {
          resolve({
            errCode: 0,
            message: "Ok",
          });
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

const updatePermissionGroup = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let permissionGroup = await db.PermissionGroup.findByPk(idPrim);

      if (permissionGroup) {
        let keyword = "";
        if (data.name) {
          keyword = makeKeyword(data.name);
        }

        await permissionGroup.update({
          keyword: keyword,
          name: data.name,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          permissionGroup: permissionGroup,
        });
      } else {
        resolve({
          errCode: 1,
          message: "Permission group not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deletePermissionGroup = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      } else {
        let destroy = await db.PermissionGroup.destroy({
          where: { id: id },
        });

        if (destroy) {
          resolve({
            errCode: 0,
            message: "The Permission Group is deleted",
          });
        } else {
          resolve({
            errCode: 1,
            message: "Delete Permission Group fail",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

const createPermission = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        let keyword = "";
        if (data.name) {
          keyword = makeKeyword(data.name);
        }

        let permission = await db.Permission.create({
          keyword: keyword,
          name: data.name,
          permissionGroupId: data.permissionGroupId,
        });

        if (permission) {
          resolve({
            errCode: 0,
            message: "Ok",
          });
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

const updatePermission = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let permission = await db.Permission.findByPk(idPrim);

      if (permission) {
        let keyword = "";
        if (data.name) {
          keyword = makeKeyword(data.name);
        }

        await permission.update({
          keyword: keyword,
          name: data.name,
          permissionGroupId: data.permissionGroupId,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          permission: permission,
        });
      } else {
        resolve({
          errCode: 1,
          message: "Permission not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deletePermission = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      } else {
        let destroy = await db.Permission.destroy({
          where: { id: id },
        });

        if (destroy) {
          resolve({
            errCode: 0,
            message: "The Permission  is deleted",
          });
        } else {
          resolve({
            errCode: 1,
            message: "Delete Permission  fail",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllPermissionGroup: getAllPermissionGroup,
  getAllPermission: getAllPermission,
  createPermissionGroup: createPermissionGroup,
  updatePermissionGroup: updatePermissionGroup,
  deletePermissionGroup: deletePermissionGroup,
  createPermission: createPermission,
  updatePermission: updatePermission,
  deletePermission: deletePermission,
};
