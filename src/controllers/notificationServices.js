import * as notificationServices from "../services/notificationServices";

const handleGetAllNotification = async (req, res) => {
  let notify = await notificationServices.getAllNotification();
  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    notify: notify,
  });
};

module.exports = {
  handleGetAllNotification: handleGetAllNotification,
};
