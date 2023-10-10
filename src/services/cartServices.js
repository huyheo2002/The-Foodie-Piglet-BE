import db from "../models";

const getAllCart = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Cart.findAll();

            resolve(cart);
        } catch (error) {
            reject(error);
        }
    })
}

const getAllCartItemOfUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findCartOfUser = await db.Cart.findOne({
                where: { userId: userId }
            });

            let listItemInCart = null;
            if (findCartOfUser) {
                listItemInCart = await db.CartItem.findAll({
                    where: { cartId: findCartOfUser.id }
                });
            }
            resolve(listItemInCart);
        } catch (error) {
            reject(error);
        }
    })
}

const addToCart = (data) => {
    return new Promise(async (resolve, reject) => {
        try {            
            if (data.idDelete) {
                await db.CartItem.destroy({
                    where: { id: data.idDelete },
                });
            }
            // console.log("data", data);
            let cartOfUser = await db.Cart.findOne({
                where: { userId: data.userId }
            })

            let createCartOfUser = null;
            let createCartItem = null;
            if (cartOfUser) {
                let itemInCart = await db.CartItem.findOne({
                    where: {
                        cartId: cartOfUser.id,
                        prodId: data.prodId,
                        size: data.size,
                    }
                });

                if (itemInCart) {
                    let updateCartItem = await itemInCart.update({
                        cartId: cartOfUser.id,
                        prodId: data.prodId,
                        quantity: data.quantity ?? 1,
                        size: data.size,
                        price: data.price,
                    });                    

                    if (updateCartItem) {
                        resolve({
                            errCode: 0,
                            message: "Add to cart success",
                            dataCartItem: updateCartItem
                        });
                    } else {
                        resolve({
                            errCode: 1,
                            message: "create error",
                        });
                    }                    
                } else {
                    createCartItem = await db.CartItem.create({
                        cartId: cartOfUser.id,
                        prodId: data.prodId,
                        quantity: data.quantity ?? 1,
                        size: data.size,
                        price: data.price,
                    });

                    if (createCartItem) {
                        resolve({
                            errCode: 0,
                            message: "Add to cart success",
                            dataCartItem: createCartItem
                        });
                    } else {
                        resolve({
                            errCode: 1,
                            message: "create error",
                        });
                    }
                }
            } else {
                createCartOfUser = await db.Cart.create({
                    userId: data.userId,
                });

                if (createCartOfUser) {
                    // create item in cart
                    createCartItem = await db.CartItem.create({
                        cartId: createCartOfUser.id,
                        prodId: data.prodId,
                        quantity: data.quantity ?? 1,
                        size: data.size,
                        price: data.price,
                    })

                    if (createCartItem) {
                        resolve({
                            errCode: 0,
                            message: "Add to cart success",
                            dataCartItem: createCartItem
                        });
                    } else {
                        resolve({
                            errCode: 1,
                            message: "create error",
                        });
                    }
                } else {
                    resolve({
                        errCode: 1,
                        message: "create error",
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
}

const deleteItemInCart = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.CartItem.destroy({
                where: { id: id },
            });

            resolve({
                errCode: 0,
                message: "Item in cart is deleted",
            });            
        } catch (error) {
            reject(error);
        }
    });
}

const refreshCart = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findCartOfUser = await db.Cart.findOne({
                where: { userId: userId }
            });

            if (findCartOfUser) {
                await db.CartItem.destroy({
                    where: { cartId: findCartOfUser.id },
                });

                resolve({
                    errCode: 0,
                    message: "Cart already refresh",
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Cart isn't exist",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllCart: getAllCart,
    getAllCartItemOfUser: getAllCartItemOfUser,
    addToCart: addToCart,
    deleteItemInCart: deleteItemInCart,
    refreshCart: refreshCart,
}