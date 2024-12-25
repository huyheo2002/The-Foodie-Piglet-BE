import productServices from "../services/productServices";
require("dotenv").config();

const handleGetAllProducts = async (req, res) => {
  let products = await productServices.getAllProduct();

  let newProducts = products.map((item) => {
    if (item.image) {
      item.image = `${process.env.URL_SERVER}/public/product/${item.image}`;
    }
    return item;
  });

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    products: newProducts,
  });
};

const handleGetAllProductsCompact = async (req, res) => {
  let products = await productServices.getAllProductCompact();

  let newProducts = products.map((item) => {
    if (item.image) {
      item.image = `${process.env.URL_SERVER}/public/product/${item.image}`;
    }

    return item;
  });

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    products: newProducts,
  });
};

const handleGetProductCountByCategories = async (req, res) => {
  let countProductOfCategories = await productServices.getAllProductCountByCategory();

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    countProductOfCategories: countProductOfCategories,
  });
};

const handleFindOneProduct = async (req, res) => {
  let id = req.query.id;
  let products = await productServices.findOneProduct(id);

  let newProducts = products ?? null;
  if (newProducts) {
    newProducts.image = `${process.env.URL_SERVER}/public/product/${newProducts.image}`;
  }

  return res.status(200).json({
    errCode: 0,
    errMsg: "Ok",
    products: newProducts,
  });
};

const handleCreateNewProduct = async (req, res) => {
  let message = await productServices.createNewProduct(req.body, req.file);

  return res.status(200).json(message);
};

const handleEditProduct = async (req, res) => {
  let data = req.body;
  let message = await productServices.editProduct(data, req.file);

  return res.status(200).json(message);
};

const handleDeleteProduct = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMsg: "Missing required parameter",
    });
  }
  let message = await productServices.deleteProduct(req.body.id);

  return res.status(200).json(message);
};

module.exports = {
  handleGetAllProducts: handleGetAllProducts,
  handleGetAllProductsCompact: handleGetAllProductsCompact,
  handleCreateNewProduct: handleCreateNewProduct,
  handleEditProduct: handleEditProduct,
  handleDeleteProduct: handleDeleteProduct,
  handleFindOneProduct: handleFindOneProduct,
  handleGetProductCountByCategories: handleGetProductCountByCategories,
};
