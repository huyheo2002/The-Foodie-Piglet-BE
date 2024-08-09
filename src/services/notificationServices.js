import db from "../models";

const getAllNotification = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let notify = await db.Notification.findAll();
      if (notify) {
        resolve(notify);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllNotification: getAllNotification,
};
