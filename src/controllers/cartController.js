import cartServices from "../services/cartServices";

const handleGetAllCart = async (req, res) => {    
    let cart = await cartServices.getAllCart();
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        cart: cart
    })
}

const handleGetAllCartItemOfUser = async (req, res) => {    
    let data = req.query.userId;
    let listItem = await cartServices.getAllCartItemOfUser(data);
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        listItem: listItem
    })
}

const handleAddToCart = async (req, res) => {
    let data = req.body;
    let message = await cartServices.addToCart(data);
    return res.status(200).json(message)
}

const handleDeleteItemInCart = async (req, res) => {    
    let id = req.body.id;
    let message = await cartServices.deleteItemInCart(id);
    return res.status(200).json(message)
}

const handleRefreshCart = async (req, res) => {    
    let data = req.body.userId;
    let message = await cartServices.refreshCart(data);
    return res.status(200).json(message)
}

module.exports = {
    handleGetAllCart: handleGetAllCart,
    handleGetAllCartItemOfUser: handleGetAllCartItemOfUser,
    handleAddToCart: handleAddToCart,
    handleDeleteItemInCart: handleDeleteItemInCart,
    handleRefreshCart: handleRefreshCart,
}