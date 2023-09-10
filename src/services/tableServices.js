import db from "../models";

const getAllTables = (tableId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(tableId);
      let tables = "";
      if (tableId === "all") {
        tables = await db.Tables.findAll({
          attributes: {},
        });
      } else if (tableId && tableId !== "all") {
        tables = db.Tables.findOne({
          where: { id: tableId },
          attributes: {},
        });
      }
      resolve(tables);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllTables: getAllTables,
};
