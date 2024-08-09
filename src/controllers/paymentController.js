import paymentServices from "../services/paymentServices";

const handleGetAllPayment = async (req, res) => {
  let payments = await paymentServices.getAllPayment();
  console.log("req", req);

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    payments: payments,
  });
};

const handleGetAllPaymentCompact = async (req, res) => {
  let payments = await paymentServices.getAllPaymentCompact();

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    payments: payments,
  });
};

const handleGetAllPaymentOfUser = async (req, res) => {
  let userId = req.query.userId;
  let payments = await paymentServices.findAllPaymentOfUser(userId);

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    payments: payments,
  });
};

const handleCreateNewOrder = async (req, res) => {
  const data = req.body;
  let message = await paymentServices.createNewOrder(data);

  return res.status(200).json(message);
};

const handleEditOrder = async (req, res) => {
  let data = req.body;
  let message = await paymentServices.editInfoOrder(data);

  return res.status(200).json(message);
};

const handleDeletePayment = async (req, res) => {
  if (!req.body.paymentId) {
    return res.status(200).json({
      errCode: 1,
      errMsg: "Missing required parameter",
    });
  }
  let message = await paymentServices.deleteOrder(req.body.paymentId);

  return res.status(200).json(message);
};

module.exports = {
  handleGetAllPayment: handleGetAllPayment,
  handleGetAllPaymentCompact: handleGetAllPaymentCompact,
  handleCreateNewOrder: handleCreateNewOrder,
  handleGetAllPaymentOfUser: handleGetAllPaymentOfUser,
  handleDeletePayment: handleDeletePayment,
  handleEditOrder: handleEditOrder,
};
