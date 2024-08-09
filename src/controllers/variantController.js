import variantServices from "../services/variantServices";

const handleFindVariantWithIdCompact = async (req, res) => {
  let id = req.query.id;
  let variantInProduct = await variantServices.findVariantWithIdCompact(id);

  let newVariant = variantInProduct ?? [];
  if (newVariant.length > 0) {
    newVariant = variantInProduct.map((item) => {
      if (item.discountVariant === null) {
        item.discountVariant = 0;
      }
      item.dataValues.originalPrice = item.price;
      item.dataValues.currentPrice =
        item.price - (item.price * item.discountVariant) / 100;
      delete item.dataValues.price;
      return item;
    });
  }

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    variant: newVariant,
  });
};

const handleFindOneVariantWithIdCompact = async (req, res) => {
  let id = req.query.id;
  let variantInProduct = await variantServices.findOneVariantWithIdCompact(id);

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    variant: variantInProduct,
  });
};

const handleCreateNewVariantInProduct = async (req, res) => {
  let message = await variantServices.createNewVariantInProduct(req.body);

  return res.status(200).json(message);
};

const handleEditVariantInProduct = async (req, res) => {
  let data = req.body;
  let message = await variantServices.editVariantInProduct(data);

  return res.status(200).json(message);
};

const handleDeleteVariantInProduct = async (req, res) => {
  let data = req.body;
  let message = await variantServices.deleteVariantInProduct(data);

  return res.status(200).json(message);
};

module.exports = {
  handleFindVariantWithIdCompact: handleFindVariantWithIdCompact,
  handleCreateNewVariantInProduct: handleCreateNewVariantInProduct,
  handleEditVariantInProduct: handleEditVariantInProduct,
  handleDeleteVariantInProduct: handleDeleteVariantInProduct,
  handleFindOneVariantWithIdCompact: handleFindOneVariantWithIdCompact,
};
