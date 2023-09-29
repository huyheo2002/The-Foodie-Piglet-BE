import { where } from "sequelize";
import db from "../models";
import makeKeyword from "../utils/makeKeyword";
import generateUniqueId from "../utils/uniqueName";
const fs = require("fs");
require("dotenv").config();

const findVariantWithIdCompact = (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let variant = await db.Variant.findAll({
                attributes: {
                    exclude: ["keyword", "desc", "createdAt", "updatedAt", "productId"]
                },
                where: {
                    productId: productId
                },
                order: [['name', 'DESC'], ['price', 'DESC']]
            });

            resolve(variant);
        } catch (error) {
            console.log(error);
        }
    })
}

const findOneVariantWithIdCompact = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let variant = await db.Variant.findOne({
                attributes: {
                    exclude: ["keyword", "desc", "createdAt", "updatedAt", "productId"]
                },
                where: {
                    id: id
                },
                order: [['name', 'DESC'], ['price', 'DESC']]
            });

            resolve(variant);
        } catch (error) {
            console.log(error);
        }
    })
}

const createNewVariantInProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let variant = null;
            if (data.productId && data.size) {
                variant = await db.Variant.findOne({
                    where: {
                        productId: data.productId,
                        name: data.size
                    }
                });

                if (variant) {
                    await variant.update({
                        name: data.size,
                        price: data.price,
                        discountVariant: data.discountVariant ?? null,
                        productId: data.productId,
                    });
                } else {
                    await db.Variant.create({
                        name: data.size,
                        price: data.price,
                        discountVariant: data.discountVariant ?? null,
                        productId: data.productId,
                    });
                }
            }

            resolve({
                errCode: 0,
                message: "Ok",
                variant: variant
            });
        } catch (error) {
            reject(error);
        }
    });
};

const editVariantInProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.productId || !data.size) {
                resolve({
                    errCode: 2,
                    message: "Missing required parameter",
                });
            }

            let variant = await db.Variant.findOne({
                where: {
                    productId: data.productId,
                    name: data.size
                }
            });

            if (variant) {
                await variant.update({
                    name: data.size,
                    price: data.price,
                    discountVariant: data.discountVariant ?? null,
                    productId: data.productId,
                });

                resolve({
                    errCode: 0,
                    message: "Ok",
                    variant: variant,
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Variant in Product not found",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteVariantInProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let variant = await db.Variant.findOne({
                where: {
                    // productId: data.productId,
                    id: data.id
                }
            });

            if(variant) {
                await db.Variant.destroy({
                    where: { id: data.id },
                });                                 
            } else {
                resolve({
                    errCode: 2,
                    errMsg: "The variant in product isn't exits",
                });
            }

            resolve({
                errCode: 0,
                message: "The variant in products is deleted",
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    findVariantWithIdCompact: findVariantWithIdCompact,
    createNewVariantInProduct: createNewVariantInProduct,
    editVariantInProduct: editVariantInProduct,
    deleteVariantInProduct: deleteVariantInProduct,
    findOneVariantWithIdCompact: findOneVariantWithIdCompact
}
