import db from "../models";

const createReserveTable = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let respon = await db.ReserveTable.create({
                idTable: data.idTable,
                name: data.name,
                email: data.email,
                phone: data.phone,
                dateStart: data.dateStart,
                dateEnd: data.dateEnd
            });

            resolve(respon);
        } catch (error) {
            reject(error)
        }
    })
}

const getAllReserveTable = (tableId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let tables = "";
        if (tableId === "all") {
          tables = await db.ReserveTable.findAll({
            attributes: {},
          });
        } else if (tableId && tableId !== "all") {
          tables = db.ReserveTable.findOne({
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
    createReserveTable: createReserveTable,
    getAllReserveTable: getAllReserveTable
}