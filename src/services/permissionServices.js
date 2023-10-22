import db from "../models";

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
            let permission = await db.Permission.findAll();
            resolve(permission);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getAllPermissionGroup: getAllPermissionGroup,
    getAllPermission: getAllPermission,
};
