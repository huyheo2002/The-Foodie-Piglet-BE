import db from "../models";

const getAllRoles = (roleId) => {
  return new Promise(async (resolve, reject) => {
    try {
        console.log(roleId);
      let roles = "";      
      if (roleId === "all") {
        roles = await db.Role.findAll({
          attributes: {},
        });
      } else if (roleId && roleId !== "all") {
        roles = db.Role.findOne({
          where: { id: roleId },
          attributes: {},
        });
      } else {
      }
      console.log("reoles", roles)
      resolve(roles);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllRoles: getAllRoles,
};
