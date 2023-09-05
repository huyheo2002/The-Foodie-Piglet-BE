import productServices from "../services/productServices";
import categoryServices from "../services/categoryServices";
require("dotenv").config();

const handleGetAllProducts = async (req, res) => {
    let products = await productServices.getAllProduct();

    let newProducts = products.map((item) => {
        if (item.image) {
            item.image = `${process.env.URL_SERVER}/public/product/${item.image}`;
        }
        return item
    })

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        products: newProducts
    })
}

const handleGetAllProductsCompact = async (req, res) => {
    let products = await productServices.getAllProductCompact();
    let newProducts = products.map((item) => {

        if (item.image) {
            item.image = `${process.env.URL_SERVER}/public/product/${item.image}`;
        }

        console.log("item", item)
        return item
    })

    // let productFinal = 

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        products: newProducts
    })
}

const handleCreateNewProduct = async (req, res) => {
    console.log("req.body create", req.body);
    console.log("req.file create", req.file);
    let message = await productServices.createNewProduct(req.body, req.file);

    return res.status(200).json(message)
}

module.exports = {
    handleGetAllProducts: handleGetAllProducts,
    handleGetAllProductsCompact: handleGetAllProductsCompact,
    handleCreateNewProduct: handleCreateNewProduct
}