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
        dateEnd: data.dateEnd,
      });

      resolve(respon);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllReserveTable = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let tables = await db.ReserveTable.findAll({
        include: [
          {
            model: db.sequelize.models.Tables,
            attributes: ["name"],
          },
        ],
      });

      resolve(tables);
    } catch (error) {
      reject(error);
    }
  });
};

const updateReserveTable = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let reserveTable = await db.ReserveTable.findByPk(idPrim);

      if (reserveTable) {
        await reserveTable.update({
          idTable: data.idTable,
          name: data.name,
          email: data.email,
          phone: data.phone,
          dateStart: data.dateStart,
          dateEnd: data.dateEnd,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          reserveTable: reserveTable,
        });
      } else {
        resolve({
          errCode: 1,
          message: "Reserve table not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteReserveTable = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      } else {
        let destroy = await db.ReserveTable.destroy({
          where: { id: id },
        });

        if (destroy) {
          resolve({
            errCode: 0,
            message: "The reserve table is deleted",
          });
        } else {
          resolve({
            errCode: 1,
            message: "Delete reserve table fail",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createReserveTable: createReserveTable,
  getAllReserveTable: getAllReserveTable,
  updateReserveTable: updateReserveTable,
  deleteReserveTable: deleteReserveTable,
};
