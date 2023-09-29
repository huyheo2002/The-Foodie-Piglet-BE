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
<<<<<<< HEAD
                
        return item
    })

=======

        // if(item.Variants) {
        //     console.log("oke oke")
        //     item.price = 500;

        //     delete item.Variants;
        // }

        // console.log("item", item)
        // console.log("item.price", item.price)
        return item
    })

    // let productFinal = 

>>>>>>> de82f8593ef270c8dfc3de78934d73189de8fae9
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

const handleEditProduct = async (req, res) => {
    console.log("req.body update", req.body);
    console.log("req.file update", req.file);
    let data = req.body;
    let message = await productServices.editProduct(data, req.file);

    return res.status(200).json(message)
}

const handleDeleteProduct = async (req, res) => {
    console.log("req.body", res.body)
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMsg: "Missing required parameter"
        })
    }
    let message = await productServices.deleteProduct(req.body.id);

    return res.status(200).json(message)
}

module.exports = {
    handleGetAllProducts: handleGetAllProducts,
    handleGetAllProductsCompact: handleGetAllProductsCompact,
    handleCreateNewProduct: handleCreateNewProduct,
    handleEditProduct: handleEditProduct,
    handleDeleteProduct: handleDeleteProduct
}