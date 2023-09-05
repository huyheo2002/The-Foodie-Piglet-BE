import db from "../models";
import makeKeyword from "../utils/makeKeyword";
import generateUniqueId from "../utils/uniqueName";
const fs = require("fs");
require("dotenv").config();

const getAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll();
            resolve(products);
        } catch (error) {
            console.log(error);
        }
    })
}

const getAllProductCompact = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({
                include: [{
                    model: db.sequelize.models.Category,
                    attributes: ["name"], // Bỏ lấy tất cả các cột từ bảng Category
                }],
                attributes: {
                    // include: [db.sequelize.models.Category],
                    exclude: ["keyword", "desc", "createdAt", "updatedAt", "categoryId"]
                },
            });
            resolve(products);
        } catch (error) {
            console.log(error);
        }
    })
}

const createNewProduct = (data, image) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nameImage = null;
            if (image) {
                let binaryData = image.buffer;
                nameImage =
                    generateUniqueId() + image.originalname || "data.bin";
                let filePath = `src/public/images/product/${nameImage}`;
                fs.writeFile(filePath, binaryData, "binary", (err) => {
                    if (err) {
                        console.error("Error writing file:", err);
                    } else {
                        console.log("File saved successfully:", filePath);
                    }
                });
            }

            // make keyword
            let keyword = null;
            if (data && data.name) {
                keyword = makeKeyword(data.name)
            }

            await db.Product.create({
                keyword: keyword,
                name: data.name,
                discount: data.discount,
                desc: data.desc,
                categoryId: data.categoryId,
                image: nameImage
            });

            resolve({
                errCode: 0,
                message: "Ok",
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllProduct: getAllProduct,
    getAllProductCompact: getAllProductCompact,
    createNewProduct: createNewProduct
}
