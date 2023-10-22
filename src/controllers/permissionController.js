import * as permissionServices from "../services/permissionServices";

const handleGetAllPermissionGroup = async (req, res) => {
    let permissionGroup = await permissionServices.getAllPermissionGroup();
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        permissionGroup: permissionGroup
    })
}

const handleGetAllPermission = async (req, res) => {
    let permission = await permissionServices.getAllPermission();
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        permission: permission
    })
}

module.exports = {
    handleGetAllPermissionGroup: handleGetAllPermissionGroup,
    handleGetAllPermission: handleGetAllPermission,
}